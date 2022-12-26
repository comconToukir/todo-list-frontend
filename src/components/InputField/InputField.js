import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 20,
      width: '100%',
    },
  },
}));

const InputField = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} style={{display: "flex"}} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Add a Task" variant="outlined" />
    </form>
  );
};

export default InputField;