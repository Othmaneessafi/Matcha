import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../../containers/Navbar";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import "./browsing.css";

function valuetext(value) {
  return `${value}`;
}

export default function Browsing() {
  // const images = [
  //   "https://images.pexels.com/photos/4886807/pexels-photo-4886807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/5651673/pexels-photo-5651673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/5845336/pexels-photo-5845336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/5870286/pexels-photo-5870286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/6470297/pexels-photo-6470297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/3094441/pexels-photo-3094441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/3124353/pexels-photo-3124353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/6752270/pexels-photo-6752270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/6533788/pexels-photo-6533788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   "https://images.pexels.com/photos/6507482/pexels-photo-6507482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  // ];

  const [imgs, setImgs] = useState([]);
  const [rating, setRating] = useState(1);
  const [age, setAge] = useState(20);

  const handleRatingChange = (e, newRating) => {
    setRating(newRating);
    return newRating;
  };
  const handleAgeChange = (e, newAge) => {
    setAge(newAge);
    return newAge;
  };

  const filter = (img) => {
    if (img.rating >= rating && img.age >= age)
      return img;
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/browsing").then((response) => {
      setImgs(response.data);
    });
  }, []);

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
              onChange={handleRatingChange}
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
              Value={age}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleAgeChange}
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
              defaultValue={10}
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
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ color: "red" }}
            >
              Tags
            </Typography>
            <Slider
              defaultValue={10}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              color="secondary"
            />
          </Grid>
        </Grid>
        <Grid item sm={12} style={{ height: 50 }}></Grid>
        <Grid item container sm={12}>
          {imgs
            .filter(filter)
            .map((img, i) => (
              <Cards image={img} key={i} rating={rating} />
            ))}
        </Grid>
      </Grid>
    </>
  );
}