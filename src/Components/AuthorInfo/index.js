import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import "./index.scss";

export default class AuthorInfo extends React.Component {
  state = {};
  render() {
    return (
      <div className="author-dashboard">
        <main>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7}>
              <Paper className="paper">
                <h1>
                  Ostatnie statystyki <br />
                  <small>Popularność na przestrzeni ostatnich dni</small>
                </h1>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}
