import * as types from '../constants';

export default function balanceReducer(
  state = 10, { type, payload }
) {
  switch (type) {
    case types.DEPOSIT:
      return state + payload;
    case types.WITHDRAW:
      return state - payload;
    default:
      return state;
  }
}
