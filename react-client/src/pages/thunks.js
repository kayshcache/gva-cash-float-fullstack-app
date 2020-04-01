// import axios from 'axios';
import {
  loadThingsInProgress,
  loadThingsSuccess,
  loadThingsFailure,
  createThing,
} from './actions';

export const displayAlert = err => () => {
  alert(err);
};

export const loadThings = () => async (dispatch, getState) => {
  try {
    dispatch(loadThingsInProgress());
    const response = await fetch('/things');
    const things = await response.json();

    dispatch(loadThingsSuccess(things));
  } catch (err) {
    dispatch(loadThingsFailure());
    dispatch(displayAlert(err));
  }
};

export const createThingRequest = thingName => async dispatch => {
  try {
    const body = JSON.stringify({ thingName });
    const response = await fetch('/things', {
      headers: {
	'Content-Type': 'application/json'
      },
      method: 'post',
      body,
    });
    const thing = await response.json();
    dispatch(createThing(thing));
  } catch (err) {
    dispatch(displayAlert(err));
  }
}
