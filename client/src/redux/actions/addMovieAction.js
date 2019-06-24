import {
    getArrFromDraw
} from "./filteredDataActions";

export const addMovie = data => (dispatch, getState) => {
    dispatch({
        type: "ADD_MOVIE",
        payload: data,
    });
    const state = getState();
    dispatch(getArrFromDraw(state.data));
}

export default addMovie;