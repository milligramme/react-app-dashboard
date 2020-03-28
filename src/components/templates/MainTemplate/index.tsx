import React from "react";

import { Container } from "@material-ui/core";

import classes from "./classes.module.css";

const MainTemplate: React.FunctionComponent = ({ children }) => (
  <div className={classes.LayoutPage}>
    <header className={classes.LayoutHeader}>
      header
    </header>
    <Container fixed={true} maxWidth="lg" className={classes.LayoutContainer}>
      {children}
    </Container>
    <footer className={classes.LayoutFooter}>
      footer
    </footer>
  </div>
);


export default MainTemplate;
