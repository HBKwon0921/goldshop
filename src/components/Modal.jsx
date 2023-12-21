import { useNavigate } from "react-router-dom";
import cssstyle from "../css/Modal.module.css";

export default function Modal({ setModal }) {
  let navigate = useNavigate();
  return (
    <div className={cssstyle.modal}>
      <div className={cssstyle.inner}>
        <p>상품이 등록되었습니다.</p>
        <button onClick={() => setModal(false)}>계속 쇼핑하기</button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          장바구니 확인하기
        </button>
      </div>
    </div>
  );
}
