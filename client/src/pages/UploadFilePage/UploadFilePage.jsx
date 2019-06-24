import React from "react";
import s from "./UploadFilePage.module.css";

const UploadFilePage = () => {
  return (

    <form >
        <input
          type='file'
          className='custom-file-input'
          // onChange={onChange}
        />
      <input
        type='submit'
        value='Upload'
        className='btn btn-primary btn-block mt-4'
      />
    </form>



  );
};

export default UploadFilePage;
