import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 2,
  },
  gridItem: {
    padding: 12,
    boxShadow: "2px 2px 3px lightgray",
    marginBottom: 15,
    border: "1px solid lightgray",
    borderRadius: 3,

    "&:hover": {
    border: "1px solid black",
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));




const TaskItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item container justifyContent='space-between' className={classes.gridItem} >
      <FormControlLabel control={<Checkbox name="checked" color="primary" />} label={item} />
      <Grid container alignItems='center' style={{ width: "max-content"}}>
        <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
          Edit
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskItem;