export const CREATE_THING = 'CREATE_THING';
export const createThing = thingName => ({
  type: CREATE_THING,
  payload: { thingName },
});

export const DELETE_THING = 'DELETE_THING';
export const deleteThing = thingName => ({
  type: DELETE_THING,
  payload: { thingName },
});
