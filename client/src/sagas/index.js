import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga';
import logoutSaga from "./logoutSaga";
import infosSaga from "./infosSaga"
import resetPasswordSaga from './resetPSaga';
import usersSaga from "./usersSaga";

export default function *index() {
  yield all([
    fork(registerSaga),
    fork(infosSaga),
    fork(loginSaga),
    fork(resetPasswordSaga),
    fork(logoutSaga),
    fork(usersSaga),
  ]);
}