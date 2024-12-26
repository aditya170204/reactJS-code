const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
      };
  }

  return state;
};
export default reducer;
