import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../../containers/Navbar";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// import Axios from "axios";
import "./browsing.css";
import { Button } from "@material-ui/core";

function valuetext(value) {
  return `${value}`;
}

export default function Browsing(props) {
  const {selectOptions,handle, users,handleSubmit,handleBlock,handleLike,handleDislike,
    handleViewProfile,handleChangeAge,handleChangeLoc,handleChangeRating,
    handleChangeTags,handleChangeNbrTags,age,nbrTags,localisation,rating} = props;

  return (
    <>
      <Navbar />
      <Grid container className="BrowsingContainer">
        <Grid item container sm={10} className="filter" spacing={0}>
          <Grid item sm={3}>
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ color: "red" }}
            >
              Rating
            </Typography>
            <Slider
              value={rating}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeRating}
              step={1}
              marks
              min={1}
              max={5}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item sm={3}>
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ color: "red" }}
            >
              Age
            </Typography>
            <Slider
              value={age}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeAge}
              step={1}
              marks
              min={18}
              max={70}
              color="secondary"
              style={{ width: 300 }}
              />
          </Grid>
          <Grid item sm={3}>
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ color: "red" }}
              >
              Localisation
            </Typography>
            <Slider
              value={localisation}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeLoc}
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
              style={{ width: 300 }}
              />
          </Grid>
          <Grid item sm={3}>
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ color: "red" }}
              >
              Tags
            </Typography>
            <Slider
              value={nbrTags}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleChangeNbrTags}
              step={1}
              marks
              min={1}
              max={5}
              color="secondary"
            />
          </Grid>
          <Button type="submit" onClick={handleSubmit} color="secondary"  variant="contained" >Filter</Button>
        </Grid>
        <Grid item sm={12} style={{ height: 50 }}></Grid>
        <Grid item container sm={12}>
          
          {users.status === "success"
            ? users.users.map((user, i) => (
                <Cards user={user}  key={i} />
              ))
            : ""}
        </Grid>
      </Grid>
    </>
  );
}
