import React from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import { Field } from 'redux-form';
import Button from "@material-ui/core/Button";
import profileImage from "./img/love.svg";
import { Link } from 'react-router-dom';
import textField from '../shared/TextField'

export default function profile(props) {
  const { handleSubmit} = props;

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
            lg={6}
            className="profileImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            
          </Grid>
          
          <Grid
            item
            container
            xs={12}
            lg={6}
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
                rows='1'
                label="Password"
                color="secondary"
                className="profileInput"
                InputProps={{ className: "profileInput" }}
                InputLabelProps={{ className: "profileInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button variant="contained" color="primary" className="profileBtn" type="submit" value="ok" onClick={handleSubmit}>
                profile
              </Button>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
