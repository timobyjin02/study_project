import axios from "axios";

const middleware = axios.create({
  baseURL: "http://lab.fin-dev.kr",
});

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
