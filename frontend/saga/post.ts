import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS
} from "../reducers/post";

function* addPostAPI() {}

function* addPost() {
  try {
    yield delay(2000);
    yield put({
      type: ADD_POST_SUCCESS
    });
  } catch (error) {
    yield put({
      error,
      type: ADD_POST_FAILURE
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* addCommentAPI() {}

function* addComment(action) {
  try {
    yield delay(2000);
    yield put({
      data: {
        postId: action.data.postId
      },
      type: ADD_COMMENT_SUCCESS
    });
  } catch (error) {
    yield put({
      error,
      type: ADD_COMMENT_FAILURE
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
