import axios from 'axios';
import * as types from '../constants';
import LOCALSTORAGE from '../helpers/localStorage';

let TIMEOUT_ID = null;

const authStart = () => ({
  type: types.AUTH_START,
});

const authSuccess = (token, userId) => ({
  type: types.AUTH_SUCCESS,
  payload: {
    token,
    userId,
  },
});

const authFail = error => ({
  type: types.AUTH_FAIL,
  payload: error,
});

export const authLogout = () => {
  LOCALSTORAGE.clear('notes-app');

  return {
    type: types.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = delay => dispatch => {
  TIMEOUT_ID = setTimeout(() => {
    dispatch(authLogout());
  }, delay * 1000);
};

export const authCheckState = () => dispatch => {
  const authState = LOCALSTORAGE.get('notes-app');

  if (authState) {
    const expDate = new Date(authState.expDate);

    if (expDate > new Date()) {
      const delay = (expDate.getTime() - new Date().getTime()) / 1000;

      dispatch(authSuccess(authState.token, authState.userId));
      dispatch(checkAuthTimeout(delay));
    } else {
      dispatch(authLogout());
    }
  }
};

export const auth = (email, password, type) => dispatch => {
  dispatch(authStart());

  const resource = type === 'signup' ? 'signupNewUser' : 'verifyPassword';
  const apiURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${resource}?key=AIzaSyDUygcseLk8ehucuCFWjxHR9ozvqMKKUTY`;
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  axios
    .post(apiURL, authData)
    .then(response => {
      const { data: { idToken, localId, expiresIn } } = response;

      TIMEOUT_ID !== null && clearTimeout(TIMEOUT_ID);

      const expDate = new Date(new Date().getTime() + expiresIn * 1000);

      LOCALSTORAGE.set('notes-app', {
        token: idToken,
        expDate: expDate,
        userId: localId,
      });

      dispatch(authSuccess(idToken, localId));
      dispatch(checkAuthTimeout(expiresIn));
    })
    .catch(err => {
      dispatch(authFail(err.response.data.error));
      console.error(err);
    });
};
