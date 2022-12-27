import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Grid from '@material-ui/core/Grid';

const TaskList = () => {
  return (
    <Grid direction="column" spacing={2} padding={2}>
      {[1, 2, 3, 4].map((item, i) => {
        return <TaskItem key={i} item={item} />;
      })}
    </Grid>
  );
};

export default TaskList;
