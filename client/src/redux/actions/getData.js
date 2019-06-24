import axios from "axios";
import {
  getArrFromDraw
} from "../actions/filteredDataActions";
import {
  deleteFilteredData
} from './filteredDataActions';

const getData = data => ({
  type: "GET_DATA",
  payload: data
});

const deleteData = id => ({
  type: "DELETE_DATA",
  id
});

const asyncDataAction = () => dispatch => {
  axios
    .get(`http://localhost:3003/api/all`)
    .then(res => {
      dispatch(getData(res.data.data));
      dispatch(getArrFromDraw(res.data.data));
    })
    .catch(error => console.log(error));
};

const asyncDeleteDataAction = (id) => dispatch => {
  axios
    .delete(`http://localhost:3003/api/delete/${id}`)
    .then(res => {
      if (res.data._id === id) {
        dispatch(deleteData(id));
        dispatch(deleteFilteredData(id));
      }
    })
    .catch(err => console.log(err))
}

export default {
  asyncDataAction,
  asyncDeleteDataAction
};