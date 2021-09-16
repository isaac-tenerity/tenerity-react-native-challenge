import { takeEvery, call, put } from 'redux-saga/effects';
import { getTagsRequest } from '../../../infrastructure/api/tags.api';
import {
  GET_TAGS_REQUEST,
  GET_TAGS_REQUEST_START,
  GET_TAGS_REQUEST_FAILED,
  GET_TAGS_REQUEST_SUCCESS,
} from '../tag/tag.actions';

function* handler() {
  yield takeEvery(GET_TAGS_REQUEST, getTags);
}

function* getTags() {
  try {
    yield put({
      type: GET_TAGS_REQUEST_START,
    });
    let getTagsResponse = yield call(getTagsRequest);

    yield put({
      type: GET_TAGS_REQUEST_SUCCESS,
      payload: {
        tags: getTagsResponse?.data,
      },
    });
  } catch (error) {
    yield put({
      type: GET_TAGS_REQUEST_FAILED,
      payload: {
        error: `Could not load offer's tags because of (${error.message})`,
      },
    });
  }
}

export { handler };
