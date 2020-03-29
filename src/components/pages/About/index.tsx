import React, { useMemo } from "react";
import * as Yup from "yup";

import {
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import TextField from "../../atoms/TextField";
import Form from "../../organisms/Form";
import MainTemplate from "../../templates/MainTemplate";

const About: React.FunctionComponent = () => {
  const validationSchema = useMemo(() =>
    Yup.object().shape({
      email: Yup.string()
        .email("invalid email address"),
      name: Yup.string()
        .required("required !!!"),
      age: Yup.number()
        .min(1, "custom mess ${min}")
        .max(10, "custom mess ${max}"),
  }), []);

  return (
    <MainTemplate>
      <Typography variant="h6">about</Typography>
      <Form
        initialValue={{ email: "", name: "", age: "" }}
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationSchema}
      >
        <>
          <Box>
            <TextField label="email" name="email" type="text" />
            <TextField label="name" name="name" type="text" />
            <TextField label="age" name="age" type="number" />
          </Box>
          <Button type="submit" variant="contained">
            submit
          </Button>
        </>
      </Form>
    </MainTemplate>
  );
};

export default About;
