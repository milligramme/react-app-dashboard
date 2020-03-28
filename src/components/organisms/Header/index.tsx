import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import classes from "./classes.module.css";

const Header: React.FunctionComponent = () => (
  <AppBar className={classes.LayoutHeader}>
    <Toolbar>
      <Link to="/" className={classes.Link}>
        <Typography>Header</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
