import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  errorMessage: null,
  userName: "",
  userEmail: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        errorMessage: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };

    case actionTypes.AUTH_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
