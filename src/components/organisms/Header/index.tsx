import React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import classes from "./classes.module.css";

const Header: React.FunctionComponent = () => (
  <AppBar className={classes.LayoutHeader}>
    <Toolbar>
      <NavLink to="/" className={classes.Link}>
        <Typography classes={{ root: classes.TypographyHeader }}>Header</Typography>
      </NavLink>
    </Toolbar>
  </AppBar>
);

export default Header;
