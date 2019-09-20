import axios from 'axios';
import { FETCH_USER, BOOKING } from './types';
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const bookCar = formValues => async dispatch => {
  const res = await axios.post('/api/booking', formValues);
  dispatch({ type: BOOKING, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
