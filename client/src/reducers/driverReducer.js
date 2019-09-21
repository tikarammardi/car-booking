import { FETCH_DRIVER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_DRIVER:
      return action.payload;
    default:
      return state;
  }
}
