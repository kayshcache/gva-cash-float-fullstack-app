import { CREATE_THING, DELETE_THING } from './actions';

export const things = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_THING: {
      const { thingName } = payload;
      const newThing = {
	thingName,
	isTrue: false,
      };
      // concat method doesn't mutate the array - returns a new array.
      return state.concat(newThing);
    }
    case DELETE_THING: {
      const { thingName } = payload;
      return state.filter(thing => thing.thingName !== thingName);
    }
    default:
      return state;
  }
};
