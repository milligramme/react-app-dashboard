import React, { useMemo } from "react";
import { useField, useFormikContext } from "formik";

import {
  Checkbox,
  CheckboxProps,
} from "@material-ui/core";

import classes from "./classes.module.css";

interface OwnProps {
  name: string;
}

type Props = OwnProps & Omit<CheckboxProps, "name" | "value">;

const CustomizedCheckbox: React.FunctionComponent<Props> = ({
  name,
  onChange = () => { },
 ...restProps
 }) => {
  const context = useFormikContext<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any

  // fallback
  /* eslint-disable react-hooks/rules-of-hooks */
  if (context === undefined) {
    return (
      <Checkbox
        name={name}
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
    onChange(e, e.currentTarget.checked);
  }, [onChange, onFieldChange]);

  /* eslint-enable react-hooks/rules-of-hooks */

  return (
    <Checkbox
      classes={{
        root: classes.Checkbox,
      }}
      onChange={handleChange}
      {...restProps}
      {...restFieldProps}
    />
  );
};

export default CustomizedCheckbox;
