import React from "react";
import classnames from "classnames";

import { NativeSelect } from "@material-ui/core";

import { ThemeContext, Theme } from "..";
import classes from "./classes.module.css";

interface Props {
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  themes: Theme[];
}

const ThemeSelector: React.FunctionComponent<Props> = ({
  onChange,
  themes,
}) => {
  return (
    <ThemeContext.Consumer>
      {theme =>
        <div className={classnames({
          [classes.Light]: theme === "light",
          [classes.Dark]: theme === "dark",
        })}>
          <div>Theme is {theme}</div>
          <NativeSelect
            onChange={onChange}
          >
            {themes.map((t) =>
              <option key={t} value={t}>{t}</option>
            )}
          </NativeSelect>
        </div>
      }
    </ThemeContext.Consumer>
  );
};

export default ThemeSelector;
