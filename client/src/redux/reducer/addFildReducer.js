const initialState = {
  title: "",
  year: "",
  format: "",
  stars: ""
};

function data(state = initialState, action) {
  switch (action.type) {
    case "ADD_FILD":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
}

export default data;
