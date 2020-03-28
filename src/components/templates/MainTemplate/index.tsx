import React from "react";

import classes from "./classes.module.css";

const MainTemplate: React.FunctionComponent = ({ children }) => (
  <div className={classes.LayoutPage}>
    <header className={classes.LayoutHeader}>
      header
    </header>
    <div className={classes.LayoutContainer}>
      {children}
    </div>
    <footer className={classes.LayoutFooter}>
      footer
    </footer>
  </div>
);


export default MainTemplate;
