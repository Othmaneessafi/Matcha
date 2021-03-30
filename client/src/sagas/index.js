import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga';
import logoutSaga from "./logoutSaga";
import infosSaga from "./infosSaga"
import resetPasswordSaga from './resetPSaga';
import usersSaga from "./usersSaga";
import picsSaga from './picsSaga';
import stepSaga from './stepSaga';
import notifSaga from "./notifSaga";
import editProfile from './profileSaga';
import chatSaga from "./chatSaga";

export default function *index() {
  yield all([
    fork(registerSaga),
    fork(infosSaga),
    fork(loginSaga),
    fork(resetPasswordSaga),
    fork(logoutSaga),
    fork(stepSaga),
    fork(usersSaga),
    fork(editProfile),
    fork(chatSaga),
    fork(picsSaga),
    fork(notifSaga),
  ]);
}