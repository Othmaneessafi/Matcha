import {
  INFOS_USER,
  INFOS_USER_SUCCESS,
  INFOS_USER_ERROR,
  INFOS_USER_ERROR_FIELD,
  GET_TAGS,
  GET_TAGS_SUCCESS,
  CREATE_TAG,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_ERROR
} from "../actions/infosAction";

import { CLEAR_USER_INFORMATION } from "../actions/logoutAction";

import { RESET_STATE } from "../actions/resetStateAction";

const DEFAULT_STATE = {
  status: "empty",
  error: null,
};

export default function log(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case INFOS_USER:
      return {
        status: "loading",
        error: null,
      };
    case INFOS_USER_SUCCESS:
      return {
        status: "updated",
        error: null,
      };
    case INFOS_USER_ERROR:
      return {
        status: "error",
        error: action.error,
      };
    case INFOS_USER_ERROR_FIELD:
      return {
        status: "errorField",
        error: action.errorField,
      };
    case CLEAR_USER_INFORMATION:
      return DEFAULT_STATE;
    case RESET_STATE:
      return "initial state";
    case GET_TAGS:
      return { selectTags: [], selectLoading: true };
    case GET_TAGS_SUCCESS:
      return { selectTags: action.tags, selectLoading: false };
    case CREATE_TAG:
      return { selectTags: [...state.selectTags], selectLoading: true };
    case CREATE_TAG_SUCCESS:
      return {
        selectTags: [...state.selectTags, action.tags],
        selectLoading: false,
      };
    case CREATE_TAG_ERROR:
      return {
        selectTags: [...state.selectTags],
        selectLoading: false,
        error: [action.error],
      };
    default:
      return state;
  }
}
