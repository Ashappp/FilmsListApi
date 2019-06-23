function data(state = {}, action) {
  switch (action.type) {
    case "GET_OBJECT_DRAW":
      return action.payload;
    case "GET_MOVIE_FROM_TITLE":
      const arrTitle = [...state].filter(el => el.title === action.param);
      return arrTitle;
    case "GET_MOVIE_FROM_STAR":
      const arrStar = [...state].filter(el => el.star === action.param);
      return arrStar;
    case "GET_SORT_MOVIE":
      const arrSort = [...state].sort((a, b) => a.title.localeCompare(b.title));
      return arrSort;
    default:
      return state;
  }
}

export default data;
