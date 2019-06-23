function data(state = [], action) {
  switch (action.type) {
    case "GET_OBJECT_DRAW":
      return action.payload;

    case "GET_MOVIE_FROM_TITLE":
      const arrTitle = [...action.payload].filter(el =>
        el.title.toLowerCase().includes(action.param.toLowerCase())
      );
      return arrTitle;

    case "GET_MOVIE_FROM_STAR":
      const arrStar = [...action.payload].filter(el =>
        el.stars.find(item => item === action.param)
      );
      return arrStar;

    case "GET_SORT_MOVIE":
      const arrSort = [...action.payload].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return arrSort;

    default:
      return state;
  }
}

export default data;
