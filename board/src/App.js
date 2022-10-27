import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Main from "./pages/board/Main";
import Post from "./pages/board/Post";
import View from "./pages/board/Viex";
import { useEffect } from "react";
import axios, { setHeader, removeHeader } from "./api/config";
import { useRecoilState } from "recoil";
import { usePropertyState } from "./store/user";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(usePropertyState);

  async function getProperty(isCurrentRootPath) {
    try {
      const response = await axios.get("/user/property");
      setUser(response.data.data.user);
      if (isCurrentRootPath) {
        // 로그인 페이지일 때
        navigate("/main"); // main 페이지로 이동
      }
    } catch (err) {
      console.log(err);
      alert("로그인 정보가 만료되었습니다"); // 토큰이 만료되면 alert창 띄워주고
      navigate("/"); // 로그인 페이지로 넘어감
      localStorage.removeItem("token"); // token를 localstorage에서 지워줌
      removeHeader(); // axios header에서 지워줌
    }
  }

  useEffect(function () {
    // localstorage에 저장되어 있는 토큰 값이 있는지 없는지 검사
    const token = localStorage.getItem("token");
    console.log(location);
    const isCurrentRootPath = location.pathname === "/"; // isCurrentRootPath 로그인 페이지

    if (!token) {
      // token이 없을 경우
      if (!isCurrentRootPath) {
        // 로그인 페이지가 아닐 때
        navigate("/"); // 로그인 페이지로 이동
      }
    } else {
      // token이 있을 경우 (로그인 기록이 있을 때) -> useProperty 가져와야함 -> 저장 방법 (recoil)
      // 토큰이 만료되었을 때 오류 처리
      setHeader(token); //2. token이 있을 경우 setHeader을 실행 (axios를 사용할때마다 자동으로 헤더에 a~~이 적용될 수 있도록 한다)
      getProperty(isCurrentRootPath); // getProperty 실행
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/post">
        <Route index element={<Post />} />
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="/view/:id" element={<View />}></Route>
    </Routes>
  );
}

export default App;
