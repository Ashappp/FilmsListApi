import axios from "axios";

// const objData = [
//   {
//     Id: 1,
//     Title: "Blazing Saddles",
//     Release: 1974,
//     Format: "VHS",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 2,
//     Title: "Blazing Saddles",
//     Release: 1942,
//     Format: "Blu-Ray",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 3,
//     Title: "Blazing Saddles",
//     Release: 1953,
//     Format: "DVD",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 4,
//     Title: "Blazing Saddles",
//     Release: 1974,
//     Format: "VHS",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 5,
//     Title: "Blazing Saddles",
//     Release: 1967,
//     Format: "Blu-Ray",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 6,
//     Title: "Blazing Saddles",
//     Release: 2000,
//     Format: "VHS",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 7,
//     Title: "Blazing Saddles",
//     Release: 1974,
//     Format: "VHS",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   },
//   {
//     Id: 8,
//     Title: "Blazing Saddles",
//     Release: 1992,
//     Format: "DVD",
//     Stars: [
//       "Mel Brooks",
//       "Clevon Little",
//       "Harvey Korman",
//       "Gene Wilder",
//       "Slim Pickens",
//       "Madeline Kahn"
//     ]
//   }
// ];

const getData = data => ({
  type: "GET_DATA",
  payload: data
});

const asyncDataAction = input => dispatch => {
  axios
    .get(`http://localhost:3003/api/all`)
    // axios.get(
    //   `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=200&q=${"Films"}`
    // )
    .then(res => {
      console.log(res);
      dispatch(getData(res.data.data));
    })
    .catch(error => console.log(error));
};

export default asyncDataAction;
