import React, { Fragment, useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import style from "./UploadFilePage.module.css";
import { connect } from "react-redux";
import actionAfterUploadFile from "../../redux/actions/actionAfterUploadFile";

const FileUpload = ({ history, actionAfterUploadFileFunc }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios
        .post("http://localhost:3003/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          }
        })
        .then(response => {
          console.log(response);
          actionAfterUploadFileFunc(response.data.createdMovies);
          history.push("/movies");
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className={style.form}>
        <input
          type="file"
          className={style.input}
          id="customFile"
          onChange={onChange}
        />
        <label className={style.file_label} htmlFor="customFile">
          {filename}
          <Progress percentage={uploadPercentage} className={style.progress} />
        </label>

        <input type="submit" value="Upload" className={style.button} />
      </form>
      {uploadedFile ? (
        <>
          <h3 className={style.textTitle}>{uploadedFile.fileName}</h3>
          <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
        </>
      ) : null}
    </Fragment>
  );
};

const MDTP = dispatch => ({
  actionAfterUploadFileFunc: data => dispatch(actionAfterUploadFile(data))
});

export default connect(
  null,
  MDTP
)(FileUpload);
