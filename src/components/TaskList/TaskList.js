import { Box } from "@material-ui/core";
import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Grid from '@material-ui/core/Grid';

const TaskList = ({ tasks, handleUpdate }) => {
  return (
    <Grid container direction="row" style={{padding: 9}}>
      {tasks.map((item) => {
        return <TaskItem key={item._id} item={item} handleUpdate={handleUpdate} />;
      })}
    </Grid>
  );
};

export default TaskList;
