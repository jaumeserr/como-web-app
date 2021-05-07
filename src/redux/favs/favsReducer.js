const INI_STATE = {
  favItems: []
};

function favsReducer(state = INI_STATE, action) {
  if(action.type === 'ADD_TO_FAVS') {
    return {
      ...state,
      favItems: [
        ...state.favItems,
        {
          ...action.payload
        }
      ]
    }
  }
  return state;
}

export default favsReducer;