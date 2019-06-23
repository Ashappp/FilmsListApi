const addFild = e => ({
  type: "ADD_FILD",
  // payload: objfilds,
  key: e.name,
  value: e.value
});

export default addFild;
