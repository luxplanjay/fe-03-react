import * as types from '../constants';

const intialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

export default function authReducer(state = intialState, { type, payload }) {
  switch (type) {
    case types.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
        isAuthenticated: false,
      };
    case types.AUTH_SUCCESS:
      return {
        token: payload.token,
        userId: payload.userId,
        error: null,
        loading: false,
        isAuthenticated: true,
      };
    case types.AUTH_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        isAuthenticated: false,
      };
    case types.AUTH_LOGOUT:
      return {
        token: null,
        userId: null,
        error: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
