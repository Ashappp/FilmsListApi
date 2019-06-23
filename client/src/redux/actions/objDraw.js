export const getObjFromDraw = data => ({
  type: "GET_OBJECT_DRAW",
  payload: data
});
export const objFilterTitle = (data, param) => ({
  type: "GET_MOVIE_FROM_TITLE",
  payload: data,
  param
});
export const objFilterStar = (data, param) => ({
  type: "GET_MOVIE_FROM_STAR",
  payload: data,
  param
});
export const objFilterSort = data => ({
  type: "GET_SORT_MOVIE",
  payload: data
});

export default {
  getObjFromDraw,
  objFilterTitle,
  objFilterStar,
  objFilterSort
};
