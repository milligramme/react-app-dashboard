import React from "react";

import { Container } from "@material-ui/core";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import classes from "./classes.module.css";

const MainTemplate: React.FunctionComponent = ({ children }) => (
  <div className={classes.LayoutPage}>
    <Header />
    <Container fixed={true} maxWidth="lg" className={classes.LayoutContainer}>
      {children}
    </Container>
    <Footer />
  </div>
);


export default MainTemplate;
