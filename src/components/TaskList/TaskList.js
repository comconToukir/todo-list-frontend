import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Grid from "@material-ui/core/Grid";
import DeleteModal from "../DeleteModal/DeleteModal";

const TaskList = ({ tasks, setTasks, handleUpdate }) => {
  const [open, setOpen] = useState(false);
  const [deletingId, setDeletingId] = useState("second");

  const handleClose = () => {
    setOpen(false);
  };

  const openDeleteModal = (id) => {
    setOpen((open) => !open);
    setDeletingId(id);
    // console.log(id);
  };

  const handleTaskUpdate = (data, id) => {
    fetch(process.env.REACT_APP_global_uri + "users/" + id, {
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

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_global_uri + "users/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isDeleted: true }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result._id) {
          const newTasks = tasks.filter((task) => task._id !== id);

          setTasks(newTasks);
        }
      })
      .catch((error) => console.log("error", error));

  }

  return (
    <>
      <Grid container direction="row" style={{ padding: 9 }}>
        {tasks.map((item) => {
          return (
            <TaskItem
              key={item._id}
              item={item}
              handleTaskUpdate={handleTaskUpdate}
              open={open}
              openDeleteModal={openDeleteModal}
              handleClose={handleClose}
            />
          );
        })}
      </Grid>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        deletingId={deletingId}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default TaskList;
