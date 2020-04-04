import React from "react";
import { NavLink } from "react-router-dom";

import { Typography } from "@material-ui/core";

import classes from "./classes.module.css";

const Footer: React.FunctionComponent = () => (
  <div className={classes.LayoutFooter}>
    <NavLink to="/about" className={classes.Link}>
      <Typography classes={{ root: classes.TypographyFooter }}>about</Typography>
    </NavLink>
    <NavLink to="/todo" className={classes.Link}>
      <Typography classes={{ root: classes.TypographyFooter }}>todo</Typography>
    </NavLink>
    <Typography classes={{ root: classes.TypographyFooter }}>something</Typography>
    <Typography classes={{ root: classes.TypographyFooter }}>copyrights</Typography>
  </div>
);

export default Footer;
