import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/TextField";

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

    "& .MuiFormControlLabel-root": {
      overflow: "hidden"
    },

    "& .action-icon": {
      height: 17,
      marginRight: 1,
      display: "none"
    },

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

const TaskItem = ({
  item,
  handleTaskUpdate,
  openDeleteModal
}) => {
  const classes = useStyles();

  const [editable, setEditable] = useState(false);

  const handleCheckUpdate = () =>
    handleTaskUpdate({ isChecked: !item.isChecked }, item._id);

  const handleEditUpdate = (e) => {
    const task = e.target.value;
    if (e.key === "Enter") {
      handleTaskUpdate({ name: task }, item._id);
      setEditable(false);
    }
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
          style={{ display: "flex", flex: 1 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "100%" }}
            onKeyDown={handleEditUpdate}
            defaultValue={item.name}
            id="outlined-basic"
            label="Edit Task"
            variant="outlined"
          />
        </form>
      ) : (
        <FormControlLabel
          style={{ display: "flex", flex: 1, }}
          control={
            <Checkbox
              style={{ textOverflow: "ellipsis" }}
              name="checked"
              color="primary"
              checked={item.isChecked}
              onChange={handleCheckUpdate}
            />
          }
          label={<span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.isChecked ? <s style={{ color: "gray", }}>{item.name}</s> : item.name}</span>}
        />
      )}
      <Grid container alignItems="center" style={{ width: "max-content", marginLeft: "10px", marginRight: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 8, padding: "4px 10px" }}
          onClick={() => setEditable((editable) => !editable)}
        >
          {editable ? <>
            <CloseIcon className="action-icon" />
            Cancel
          </> : <>
            <EditIcon className="action-icon" />
            Edit</>}
        </Button>
        <Button
          onClick={() => openDeleteModal(item._id)}
          variant="contained"
          color="secondary"
          style={{ padding: "4px 10px" }}
        >
          <DeleteIcon
            className="action-icon"
          // style={{ height: 17, marginRight: 1, display: "none" }}
          />
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskItem;
