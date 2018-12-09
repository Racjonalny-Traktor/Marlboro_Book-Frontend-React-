import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminDashboard } from "../../Components";
import "./index.scss";

import classnames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default class Ztm extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div
        className={classnames("dashboard", {
          "dashboard--open": this.state.open
        })}
      >
        <CssBaseline />
        <AppBar className="bar">
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classnames({ hidden: this.state.open })}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              ZTM Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" className={classnames("menu")}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Drawer>
        <Router>
          <section className="content">
            <Switch>
              <Route exact path="/Ztm" component={AdminDashboard} />
              <Route path="/Ztm/*" component={AdminDashboard} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}