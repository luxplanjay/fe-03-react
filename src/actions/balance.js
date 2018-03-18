import * as types from '../constants';

export const deposit = amount => ({
  type: types.DEPOSIT,
  payload: amount,
});

// export const asyncDeposit = amount => dispatch => {
//   setTimeout(
//     () =>
//       dispatch({
//         type: types.DEPOSIT,
//         payload: amount,
//       }),
//     500,
//   );
// };


export const withdraw = amount => ({
  type: types.WITHDRAW,
  payload: amount,
});
