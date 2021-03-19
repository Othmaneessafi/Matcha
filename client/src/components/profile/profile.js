import React, { useState, useEffect } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
// import profileImage from "./img/love.svg";
// import { Link } from "react-router-dom";
import textField from "../shared/TextField";
// import Axios from "axios";

export default function Profile(props) {
  const { handleSubmit, user } = props;
  const [showEdit, setShowEdit] = useState(true);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  }
  console.log(user);
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
                  `url()`,
                backgroundSize: "cover",
              }}
            ></Grid>
            {(showEdit) ?
            <>
            <Grid item sm={10} className="profileFullName">
            <h1>Harry kane</h1>
            <h3>kane1</h3>
            <h5><i class="fas fa-envelope"></i> kane@gmail.com</h5>
            <Button variant="contained" color="primary" className="loginBtn" type="submit" value="ok" onClick={handleEdit}>Edit</Button>
            </Grid>
            <Grid item sm={10} style={{ height: "30%"}} ></Grid></>
            :
            <Grid item sm={10} >
            <Field
                name="fullname"
                label="Full Name"
                type="text"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
            <Field
                name="username"
                label="Username"
                type="text"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
            <Field
                name="email"
                label="Email"
                type="email"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
            <Field
                name="password"
                label="Password"
                type="password"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
            <Button variant="contained" color="primary" className="loginBtn" type="submit" value="ok" onClick={handleSubmit}>Edit</Button>
            <Button variant="contained" color="primary" className="loginBtn" type="submit" value="ok" onClick={handleEdit}>Cancel</Button>
            </Grid>}
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
            </Grid>
          </Grid>
        </Grid>
    </>
  );
}
