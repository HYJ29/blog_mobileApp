import { put } from "redux-saga/effects";

import { actions } from "data";

export function* login(action) {
  try {
    yield put(actions.user.loginLoading());
  } catch (e) {
    yield put(actions.user.loginFailure());
  }
}
