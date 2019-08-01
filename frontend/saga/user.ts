import {
  all,
  call,
  delay,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from "../reducers/user";

function loginAPI() {}

function signUpAPI() {}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
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

function* signUp() {
  try {
    yield call(signUpAPI);
    yield delay(2000);
    throw new Error("Error Message");
    yield put({
      type: SIGN_UP_SUCCESS
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
