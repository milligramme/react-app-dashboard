import React from "react";

import {
  Typography,
  Box,
} from "@material-ui/core";

import TextField from "../../atoms/TextField";
import MainTemplate from "../../templates/MainTemplate";

const About: React.FunctionComponent = () => (
  <MainTemplate>
    <Typography variant="h6">about</Typography>

    <Box>
      <TextField name="foo" label="Foo" />
    </Box>

    <Box>
      <TextField name="boo" required={true} />
    </Box>
  </MainTemplate>
);

export default About;
