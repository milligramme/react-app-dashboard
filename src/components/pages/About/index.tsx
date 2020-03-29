import React from "react";

import {
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import TextField from "../../atoms/TextField";
import Form from "../../organisms/Form";
import MainTemplate from "../../templates/MainTemplate";

const About: React.FunctionComponent = () => (
  <MainTemplate>
    <Typography variant="h6">about</Typography>
    <Form
      initialValue={{ email: "", name: "", age: 0 }}
      onSubmit={(values) => { console.log(values) }}
    >
      <>
        <Box>
          <TextField label="email" name="email" type="email" />
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

export default About;
