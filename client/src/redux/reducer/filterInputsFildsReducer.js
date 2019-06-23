const initialState = {
  title: "",
  stars: ""
};

function filterFilds(state = initialState, action) {
  switch (action.type) {
    case "ADD_FILTER_FILD":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}

export default filterFilds;
