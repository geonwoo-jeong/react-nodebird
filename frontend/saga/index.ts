import { all, call } from "redux-saga/effects";

import post from "./post";
import user from "./user";

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
