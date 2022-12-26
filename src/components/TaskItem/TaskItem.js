import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 2,
  },
  grid: {
    width: "100%",
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
      <Grid container justifyContent='space-between' style={{padding: 12}}>
        <FormControlLabel control={<Checkbox name="checkedC" />} label={item} />
        <Grid>
          <Button variant="contained" color="primary" style={{marginRight: 8}}>
            Edit
          </Button>
          <Button variant="contained" color="primary">
            Delete
          </Button>
        </Grid>
      </Grid>
  );
};

export default TaskItem;