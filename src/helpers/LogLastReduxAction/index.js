export const lastAction = (state = null, action) => action;

// add it to combineReducers({})
// inside store.subscribe() log store.getState().lastAction
