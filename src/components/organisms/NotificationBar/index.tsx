import React, { useState, useEffect } from "react";
import classnames from "classnames";

import {
  IconButton,
  Snackbar,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

import classes from "./classes.module.css";

export type Notif = "info" | "error" | "warning" | "success";

interface OwnProps {
  type: Notif;
  message?: React.ReactNode;
}

interface LocalState {
  open: boolean;
}

type Props = OwnProps;

const NotificationBar: React.FunctionComponent<Props> = ({
  type,
  message,
}) => {
  const [open, setOpen] = useState<LocalState["open"]>(false)
  const handleClose = (_event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    setOpen(message != null);
  }, [message, setOpen])

  return (
    <Snackbar
      open={open}
      message={message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      ContentProps={{
        classes: {
          root: classnames({
            [classes.info]: type === "info",
            [classes.error]: type === "error",
            [classes.success]: type === "success",
            [classes.warning]: type === "warning",
          }),
        },
      }}
    />
  );
};

export default NotificationBar;
