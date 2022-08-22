import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Main from "./pages/board/Main";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

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
      if (isCurrentRootPath) {
        // 로그인 페이지일 때
        navigate("/main"); // main 페이지로 이동
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/main" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
