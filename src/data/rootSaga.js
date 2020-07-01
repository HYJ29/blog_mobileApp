import { all, fork } from "redux-saga/effects";

import userSagas from "./user/sagaRegister";

export default function* rootSaga() {
  yield all([fork(userSagas)]);
}
