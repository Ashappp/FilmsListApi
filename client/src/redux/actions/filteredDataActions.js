export const getArrFromDraw = data => ({
  type: "ADD_DATA_IN_STORE",
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

export const arrFilterSortAZ = data => ({
  type: "GET_SORT_MOVIE_AZ",
  payload: data
});

export const arrFilterSortZA = data => ({
  type: "GET_SORT_MOVIE_ZA",
  payload: data
});

export const deleteFilteredData = id => ({
  type: "DELETE_FILTERED_DATA",
  id
})

export default {
  getArrFromDraw,
  arrFilterTitle,
  arrFilterStar,
  arrFilterSortAZ,
  arrFilterSortZA,
  deleteFilteredData
};