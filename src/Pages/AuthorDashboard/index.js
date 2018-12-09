import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import "./index.scss";

class AuthorDashboard extends React.Component {
  state = {
    summaryChart: [0, 1, 2, 3, 4, 5, 6, 7],
    howManyReadersChart: [
      {
        id: "M",
        title: "mężczyźni",
        value: 52
      },
      {
        id: "F",
        title: "kobiety",
        value: 41
      }
    ],
    readersAgeChart: [
      {
        title: "0-18",
        value: 10
      },
      {
        title: "19-25",
        value: 25
      },
      {
        title: "26-40",
        value: 32
      },
      {
        title: "41-60",
        value: 20
      },
      {
        title: "60+",
        value: 15
      }
    ],
    howManyRead: [
      {
        books: 1,
        count: 70
      },
      {
        books: 2,
        count: 55
      },
      {
        books: 3,
        count: 32
      },
      {
        books: 4,
        count: 25
      },
      {
        books: 5,
        count: 10
      }
    ],
    bestReaderInfo: {
      name: "Konrad Pękala",
      gender: "M",
      count: 69,
      history: [
        1,
        0,
        1,
        2,
        1,
        0,
        3,
        4,
        0,
        1,
        7,
        8,
        9,
        4,
        3,
        6,
        5,
        1,
        0,
        0,
        4,
        2,
        3
      ]
    }
  };

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
