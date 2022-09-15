import React, { useEffect, useState } from 'react';
import axios from '../../api/config';
import { usePropertyState } from '../../store/user';
import { useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom" 

function Main() {
  const [boards, setBoards] = useState([]);
  const [userProperty, setUserProperty] = useRecoilState(usePropertyState);
  const nav = useNavigate();

  const clickHandler = () => {
    nav('/post');
  }

  useEffect(() => {
    async function getData(){ // board를 가져오는 함수
      try {
        const response = await axios.get('/board', { params: { page:1, size:30 }}) // object에서 params 값을 추가해서 요청, page1
        console.log(response.data.data.items)
        setBoards(response.data.data.items);
      } catch (err) {
          console.log(err);
      }
    }
    
    if(userProperty) { // userProperty가 있을 경우
      getData(); // getData 실행
    }
  }, [userProperty]) 

  return (
    <div>
      <button onClick={clickHandler}>글쓰기</button>
      <ul>
        {boards.map((board, index) => { // data를 ul로 표현하는 방법
          return(<li key={index}>{board.content}</li>)
         })}
      </ul>
    </div>
  )
}

export default Main;