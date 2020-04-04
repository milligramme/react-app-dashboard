import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import MainTemplate from "../../templates/MainTemplate";


interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface LocalState {
  tasks: Task[];
}

const TodoList: React.FunctionComponent = () => {
  const [tasks, setTask] = useState<LocalState["tasks"]>([]);

  return (
    <MainTemplate>
      <Typography>Todo</Typography>
      {tasks.map(task =>
        <div key={task.id}>{task.title}</div>)}
    </MainTemplate>
  )
}

export default TodoList;
