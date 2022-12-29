import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField  from '@material-ui/core/TextField';

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

      "&:hover .action-icon": {
        display: "block",
      },
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TaskItem = ({ item, handleUpdate }) => {
  const classes = useStyles();

  // const [updateTask, setUpdateTask] = useState("");
  const [editable, setEditable] = useState(false);

  // console.log(editable);

  // const handleCheck = () => {
  //   setUpdateTask((updateTask) => ({ isChecked: !item.isChecked }));
  // };

  // const updateRef = useRef(updateTask);

  const handleCheckUpdate = () =>
    handleTaskUpdate({ isChecked: !item.isChecked });

  const handleEditUpdate = (e) => {
    const task = e.target.value;
    if(e.key === "Enter") {
      handleTaskUpdate({ name: task })
      setEditable(false);
    }
  };

  // const handleChange = (e) => {
  //   const name = e.target.value;

  //   setUpdateTask((updateTask) => ({
  //     name: name
  //   }));
  // };

  const handleTaskUpdate = (data) => {
    fetch(process.env.REACT_APP_global_uri + "users/" + item._id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result._id) {
          handleUpdate(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      className={classes.gridItem}
    >
      {editable ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.root}
          style={{ display: "flex", width: "max-width" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            // onChange={handleChange}
            onKeyDown={handleEditUpdate}
            defaultValue={item.name}
            id="outlined-basic"
            label="Add a Task"
            variant="outlined"
          />
        </form>
      ) : (
        <FormControlLabel
          control={
            <Checkbox
              name="checked"
              color="primary"
              checked={item.isChecked}
              onChange={handleCheckUpdate}
            />
          }
          label={item.name}
        />
      )}
      <Grid container alignItems="center" style={{ width: "max-content" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 8, padding: "4px 10px" }}
          onClick={() => setEditable((editable) => !editable)}
        >
          <EditIcon
            className="action-icon"
            style={{ height: 17, marginRight: 1, display: "none" }}
          />
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ padding: "4px 10px" }}
        >
          <DeleteIcon
            className="action-icon"
            style={{ height: 17, marginRight: 1, display: "none" }}
          />
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskItem;
