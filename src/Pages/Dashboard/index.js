import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import "./index.scss";

class Dashboard extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <main>
          <Grid container spacing={24}>
            <Grid item md={6}>
              <Paper />
            </Grid>
            <Grid item md={6}>
              <Paper />
            </Grid>
            <Grid item md={12}>
              <Paper />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default Dashboard;
