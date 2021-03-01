import React from "react";
import { useSpring, animated } from "react-spring";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BlockIcon from "@material-ui/icons/Block";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from '@material-ui/icons/Star';
import "./Cards.css";
import { Grid } from "@material-ui/core";

const calc = (x, y) => [0, 0, 1.1];
const trans = (x, y, s) => ` scale(${s})`;

const capitalize = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Cards({ image }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 150, friction: 50 },
  }));

  const stars = [];
  for (let i = 0; i < image.rating; i++) {
    stars.push(<StarIcon key={i} />); 
  }
 
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        margin: 10,
      }}
    >
      <img src={image.path} alt="imgs" className="cardImage shadow" />
      <div className="cardInfos">
        <h1 className="cardUsername">{capitalize(image.username)}, {image.age}</h1>
        <div className="CardDescrtion">{stars}</div>
      </div>
      <Grid container className="cardChoice">
        <Grid
          item
          container
          sm={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <FavoriteIcon />
          </div>
        </Grid>
        <Grid
          item
          container
          sm={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <BlockIcon />
          </div>
        </Grid>
        <Grid
          item
          container
          sm={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="cardIcons">
            <VisibilityIcon />
          </div>
        </Grid>
      </Grid>
    </animated.div>
  );
}
