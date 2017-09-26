const initialState = {
  count: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/add":
      return {
        ...state,
        count: (state.count += 1)
      };
    case "count/minus":
      return {
        ...state,
        count: state.count === 0 ? state.count : (state.count -= 1)
      };
    default:
      return initialState;
  }
};

export default reducer;
