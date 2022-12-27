import React, { useState } from "react";
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

const InputField = () => {
  const classes = useStyles();

  const [task, setTask] = useState({});

  const handleChange = (e) => {
    const name = e.target.value;
    const isChecked = false;
    const isDeleted = false;

    setTask((task) => ({
      ...task,
      name: name,
      isChecked: isChecked,
      isDeleted: isDeleted,
    }));
  };

  const handlePost = (e) => {
    if (e.key === "Enter") {
      // console.log(task);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: e.target.value,
        isChecked: false,
        isDeleted: false,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3001/users", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
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
