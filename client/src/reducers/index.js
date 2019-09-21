import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { tripReducer, selectedTripReducer } from './tripsReducer';
import driverReducer from './driverReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  trips: tripReducer,
  slectedTrip: selectedTripReducer,
  driver: driverReducer
});
