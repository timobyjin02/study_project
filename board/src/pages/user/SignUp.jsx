import styled from '@emotion/styled';
// import axios from 'axios';
import axios from '../../api/config';
import React, { useState } from 'react';
import Input from '../../components/user/Input';
import Button from '../../components/user/Button';
import { Link } from "react-router-dom";

function SignUp() {
  const [toggle, setToggle] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사
    if (!e.target.email.value) {
      alert("이메일을 입력하세요");
      e.target.email.focus()
      return
    }
    if (!e.target.password.value) {
      alert("비밀번호를 입력하세요");
      e.target.password.focus()
      return
    }
    if (!e.target.name.value) {
      alert("이름을 입력하세요");
      e.target.name.focus()
      return
    }
    if (!e.target.gender.value) {
      alert("성별을 입력하세요");
      e.target.gender.focus()
      return
    }
    // console.log(e.target.email.value)
    signUp({
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      gender: e.target.gender.value
    })
  }

  const signUp = async({email, password, name, gender}) => {
    try{
      await axios.post('/user/signup', {
        email,
        password,
        name,
        gender
      })
      alert('회원가입이 완료되었습니다');
      setToggle(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Title>Welcome</Title>
        <form onSubmit={onSubmit}>
          <Input name="email" placeholder="이메일" />
          <Input name="password" type="password" placeholder="비밀번호" />
          <Input name="name"placeholder="이름" />
          <Input name="gender" placeholder="성별" />
          <Button type="submit" disabled={toggle}>Sign Up</Button>
        </form>
      </Container>
      <Link to='/'>
      <Footer>로그인으로</Footer>
      </Link>
    </Wrapper>
  )
}

export default SignUp;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F2F6FF;
`
const Container = styled.div`
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
const Title = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`
const Footer = styled.div`
  margin-top: 20px;
`