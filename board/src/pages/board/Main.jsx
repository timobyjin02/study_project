import React, { useEffect, useState } from 'react';
import axios from '../../api/config';
import { usePropertyState } from '../../store/user';
import { useRecoilState } from 'recoil';

function Main() {
  const [board, setBoard] = useState([]);
  const [userProperty, setUserProperty] = useRecoilState(usePropertyState)

  useEffect(() => {
    async function getData(){ // board를 가져오는 함수
      try {
        const response = await axios.get('/board', { params: { page:1, size:30 }}) // object에서 params 값을 추가해서 요청, page1
        console.log(response)
      } catch (err) {
          console.log(err);
      }
    }
    if(userProperty) { // userProperty가 있을 경우
      getData(); // getData 실행
    }
  }, [userProperty]) 

  return (
    <div>Main</div>
  )
}

export default Main;