import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_REQUEST
} from "../reducers/user";

function loginAPI() {}

function signUpAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSIgnup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
