import axios from "../../api/config";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { usePropertyState } from "../../store/user";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function View() {
  const params = useParams();
  const user = useRecoilValue(usePropertyState);
  const [view, setView] = useState(null);
  const nav = useNavigate();

  const getView = async () => {
    try {
      const res = await axios(`/board/${params.id}`);
      const { created_at, ...rest } = res.data.data;
      setView({ ...rest, created_at: dayjs(created_at).format("YYYY-MM-DD") });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`/board/${params.id}`);
      alert("삭제가 완료되었습니다");
      nav("/main");
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = () => {
    nav(`/post/${params.id}`);
  };

  useEffect(() => {
    if (user) {
      getView();
    }
  }, [user]);

  if (!view) {
    return null;
  }

  return (
    <div>
      {view.title}
      <div>{view.content}</div>
      <div>{view.created_at}</div>
      <div>{view.lookup}</div>
      <button onClick={deleteHandler}>삭제</button>
      <button onClick={editHandler}>편집</button>
    </div>
  );
}

export default View;
