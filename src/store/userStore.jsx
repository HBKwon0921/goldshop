import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //사용한 변수의 이름 등록
  initialState: "VIP 고객 park", //변수 리스트 등록
});

export default user;
