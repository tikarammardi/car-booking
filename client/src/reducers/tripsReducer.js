import { TRIP_SELECTED } from '../actions/types';

export const tripReducer = () => {
  return [
    { title: 'Round Trip' },
    { title: 'Multi Trip' },
    { title: 'Package' }
  ];
};

export const selectedTripReducer = (selectedTrip = null, action) => {
  switch (action.type) {
    case TRIP_SELECTED:
      return action.payload;
    default:
      return selectedTrip;
  }
};
