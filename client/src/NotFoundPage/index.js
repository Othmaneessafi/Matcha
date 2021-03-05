import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import notFoundImage from "./img/404.svg";
import { Link } from "react-router-dom";

export default function notFound(props) {
  return (
    <>
      <Grid
        container
        className="signinContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7} container className="loginContainer">
          <Grid
            item
            xs={12}
            lg={6}
            className="loginImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <img src={notFoundImage} alt="Login" className="loginImage" />
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={6}
            className="loginInputContainer"
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
              <h1 className="logo">Page Not Found</h1>
              <h3 className="message">Please go back to the login page</h3>
              <div style={{ height: 30 }} />

              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className="loginBtn"
                >
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
