import axios from "axios";
import { getArrFromDraw } from "../actions/arrDraw";

const getData = data => ({
  type: "GET_DATA",
  payload: data
});

const asyncDataAction = () => dispatch => {
  axios
    .get(`http://localhost:3003/api/all`)
    // axios.get(
    //   `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=200&q=${"Films"}`
    // )
    .then(res => {
      console.log(res);
      dispatch(getData(res.data.data));
      dispatch(getArrFromDraw(res.data.data));
    })

    .catch(error => console.log(error));
};

export default asyncDataAction;
