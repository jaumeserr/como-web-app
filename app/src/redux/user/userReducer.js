const INI_STATE = null;

function userReducer(state = INI_STATE, action) {
  if (action.type === 'SET_USER') {
    return action.payload;
  }
  return state;
}

export default userReducer;