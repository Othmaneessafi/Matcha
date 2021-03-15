import React, { useState, useEffect } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import profileImage from "./img/love.svg";
import { Link } from "react-router-dom";
import textField from "../shared/TextField";
import Axios from "axios";

export default function Profile(props) {
  useEffect(() => {
    Axios.get("http://localhost:3001/browsing").then((response) => {
      console.log(response.data);
    });
  }, []);
  const { handleSubmit } = props;

  return (
    <>
      <Grid
        container
        className="profilContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="profileContainer">
          <Grid
            item
            xs={12}
            lg={4}
            className="profileImageContainer"
            container
            justify="center"
            // alignItems="center"
          >
            <Grid
              item
              sm={10}
              className="profileUserImage"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1615803795804-06a0c2a0030e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)",
                backgroundSize: "cover",
              }}
            ></Grid>
            <Grid item sm={10} className="profileFullName">
              <h1>Harry kane</h1>
              <h3>Harry1</h3>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={8}
            className="profileInputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              lg={6}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <h1 className="logo">MATCHA</h1>
              <Field
                name="username"
                label="Username"
                type="text"
                component={textField}
                className="profileInput"
                color="secondary"
                InputProps={{ className: "profileInput" }}
                InputLabelProps={{ className: "profileInputLabel" }}
              />

              <Field
                name="password"
                type="password"
                component={textField}
                rows="1"
                label="Password"
                color="secondary"
                className="profileInput"
                InputProps={{ className: "profileInput" }}
                InputLabelProps={{ className: "profileInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button
                variant="contained"
                color="primary"
                className="profileBtn"
                type="submit"
                value="ok"
                onClick={handleSubmit}
              >
                profile
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
