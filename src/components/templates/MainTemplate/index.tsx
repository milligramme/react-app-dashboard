import React from "react";

import { Container } from "@material-ui/core";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import NotificationBar, { Notif } from "../../organisms/NotificationBar";

import classes from "./classes.module.css";

interface OwnProps {
  notif?: { type: Notif, message: string };
}

type Props =  OwnProps;

const MainTemplate: React.FunctionComponent<Props> = ({ notif, children }) => (
  <div className={classes.LayoutPage}>
    <Header />
    <Container fixed={true} maxWidth="lg" className={classes.LayoutContainer}>
      {children}
    </Container>
    <Footer />
    {notif != null && <NotificationBar type={notif.type} message={notif.message} />}
  </div>
);

export default MainTemplate;
