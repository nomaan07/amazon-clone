import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(1),
    },
    position: "absolute",
    justifyContent: "center",
    zIndex: 100,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
}));
function Loader({ onLoad }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress onLoad={onLoad} />
    </div>
  );
}

export default Loader;
