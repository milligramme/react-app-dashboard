import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import classes from "./classes.module.css";

const Header: React.FunctionComponent = () => (
  <AppBar className={classes.LayoutHeader}>
    <Toolbar>
      <Typography>Header</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
