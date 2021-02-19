import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../navbar/navbar";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'
import "./browsing.css";

function valuetext(value) {
  return `${value}`;
}

export default function Browsing() {
  const images = [
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    "https://images.pexels.com/photos/6507482/pexels-photo-6507482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  return (
    <>
      <Navbar />
      <Grid container className="BrowsingContainer">
        <Grid item container sm={10} className="filter" spacing={0}>
          <Grid item  sm={3}>
            <Typography id="discrete-slider" gutterBottom style={{color: "red"}}>
              Rating
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item sm={3}>
            <Typography id="discrete-slider" gutterBottom style={{color: "red"}}>
              Age
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item sm={3}>
            <Typography id="discrete-slider" gutterBottom style={{color: "red"}}>
              Localisation
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
              style={{ width: 300 }}
            /></Grid>
          <Grid item sm={3}>
            <Typography id="discrete-slider" gutterBottom style={{color: "red"}}>
              Tags
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              color="secondary"
              
            />
          </Grid>
          <Button variant="contained" color="secondary" >Filter</Button>
        </Grid>
        <Grid item sm={12} style={{ height: 50 }}></Grid>
        <Grid item container sm={12}>
          {images.map((img) => (
            <Cards image={img} />
          ))};
        </Grid>
      </Grid>
    </>
  );
}
