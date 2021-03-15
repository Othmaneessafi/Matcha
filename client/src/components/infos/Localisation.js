import React from "react";
import Grid from "@material-ui/core/Grid";
import { Map, GoogleApiWrapper } from 'google-maps-react';


const Localisation = (props) => {
  return (
    <>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item container sm={6} className="MapContainer">
          <div>
        <Map
        google={props.google}
        zoom={14}
        className="map"
      /></div>
        </Grid>
      </Grid>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSfDV8hhu4QIgizIVhE6HP4Iu9mbRlCe8'
})(Localisation);
