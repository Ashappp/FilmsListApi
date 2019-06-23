export const getArrFromDraw = data => ({
  type: "GET_OBJECT_DRAW",
  payload: data
});

export const arrFilterTitle = (data, param) => ({
  type: "GET_MOVIE_FROM_TITLE",
  payload: data,
  param
});

export const arrFilterStar = (data, param) => ({
  type: "GET_MOVIE_FROM_STAR",
  payload: data,
  param
});

export const arrFilterSort = data => ({
  type: "GET_SORT_MOVIE",
  payload: data
});

export default {
  getArrFromDraw,
  arrFilterTitle,
  arrFilterStar,
  arrFilterSort
};
