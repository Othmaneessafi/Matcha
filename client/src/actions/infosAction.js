export const INFOS_USER = "INFOS_USER"

export const INFOS_USER_SUCCESS = "INFOS_USER_SUCCESS"

export const INFOS_USER_ERROR = "INFOS_USER_ERROR"

export const INFOS_USER_ERROR_FIELD = "INFOS_USER_ERROR_FIELD";

export const InfosAction = (dataInsc) => ({
    "type": INFOS_USER,
    "data": dataInsc
  });
  
  export const infosUserSuccess = () => ({
      "type": INFOS_USER_SUCCESS,
  });
  
  export const infosError = (error) => ({
      "type": INFOS_USER_ERROR,
      error
  });
  
  export const infosErrorField = (errorField) => ({
      "type": INFOS_USER_ERROR_FIELD,
      errorField
  });