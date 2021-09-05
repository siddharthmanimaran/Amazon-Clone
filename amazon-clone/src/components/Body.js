import React from "react";
import DisplayCard from "./Card";
import Grid from "@material-ui/core/Grid";

function Body() {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={4} md={3}>
          <DisplayCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <DisplayCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <DisplayCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <DisplayCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <DisplayCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;
