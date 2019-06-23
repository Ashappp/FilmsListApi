import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputUi from "@material-ui/core/Input";
import actionAddFild from "../../redux/actions/addFild";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

function Inputs(props) {
  const classes = useStyles();
  const { addFild } = props;

  return (
    <form className={classes.container} action="">
      <InputUi
        onChange={e => addFild(e)}
        name="title"
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <InputUi
        onChange={e => addFild(e)}
        name="year"
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <InputUi
        onChange={e => addFild(e)}
        name="format"
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <InputUi
        onChange={e => addFild(e)}
        name="stars"
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          "aria-label": "Description"
        }}
      />
      <button type="button">Add Films</button>
    </form>
  );
}

const MDTP = dispatch => ({
  addFild: e => dispatch(actionAddFild(e))
});

Inputs.propTypes = {};

export default connect(
  null,
  MDTP
)(Inputs);
