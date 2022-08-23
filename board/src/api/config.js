import axios from "axios";

const middleware = axios.create({
  baseURL: "http://lab.fin-dev.kr",
});

export const setHeader = token => {
  // 1. 헤더에 token을 넣어줌
  middleware.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeHeader = () => {
  // 3. axios header에서 Authorization를 제거함
  delete middleware.defaults.headers.common["Authorization"];
};

middleware.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return error;
  }
);

middleware.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response.data) {
      throw new Error("알 수 없는 오류");
    }

    throw error.response.data;
  }
);

export default middleware;
