function data(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;

    case "DELETE_DATA":
      const newArr = [...state].filter(el => el._id !== action.id);
      return newArr;

    case "ADD_MOVIE":
      return [...state, action.payload]

    default:
      return state;
  }
}

export default data;