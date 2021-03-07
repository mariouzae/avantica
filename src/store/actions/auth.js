import * as actionTypes from "./actionTypes";
import api from "../../services/api";

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSignIn = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.AUTH_START,
    });
    const login = await api.auth.post.signIn(email, password);

    if (login) {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload: {
        errorMessage: "Failure to authenticate, please try again.",
      },
    });
  }
};

export const authSignOut = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.AUTH_RESET,
  });
};
export const authFail = (message) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.AUTH_FAIL,
    payload: {
      errorMessage: message,
    },
  });
};
