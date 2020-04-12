import React, { useMemo, useState, useCallback, useEffect } from "react";
import * as Yup from "yup";

import {
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import TextField from "../../atoms/TextField";
import Form from "../../organisms/Form";
import MainTemplate from "../../templates/MainTemplate";
import ThemeSelector from "./ThemeSelector";

export type Theme = "dark" | "light";

interface LocalState {
  theme: Theme;
  themes: Theme[];
}

export const ThemeContext = React.createContext("light");

const About: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<LocalState["theme"]>("light");
  const [themes, setThemes] = useState<LocalState["themes"]>([]);

  useEffect(() =>{
    setThemes(["light", "dark"]);
  }, [setThemes]);

  const validationSchema = useMemo(() =>
    Yup.object().shape({
      email: Yup.string()
        .email("invalid email address"),
      name: Yup.string()
        .required("required !!!"),
      age: Yup.number()
        .min(1, "custom mess ${min}") // eslint-disable-line no-template-curly-in-string
        .max(10, "custom mess ${max}"), // eslint-disable-line no-template-curly-in-string
  }), []);

  const handleThemeChange: React.ReactEventHandler<HTMLSelectElement> = useCallback((e) =>{
    setTheme(e.currentTarget.value as Theme);
  }, [setTheme]);

  return (
    <MainTemplate>
      <ThemeContext.Provider value={theme}>
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

            <ThemeSelector
              onChange={handleThemeChange}
              themes={themes}
            />
          </>
        </Form>
      </ThemeContext.Provider>
    </MainTemplate>
  );
};

export default About;
