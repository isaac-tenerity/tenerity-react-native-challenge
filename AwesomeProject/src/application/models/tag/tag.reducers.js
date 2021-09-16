import {
  GET_TAGS_REQUEST_FAILED,
  GET_TAGS_REQUEST_START,
  GET_TAGS_REQUEST_SUCCESS,
} from './tag.actions';

const initialState = {
  tags: [],
  isTagsLoading: false,
  tagsError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST_START:
      return Object.assign({}, state, {
        isTagsLoading: true,
        tagsError: null,
      });
    case GET_TAGS_REQUEST_SUCCESS:
      let { tags } = action.payload;
      return Object.assign({}, state, {
        tags,
        isTagsLoading: false,
      });
    case GET_TAGS_REQUEST_FAILED:
      let { error } = action.payload;
      return Object.assign({}, state, {
        isTagsLoading: false,
        tagsError: error,
      });
    default:
      return state;
  }
};

export { reducer };
