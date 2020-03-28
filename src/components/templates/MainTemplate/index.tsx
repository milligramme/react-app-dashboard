import React from "react";

import { Container } from "@material-ui/core";

import Header from "../../organisms/Header";
import classes from "./classes.module.css";

const MainTemplate: React.FunctionComponent = ({ children }) => (
  <div className={classes.LayoutPage}>
    <Header />
    <Container fixed={true} maxWidth="lg" className={classes.LayoutContainer}>
      {children}
    </Container>
    <footer className={classes.LayoutFooter}>
      footer
    </footer>
  </div>
);


export default MainTemplate;
