import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import "./index.scss";

class AuthorDashboard extends React.Component {
  state = {};

  render() {
    return (
      <div className="author-dashboard">
        <main>
          <Grid container spacing={24}>
            <Grid item xs={12} md={12}>
              <h1>
                Ostatnie statystyki <br />
                <small>Zebrane na podstawie ostatnich dwóch tygodni</small>
              </h1>
              <Paper>asdasd</Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <h1>
                Ile osób przeczytało <br />
                <small>Zainteresowanie wsród płci</small>
              </h1>
              <Paper>asd</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>
                Ile przeczytano <br />
                <small>Ile osób przeczytało ... książek</small>
              </h1>
              <Paper />
            </Grid>
            <Grid item xs={12} md={12}>
              <h1>
                Najlepszy czytelnik <br />
                <small>Twoim największym fanem jest...</small>
              </h1>
              <Paper>asd</Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default AuthorDashboard;
