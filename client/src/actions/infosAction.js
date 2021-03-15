export const INFOS_USER = "INFOS_USER";
export const INFOS_USER_SUCCESS = "INFOS_USER_SUCCESS";
export const INFOS_USER_ERROR = "INFOS_USER_ERROR";
export const INFOS_USER_ERROR_FIELD = "INFOS_USER_ERROR_FIELD";
export const GET_TAGS = "GET_TAGS";
export const GET_TAGS_SUCCESS = "GET_TAGS_SUCCESS";
export const CREATE_TAG = "CREATE_TAG";
export const CREATE_TAG_SUCCESS = "CREATE_TAG_SUCCESS";
export const CREATE_TAG_ERROR = "createTagError";

export const InfosAction = (dataInsc) => ([console.log(dataInsc),{
  type: INFOS_USER,
  data: dataInsc,
}]);

export const infosUserSuccess = () => ({
  type: INFOS_USER_SUCCESS,
});

export const infosError = (error) => ({
  type: INFOS_USER_ERROR,
  error,
});

export const infosErrorField = (errorField) => ({
  type: INFOS_USER_ERROR_FIELD,
  errorField,
});

export const getTags = () => ({
  type: GET_TAGS
});

export const getTagsSuccess = (tags) => ({
  type: GET_TAGS_SUCCESS,
  tags
});

export const createTag = (tags) => ({
  type: CREATE_TAG,
  data: { value: tags, label: tags }
});

export const createTagSuccess = (tags) => ({
  type: CREATE_TAG_SUCCESS,
  tags
});

export const createTagError = (error) => ({
  type: CREATE_TAG_ERROR,
  error
});