import axios from 'axios';

const createMovie = (updateObject) =>
    axios.put(`http://localhost:3003/api/create`, updateObject);

export default {
    createMovie,
};