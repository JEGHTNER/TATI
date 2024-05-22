# 📖 EnjoyTrip_Final_Seoul_15 TATI

![TATI_logo](https://github.com/TripProjectJB/TATI/assets/107304293/6e7c5380-0b51-4484-be90-fff6a6b215c7)

<br>

## 프로젝트 소개

- TATI(Tourist Attraction Type Indicator)는 여행을 좋아하는 사람들이 자신의 관광지 취향을 공유하고, 관광지 정보를 확인 할 수 있는 프로젝트입니다.
- 검색을 통해 다른 유저들을 검색할 수 있습니다.
- 다양한 유저들을 팔로우할 수 있습니다.
- 카카오맵API와 공공데이터포털 API를 활용하여 관광지 정보를 검색/확인 할 수 있습니다.
- 게시판을 통해 글작성과 댓글달기를 할 수 있습니다.

<br>

## 팀원 구성

<div align="center">

|                                                           **이제헌**                                                           |                                                            **김종범**                                                             |
| :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/JEGHTNER" height=150 width=150> <br/> @JEGHTNER](https://github.com/JEGHTNER) | [<img src="https://avatars.githubusercontent.com/jongbum97" height=150 width=150> <br/> @jongbum97](https://github.com/jongbum97) |

</div>
<br>

## 0. 실행 가이드
```
1. TATI_Schema.sql임포트하기
2. files 폴더를 C: 드라이브 아래에 복사(TATI_Schema.sql 초기회원 프로필사진 경로)
3. STS로 TATI_Backend import 후 Run as Spring Boot App(jdk 1.8)
4. TATI_Frontend 폴더에서
  4.1 npm i
  4.2 npm run dev
5. http://localhost:80 접속
```
<br>

## 1. 개발 환경

- Front : HTML, Vue.js, CSS, javascript
- Back-end : Spring Boot, Java
- 버전 및 이슈관리 : Github, GitLab
- 협업 툴 : Notion

  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### Vue, javascript

- Vue
  - **컴포넌트화**: 모듈화를 강조하기 위해 컴포넌트를 활용하여 유지보수성과 재사용성을 높였습니다.
  - **SPA 방식**: Vue Router를 활용하여 SPA 구조를 구현했습니다.

### prettier

- **코드 일관성**: 코드 포맷팅은 prettier로 관리하여 일관된 코드를 유지했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 master, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- master, develop, {name} 브랜치로 나누어 개발을 하였습니다.
  - **main** 브랜치는 최종 수정 단계에서만 사용하는 브랜치입니다.
  - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - **{name}** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 하여 confilct가 있을 시 해결 하는 작업을 수행하는 브랜치 입니다.

<br>

<br>

## 3. 역할 분담

### 🍊이제헌

- **프론트**
  - 페이지 : 회원 관련 페이지, 유저리스트, 팔로잉 & 팔로워 리스트, 관광지 관련 페이지, 카카오맵, 공공데이터포털 api 활용
  - 공통 컴포넌트 : NavBar, Follower, Following, 친구찾기 검색
- **백엔드**
  - 유저 검색, 회원 관련 CRUD, 비밀번호 찾기, 관광지 관련 CRUD, 팔로잉, 팔로워 등록 삭제, 좋아요 기능, 관리자 회원관리 기능

<br>
    
### 👻김종범

- **프론트**
  - 페이지 : 메인화면, 게시판 관련 페이지, 추천여행지 페이지, TATI 페이지, 채팅 페이지
  - 공통 컴포넌트 : NavBar, 게시판, TATI, Chat
- **백엔드**
  - 게시판 관련 CRUD, 로그인 - 로그아웃 JWT Token활용 및 Interceptor 관리, TATI 테스트 기능 구현, 실시간 채팅 구현

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2023-11-16 ~ 2022-11-23

<br>

### 작업 관리

- GitHub branch를 사용하여 진행 상황을 공유했습니다.

<br>

## 5. 기능

### [회원관리]

[Members](https://github.com/TripProjectJB/mov/assets/107304293/7d1f39b1-0d75-4f67-942c-520e1a376d17)

### [메인페이지]

[Main](https://github.com/TripProjectJB/mov/assets/107304293/dea12dfb-b36a-4509-88c0-7e1278d277cc)

### [소셜기능]

[Social](https://github.com/TripProjectJB/mov/assets/107304293/a213b1d0-6b5f-4aee-bd8c-12b40a9a88a3)

### [TATI]

[TATI](https://github.com/TripProjectJB/mov/assets/107304293/02f92882-0707-416e-83d9-843bf3f6bc89)

### [지도]

[Maps](https://github.com/TripProjectJB/mov/assets/107304293/77fdc3b2-ef57-4bb5-9e8f-74026b11039a)

### [게시판]

[Boards](https://github.com/TripProjectJB/mov/assets/107304293/e34bed1d-0b47-44f9-aaff-f906273f7737)

### [실시간 채팅]

[Chat](https://github.com/TripProjectJB/mov/assets/107304293/91d98a76-da8c-4ff5-b36d-95ecaf20ccdf)

### [관리자]

[Admin](https://github.com/TripProjectJB/mov/assets/107304293/2d9c73f3-db4c-48f2-a94d-96a7b7d0e04a)

## 6. 프로젝트 후기

### 🍊 이제헌

1주일이라는 짧은 시간안에 목표로 한 기능을 구현하는게 힘든 작업이었지만, 실제로 구현을 해보면서 프론트엔드와 백엔드의 흐름이 잘 이해가 되었습니다.
아쉬운 점은 메소드들의 재사용을 고려하여 모듈화를 잘 하지 못해서 비슷한 기능을 하는 메소드를 계속해서 만들었던 점입니다.
비록 모든 구현과정이 최적화가 잘되거나 효율적이지 못한 부분이 있지만, 직접 구현해 보면서 최적화에 대해 많은 고민을 할 수 있는 시간이었던 것 같습니다.
효율적인 로직과 데이터베이스 설계에 시간을 많이 쓸 수 있다면 조금 더 좋은 퀄리티가 나올 수 있었을 것 같습니다.

<br>

### 👻 김종범

더 좋은 구조로 설계하기 위해 중간중간 수정했는데 몇몇 부분은 전체적인 수정이 필요해서 하지 못했습니다. 이 경험을 바탕으로 다음에는 더 효율적이고 유지보수가 편한 코드를 작성할 수 있을 것 같습니다.

<br>

## 7. 프로젝트 구조

```
TATI_FrontEnd
├─ .env
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ api
│  │  ├─ attraction.js
│  │  ├─ board.js
│  │  ├─ chat.js
│  │  └─ user.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ font-awesome.min.css
│  │  │  ├─ ie8.css
│  │  │  ├─ ie9.css
│  │  │  └─ main.css
│  │  ├─ fonts
│  │  │  ├─ fontawesome-webfont.eot
│  │  │  ├─ fontawesome-webfont.svg
│  │  │  ├─ fontawesome-webfont.ttf
│  │  │  ├─ fontawesome-webfont.woff
│  │  │  ├─ fontawesome-webfont.woff2
│  │  │  ├─ FontAwesome.otf
│  │  │  └─ IBMPlexSansKR-Medium.ttf
│  │  ├─ images
│  │  │  ├─ 111.png
│  │  │  ├─ 112.png
│  │  │  ├─ 121.png
│  │  │  ├─ 122.jpeg
│  │  │  ├─ 211.jpg
│  │  │  ├─ 212.jpeg
│  │  │  ├─ 221.jpeg
│  │  │  ├─ 222.jpeg
│  │  │  ├─ loading.gif
│  │  │  ├─ main.png
│  │  │  ├─ profile.png
│  │  │  └─ TATI_logo.jpg
│  │  ├─ js
│  │  │  ├─ ie
│  │  │  │  ├─ html5shiv.js
│  │  │  │  └─ respond.min.js
│  │  │  ├─ jquery.min.js
│  │  │  ├─ main.js
│  │  │  ├─ skel.min.js
│  │  │  └─ util.js
│  │  └─ sass
│  │     ├─ base
│  │     │  ├─ _page.scss
│  │     │  └─ _typography.scss
│  │     ├─ components
│  │     │  ├─ _box.scss
│  │     │  ├─ _button.scss
│  │     │  ├─ _features.scss
│  │     │  ├─ _form.scss
│  │     │  ├─ _icon.scss
│  │     │  ├─ _image.scss
│  │     │  ├─ _list.scss
│  │     │  ├─ _mini-posts.scss
│  │     │  ├─ _posts.scss
│  │     │  ├─ _section.scss
│  │     │  └─ _table.scss
│  │     ├─ ie8.scss
│  │     ├─ ie9.scss
│  │     ├─ layout
│  │     │  ├─ _banner.scss
│  │     │  ├─ _footer.scss
│  │     │  ├─ _header.scss
│  │     │  ├─ _main.scss
│  │     │  ├─ _menu.scss
│  │     │  ├─ _sidebar.scss
│  │     │  └─ _wrapper.scss
│  │     ├─ libs
│  │     │  ├─ _functions.scss
│  │     │  ├─ _mixins.scss
│  │     │  ├─ _skel.scss
│  │     │  └─ _vars.scss
│  │     └─ main.scss
│  ├─ components
│  │  ├─ boards
│  │  │  ├─ BoardDetail.vue
│  │  │  ├─ BoardList.vue
│  │  │  ├─ BoardModify.vue
│  │  │  └─ BoardWrite.vue
│  │  ├─ common
│  │  │  ├─ VBanner.vue
│  │  │  ├─ VPageNavigation.vue
│  │  │  ├─ VSectionCard.vue
│  │  │  └─ VSectionList.vue
│  │  ├─ elements
│  │  │  ├─ ElementAction.vue
│  │  │  ├─ ElementBlockQuote.vue
│  │  │  ├─ ElementBox.vue
│  │  │  ├─ ElementButton.vue
│  │  │  ├─ ElementContent.vue
│  │  │  ├─ ElementForm.vue
│  │  │  ├─ ElementImage.vue
│  │  │  ├─ ElementList.vue
│  │  │  ├─ ElementPagination.vue
│  │  │  ├─ ElementPreformatted.vue
│  │  │  ├─ ElementTable.vue
│  │  │  ├─ ElementTableAlter.vue
│  │  │  ├─ ElementText.vue
│  │  │  └─ ElemnetDefinition.vue
│  │  ├─ layout
│  │  │  ├─ TheAsideNav.vue
│  │  │  └─ TheHeading.vue
│  │  ├─ maps
│  │  │  ├─ MapDetail.vue
│  │  │  ├─ MapMain.vue
│  │  │  └─ MapRank.vue
│  │  ├─ slot
│  │  │  └─ SlotComp.vue
│  │  ├─ tests
│  │  │  ├─ TestMain.vue
│  │  │  ├─ TestResult.vue
│  │  │  └─ TestTest.vue
│  │  └─ users
│  │     ├─ UserAttractionLikeList.vue
│  │     ├─ UserFollower.vue
│  │     ├─ UserFollowing.vue
│  │     ├─ UserFriendSearch.vue
│  │     ├─ UserInfo.vue
│  │     ├─ UserLogin.vue
│  │     ├─ UserMyPage.vue
│  │     ├─ UserPasswordFind.vue
│  │     └─ UserRegist.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ stores
│  │  ├─ attractions.js
│  │  ├─ chats.js
│  │  ├─ member.js
│  │  └─ tripTest.js
│  ├─ util
│  │  ├─ http-commons.js
│  │  └─ http-status.js
│  └─ views
│     ├─ BoardView.vue
│     ├─ ChatView.vue
│     ├─ MainView.vue
│     ├─ MapView.vue
│     ├─ TestView.vue
│     └─ UserView.vue
├─ vite.config.js
└─ vitest.config.js

```
