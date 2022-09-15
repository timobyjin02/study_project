import axios from "../../api/config";
import { useState } from "react";
import style from "../../styles/post/style.module.css"
import { useNavigate } from "react-router-dom";

function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const postHandler = async() => {
    if(!title){
      alert('제목이 없습니다'); 
      return
    }
    if(!content) {
      alert('내용이 없습니다');
      return
    }
    try {
      const response = await axios.post('/board', {
        title: title, // 변경 된 title값을 넣어줌
        content: content
      })
      console.log(response.data.data.lastId);
      // setTitle() // input의 값이 변할 때마다 + 값을 변화시키기 위해서 사용되는 useState()이다
      // setContent()
      navigate(`/view/${response.data.data.lastId}`);
    } catch(err) {
      console.log(err);
    }
  }
  // 블렌더 프로그램..

  return(
    <div>
      <button onClick={postHandler}>ㅇㅇㅇ</button>
      <div>
      <input className={style.postInput} value={title} onChange={(e) => {setTitle(e.target.value)}} ></input>
      <textarea className={style.textareaInput} value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
      </div> 
    </div>
  )
}

export default Post;