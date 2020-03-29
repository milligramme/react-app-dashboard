import React from "react";
import { Formik, FormikValues } from "formik";

interface OwnProps {
  initialValue: FormikValues;
  onSubmit(values: FormikValues): void;
  children: React.ReactNode;
}

type Props = OwnProps;

const Form: React.FunctionComponent<Props> = ({
  initialValue,
  onSubmit,
  children,
}) => (
  <Formik
    initialValues={initialValue}
    onSubmit={onSubmit}
  >

    {({
      // values,
      // touched,
      // errors,
      // dirty,
      // isSubmitting,
      // handleChange,
      // handleBlur,
      handleSubmit,
      // handleReset,
    }) => (
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    )}

  </Formik>
);


export default Form;
