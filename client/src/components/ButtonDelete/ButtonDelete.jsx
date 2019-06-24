import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function ButtonDelete(props) {
  const classes = useStyles();

  return (
    <IconButton aria-label="Delete" className={classes.margin} onClick={props}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}
