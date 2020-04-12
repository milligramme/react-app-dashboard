import React, { useState, useMemo } from "react";
import { v4 } from "uuid";
import * as Yup from "yup";
import { Formik, FormikValues } from "formik";

import { Typography, IconButton } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

import MainTemplate from "../../templates/MainTemplate";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/Checkbox";
import classes from "./classes.module.css";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface LocalState {
  tasks: Task[];
}

const TodoList: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<LocalState["tasks"]>([]);

  const validationSchema = useMemo(() =>
    Yup.object().shape({
      id: Yup.string(),
      title: Yup.string()
        .required("required !!!"),
      done: Yup.boolean(),
    }), []);

  return (
    <MainTemplate>
      <Typography>Todo</Typography>
      <Formik
        initialValues={{ id: v4(), title: "", done: false }}
        onSubmit={(values: FormikValues, { resetForm }) => {
          const task: Task = {
            id: v4(),
            title: values.title,
            done: false
          };

          setTasks([...tasks, task]);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className={classes.AddForm}>
              <TextField label="Add Task" name="title" />
              <IconButton
                type="submit"
                size="small"
                color="primary"
                classes={{ root: classes.ButtonSubmit }}
              >
                <AddCircle />
              </IconButton>
            </div>

            {tasks.filter(({ done } ) => !done).map(task =>
              <div key={task.id}>
                {task.id} {task.title}
                <Checkbox name="done" />
              </div>)}
          </form>
        )}
      </Formik>
    </MainTemplate>
  )
}

export default TodoList;
