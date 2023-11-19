import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

import {
  userConfirm,
  findById,
  tokenRegeneration,
  logout,
  regist,
  //   modify,
  profileIdx,
  withdrawal,
} from "@/api/user";
import { httpStatusCode } from "@/util/http-status";

export const useMemberStore = defineStore(
  "memberStore",
  () => {
    const router = useRouter();

    const isLogin = ref(false);
    const boardNo = ref(0);
    const isLoginError = ref(false);
    const userInfo = ref({
      userId: "",
      userName: "",
      filePath: "",
    });
    const isValidToken = ref(false);

    const userLogin = async (loginUser) => {
      await userConfirm(
        loginUser,
        (response) => {
          // console.log("login ok!!!!", response.status);
          // console.log("login ok!!!!", httpStatusCode.CREATE);
          if (response.status === httpStatusCode.CREATE) {
            let { data } = response;
            // console.log("data", data);
            let accessToken = data["access-token"];
            let refreshToken = data["refresh-token"];
            console.log("accessToken", accessToken);
            console.log("refreshToken", refreshToken);
            isLogin.value = true;
            isLoginError.value = false;
            isValidToken.value = true;
            sessionStorage.setItem("accessToken", accessToken);
            sessionStorage.setItem("refreshToken", refreshToken);
            console.log("sessiontStorage에 담았다", isLogin.value);
          } else {
            console.log("로그인 실패했다");
            isLogin.value = false;
            isLoginError.value = true;
            isValidToken.value = false;
          }
        },
        (error) => {
          alert("아이디와 비밀번호를 확인 해 주세요");
          console.error(error);
        }
      );
    };

    const getUserInfo = (token) => {
      let decodeToken = jwtDecode(token);
      console.log("2. decodeToken", decodeToken);
      findById(
        decodeToken.userId,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            userInfo.value = response.data.userInfo;
            console.log("3. getUserInfo data >> ", response.data);
          } else {
            console.log("유저 정보 없음!!!!");
          }
        },
        async (error) => {
          console.error(
            "getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ",
            error.response.status
          );
          isValidToken.value = false;

          await tokenRegenerate();
        }
      );
    };

    const tokenRegenerate = async () => {
      console.log(
        "토큰 재발급 >> 기존 토큰 정보 : {}",
        sessionStorage.getItem("accessToken")
      );
      await tokenRegeneration(
        JSON.stringify(userInfo.value),
        (response) => {
          if (response.status === httpStatusCode.CREATE) {
            let accessToken = response.data["access-token"];
            console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
            sessionStorage.setItem("accessToken", accessToken);
            isValidToken.value = true;
          }
        },
        async (error) => {
          // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
          if (error.response.status === httpStatusCode.UNAUTHORIZED) {
            console.log("갱신 실패");
            // 다시 로그인 전 DB에 저장된 RefreshToken 제거.
            await logout(
              userInfo.value.userId,
              (response) => {
                if (response.status === httpStatusCode.OK) {
                  console.log("리프레시 토큰 제거 성공");
                } else {
                  console.log("리프레시 토큰 제거 실패");
                }
                alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
                isLogin.value = false;
                userInfo.value = null;
                isValidToken.value = false;
                router.push({ name: "user-login" });
              },
              (error) => {
                console.error(error);
                isLogin.value = false;
                userInfo.value = null;
              }
            );
          }
        }
      );
    };

    const userLogout = async (userid) => {
      await logout(
        userid,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            isLogin.value = false;
            userInfo.value = {
              userId: "",
              userName: "",
            };
            isValidToken.value = false;
          } else {
            console.error("유저 정보 없음!!!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    };

    const userRegist = async (userDto) => {
      await regist(
        JSON.stringify(userDto),
        (response) => {
          if (response.status === httpStatusCode.CREATE) {
            alert("회원가입에 성공했습니다.");
          } else {
            console.log("회원가입실패", response.status);
            alert("회원가입에 실패했습니다.");
          }
        },
        async (error) => {
          console.log(error);
        }
      );
    };

    const getProfileIdx = async (userId) => {
      await profileIdx(
        userId,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            console.log("파일인덱스찾기에 성공했습니다.");
            userInfo.value.fileIdx = response.data;
            console.log("res= ", response);
          } else {
            console.log("파일인덱스찾기 실패", response.status);
            // alert("파일인덱스찾기 실패했습니다.");
          }
        },
        async (error) => {
          console.log(error);
        }
      );
    };

    // const userModify = async (userDto) => {
    //   await modify(
    //     JSON.stringify(userDto),
    //     (response) => {
    //       if (response.status === httpStatusCode.CREATE) {
    //         alert("회원정보수정에 성공했습니다.");
    //         let token = sessionStorage.getItem("accessToken");
    //         getUserInfo(token);
    //         alert("modify 완료: ", userInfo.value);
    //       } else {
    //         console.log("회원정보수정 실패", response.status);
    //         alert("회원정보수정에 실패했습니다.");
    //       }
    //     },
    //     async (error) => {
    //       console.log(error);
    //     }
    //   );
    // };

    const userWithdrawal = async (userId) => {
      await withdrawal(
        userId,
        (response) => {
          if (response.status === httpStatusCode.OK) {
            alert("회원탈퇴에 성공했습니다.");
            alert("delete 완료: ", userId);
          } else {
            console.log("회원탈퇴 실패", response.status);
            alert("회원탈퇴에 실패했습니다.");
          }
        },
        async (error) => {
          console.log(error);
        }
      );
    };

    return {
      isLogin,
      isLoginError,
      userInfo,
      isValidToken,
      userLogin,
      getUserInfo,
      tokenRegenerate,
      userLogout,
      userRegist,
      //   userModify,
      getProfileIdx,
      userWithdrawal,
      boardNo,
    };
  },
  {
    persist: {
      storage: sessionStorage, //쓰고싶은 스토리지(세션 또는 로컬)
    },
  }
);
