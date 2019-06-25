import { GET_DATA_AFTER_UPLOAD } from "./actionsType";

export const actionAfterUploadFile = data => ({
  type: GET_DATA_AFTER_UPLOAD,
  payload: data
});
export default actionAfterUploadFile;
