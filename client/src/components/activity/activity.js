import React, { useState, useEffect } from "react";
import "./activity.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";
import textField from "../shared/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import renderField from "../shared/TextField";


export default function Activity(props) {
  const { handleSubmit, user, users } = props;
  const [showEdit, setShowEdit] = useState(true);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  console.log(users);
  return (
    <>
      <Navbar />
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
            alignItems="center"
          >
            
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={8}
            className="profileInputContainer"
            justify="center"
            alignItems="center"
          ></Grid>
        </Grid>
      </Grid>
    </>
  );
}
