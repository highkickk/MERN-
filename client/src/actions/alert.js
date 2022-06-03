import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './type';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  // After 5s, it is going to diapatch, remove alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
