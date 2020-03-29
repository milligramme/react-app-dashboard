import React, { useMemo } from "react";
import { useField, useFormikContext, ErrorMessage } from "formik";

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
  const context = useFormikContext<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any

  // fallback
  /* eslint-disable react-hooks/rules-of-hooks */
  if (context === undefined) {
    return (
      <TextField
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        {...restProps}
      />
    );
  }

  const hasError = useMemo(() => context !== undefined && context.errors[name] !== undefined, [context, name]);

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
      classes={{
        root: classes.TextField,
      }}
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
      helperText={hasError ? <ErrorMessage name={name} /> : null}
      FormHelperTextProps={{
        classes: {
          root: classes.FormHelperText,
        }
      }}
    />
  );
};

export default CustomizedTextField;
