import React from "react";
import { Formik, FormikValues } from "formik";
import { Schema } from "yup";

interface OwnProps {
  initialValue: FormikValues;
  onSubmit(values: FormikValues): void;
  validationSchema: Schema<{}>;
  children: React.ReactNode;
}

type Props = OwnProps;

const Form: React.FunctionComponent<Props> = ({
  initialValue,
  validationSchema,
  onSubmit,
  children,
}) => (
  <Formik
    initialValues={initialValue}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    validateOnBlur={false}
    validateOnChange={false}
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
