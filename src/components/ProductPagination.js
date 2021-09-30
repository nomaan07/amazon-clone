import React, { useState } from "react";
import "./Pagination.css";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
function ProductPagination({ totalLength, postsPerPage, onChange }) {
  const classes = useStyles();
  const count = Math.ceil(totalLength / postsPerPage);
  return (
    <div className={classes.root}>
      <Pagination
        style={{
          padding: 10,
          marginLeft: "50%",
          justifyContent: "center",
        }}
        count={count}
        color="primary"
        variant="outlined"
        size="large"
        onChange={(event, value) => onChange(value)}
      />
    </div>
  );
}

export default ProductPagination;
