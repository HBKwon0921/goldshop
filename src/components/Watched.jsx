import { useSelector } from "react-redux";
import cssStyle from "../css/Watched.module.css";
import { useNavigate } from "react-router-dom";

export default function Watched() {
  let wList = useSelector((a) => a.watched);
  let data = useSelector((a) => a.pData);

  let watchedData = data.filter((item) => wList.includes(item._id));
  let Navigate = useNavigate();

  console.log(watchedData);
  return (
    <div className={cssStyle.watched}>
      <h2>최근 본 상품</h2>
      <ul>
        {watchedData.map((list) => (
          <li
            key={list._id}
            onClick={() => {
              Navigate(`/detail/$(list._id)`);
            }}
          >
            <img src={`/img/${list.img}`} alt={`/img/${list.title}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
