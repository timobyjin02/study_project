import React from "react";
import styled from "@emotion/styled";
import axios, { setHeader } from "../../api/config";
import Input from "../../components/user/Input";
import Button from "../../components/user/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onSubmit = e => {
    e.preventDefault();

    console.log(e);
    if (!e.target.email.value) {
      alert("이메일을 입력하세요");
      e.target.email.focus();
      return;
    }
    if (!e.target.password.value) {
      alert("비밀번호를 입력하세요");
      e.target.password.focus();
      return;
    }
    console.log(e.target.email.value);
    signUp({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  const signUp = async ({ email, password }) => {
    try {
      const response = await axios.post("/user/signin", {
        email,
        password,
      });
      alert("로그인이 완료되었습니다");
      console.log(response);
      const token = response.data.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      setHeader(token);
      navigate("/main");
    } catch (err) {
      console.log(err);
      alert("로그인에 실패했습니다");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Welcome</Title>
        <form onSubmit={onSubmit}>
          <Input name="email" placeholder="이메일" />
          <Input name="password" type="password" placeholder="비밀번호" />
          <Button type="submit">Sign In</Button>
        </form>
      </Container>
      <Link to="/signup">
        <Footer>계정이 없으신가요?</Footer>
      </Link>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f6ff;
`;
const Container = styled.div`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const Footer = styled.div`
  margin-top: 20px;
`;
