import React, { createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: 20,
      width: "100%",
    },
  },
}));

const InputField = ({ handleAddTask }) => {
  const classes = useStyles();

  const inputRef = createRef();

  const [task, setTask] = useState({});

  const handleChange = (e) => {
    const name = e.target.value;
    const isChecked = false;
    const isDeleted = false;

    setTask((task) => ({
      name: name,
      isChecked: isChecked,
      isDeleted: isDeleted,
    }));
  };

  const handlePost = (e) => {
    if (e.key === "Enter") {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(task);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(process.env.REACT_APP_global_uri + "users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result._id) {
            handleAddTask(result)
            setTask({});
            e.target.value = "";
            e.target.blur();
            inputRef.current.blur();
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.root}
      style={{ display: "flex" }}
      noValidate
      autoComplete="off"
      ref={inputRef}
    >
      <TextField
        onChange={handleChange}
        onKeyDown={handlePost}
        id="outlined-basic"
        label="Add a Task"
        variant="outlined"
      />
    </form>
  );
};

export default InputField;
