import React from "react";

import {
  TextField,
  TextFieldProps,
} from "@material-ui/core";

import classes from "./classes.module.css";

interface OwnProps {
  name: string;
}

type Props = OwnProps & Omit<TextFieldProps, "name" | "variant">;

const CustomizedTextField: React.FunctionComponent<Props> = ({name, ...props}) => {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        notched: false,
        labelWidth: 0,
        classes: {
          root: classes.Input,
          input: classes.InputInput,
        }
      }}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.InputLabel,
          outlined: classes.InputLabelOutlined,
        }
      }}
      {...props}
    />
  );
};

export default CustomizedTextField;
