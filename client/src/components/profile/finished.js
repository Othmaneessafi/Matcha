import React from "react";
import Grid from "@material-ui/core/Grid";
import Done from "./img/done.svg"

export default function finished() {
  return (
    <>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item container sm={12} className="DoneContainer">
            <img src={Done} alt="done" className="doneImg" />
        </Grid>
        <Grid item container sm={12} className="DoneContainer">
            <h1 className="message">You completed your profile information successfully</h1>
        </Grid>
      </Grid>
    </>
  );
}
