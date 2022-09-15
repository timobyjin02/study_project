import {useParams} from "react-router-dom";

function View() {
  const params = useParams();

  return(
    <div>view {params.id}</div>
  )
}

export default View;