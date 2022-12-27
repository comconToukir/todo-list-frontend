import { Box } from "@material-ui/core";
import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Grid from '@material-ui/core/Grid';

const TaskList = () => {
  return (
    <Grid container direction="row" style={{padding: 9}}>
      {[1, 2, 3, 4].map((item, i) => {
        return <TaskItem key={i} item={item} />;
      })}
    </Grid>
  );
};

export default TaskList;
