import {takeLatest, put,delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import {resetState} from '../actions/resetStateAction';
import {inscriptionError, inscriptionUserSuccess, EmailConfirmationSuccess, EmailConfirmationError} from "../actions/registerAction";
import axios from 'axios'
import  {setAlertAction } from '../actions/alertAction';

const inscription =
  function *inscription ({data}) {
    try {
      const response = yield axios.post('http://localhost:3001/register', data)
      if(response.data.isValid){
        yield put(inscriptionUserSuccess(data));
        yield put(push("/signin"));
      }
      else{
        if(response.data.errUsername && !response.data.errEmail){
          yield put(inscriptionError(response.data.errUsername));
        }
        else if(response.data.errEmail && !response.data.errUsername){
          yield put(inscriptionError(response.data.errEmail));
        }
        else
          yield put(inscriptionError('Username or email already exist'));
          yield put(setAlertAction({
            text: 'Username or email already exist',
            color: 'error'
          }));
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(inscriptionError("error.response.statusText", "error.response.status"));
        yield put(setAlertAction({
          text: error.response.statusText,
          color: 'error'
        }));
      }
    }
  };

const emailConfirm =
function *emailConfirm ({token}) {
  try {
    const response = yield axios.post('http://localhost:3001/confirmEmail', {token});
    if(response.data === 'success')
    {
      yield put(EmailConfirmationSuccess());
    }
    else if(response.data === 'error')
    {
      yield put(EmailConfirmationError());
    }
  }catch (error) {
      if (error.response) {
        yield put(EmailConfirmationError());
      }
    }
};

export default function *reg() {
  yield takeLatest("INSCRIPTION_USER", inscription);
  yield takeLatest("EMAIL_CONFIRMATION", emailConfirm);
}