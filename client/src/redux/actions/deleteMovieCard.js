import axios from "axios";

const deleteMovieCardFromStore = e => ({
    type: "DELETE_MOVIE",
    id: e.targer.dataset.id
  });
  
const deleteMovieCardActionAsync = idCard => dispatch =>({
    axios.delete
    (`http://localhost:3003/api/delete/${idCard}`)
    .then(data => {
        if (data.data.success) {
          dispatch(deleteMovieCardFromStore(idCard));
        }
      })
      .catch(error => console.log(error));
})

export default deleteMovieCardActionAsync