import { atom } from "recoil";

export const usePropertyState = atom({
  // userProperty를 중앙 관리함
  key: "usePropertyState",
  default: null,
});
