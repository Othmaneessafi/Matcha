import { takeLatest, put, call, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginError, loginUserSuccess, loginErrorField } from "../actions/loginAction";
import {updateUserSuccess} from '../actions/userAction'
import { request } from './helper';
import {resetState} from '../actions/resetStateAction';
import socket from '../socketConn';
import  {setAlertAction } from '../actions/alertAction';

const login =
  function *login({ data }) {
    try {
      const username = data.username;
      const password = data.password;
      const response = yield call(request, {
        "url": "http://localhost:3001/login",
        "data": {
          username,
          password
        },
        "method": "post"
      });

      if (response.data.isValid) {
        const user = response.data.user;
        yield put(loginUserSuccess());
        yield put(updateUserSuccess(user));
        socket.emit('join', { id: user.id });
        if (user.step === 3) {
          // yield put(GetNotif())
          yield put(push("/browsing"));
        }
        else
          yield put(push("/infos"));
      }
      else {
        yield put(loginErrorField(response.data.errorField))
        yield put(setAlertAction({
          text: response.data.errorField,
          color: 'error'
        }));
        yield delay(4000);
        yield put(resetState());

      }
    } catch (error) {
      if (error.response) {
        yield put(loginError("error.response.statusText", "error.response.status"));
        yield put(setAlertAction({
          text: error.response.statusText,
          color: 'error'
        }));
      }
    }
  };

export default function *log() {
  yield takeLatest("LOGIN_USER", login);
}