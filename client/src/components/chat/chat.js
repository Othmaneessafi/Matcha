import React, { useState, useEffect } from "react";
import "./chat.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";
import textField from "../shared/TextField";
import TextField from "@material-ui/core/TextField";

export default function Chat(props) {
  return (
    <>
      <Navbar />
      <Grid
        container
        className="chateContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="chatContainer">
          <Grid
            item
            xs={12}
            lg={4}
            className="chatImageContainer"
            container
            justify="center"
          >
            <Grid item container sm={10} direction="column"  className="friends">
              <div className="friendUsername">
                <h1>Username</h1>
              </div>
              <div className="friendUsername">
                <h1>Username</h1>
              </div>
              <div className="friendUsername">
                <h1>Username</h1>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            lg={8}
            className="chatInputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={12}></Grid>
            <Grid
              item
              sm={11}
              style={{
                // border: "1px solid yellow",
                position: "relative",
                top: "23%",
              }}
            >
              <TextField
                type="text"
                name="message"
                placeholder="Message"
                color="secondary"
                fullWidth
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
