const addFild = e => ({
  type: "ADD_FILD",
  key: e.target.name,
  value: e.target.value
});

export default addFild;
