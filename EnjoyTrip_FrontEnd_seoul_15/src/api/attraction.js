import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function getAttraction(success, fail) {
  await local.get(`/atrraction`).then(success).catch(fail);
}

async function getDetail(param, success, fail) {
  await local.get(`/atrraction/detail/${param}`).then(success).catch(fail);
}

export { getAttraction, getDetail };