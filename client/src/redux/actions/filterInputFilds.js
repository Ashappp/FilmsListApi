const addFilterFild = e => ({
  type: "ADD_FILTER_FILD",
  key: e.target.name,
  value: e.target.value
});

export default addFilterFild;
