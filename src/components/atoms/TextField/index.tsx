import React, { useMemo } from "react";
import { useField, useFormikContext } from "formik";

import {
  TextField,
  TextFieldProps,
} from "@material-ui/core";

import classes from "./classes.module.css";

interface OwnProps {
  name: string;
}

type Props = OwnProps & Omit<TextFieldProps, "name" | "variant" | "value">;

const CustomizedTextField: React.FunctionComponent<Props> = ({
  name,
  onChange = () => { },
  onBlur = () => { },
 ...restProps
 }) => {

  // fallback
  /* eslint-disable react-hooks/rules-of-hooks */
  if (useFormikContext() === undefined) {
    return (
      <TextField
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        {...restProps}
      />
    );
  }

   const [field] = useField({ name });
   const {
     onChange: onFieldChange,
     onBlur: onFieldBlur,
     ...restFieldProps
 } = field;

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = useMemo(() => e => {
     onFieldChange(e);
     onChange(e);
   }, [onChange, onFieldChange]);

   const handleBlur: React.FocusEventHandler<HTMLInputElement> = useMemo(() => e => {
     onFieldBlur(e);
     onBlur(e);
   }, [onBlur, onFieldBlur]);

  /* eslint-enable react-hooks/rules-of-hooks */

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
      onBlur={handleBlur}
      onChange={handleChange}
      {...restProps}
      {...restFieldProps}
    />
  );
};

export default CustomizedTextField;
