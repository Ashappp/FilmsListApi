import axios from "axios";

const getData = data => ({
  type: "GET_DATA",
  payload: data
});

const asyncDataAction = input => dispatch => {
  Promise.all([
    axios.get(`http://localhost:3003/api/all`)
    // axios.get(
    //   `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=200&q=${input ||
    //     "Kiev"}`
    // )
  ])
    .then(data => dispatch(getData(data)))
    .catch(error => console.log(error));
};

export default asyncDataAction;
