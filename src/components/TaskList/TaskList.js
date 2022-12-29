import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Grid from "@material-ui/core/Grid";
import DeleteModal from "../DeleteModal/DeleteModal";

const TaskList = ({ tasks, handleUpdate, fetchAll }) => {
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
      console.log(result)
        if (result._id) {
          handleUpdate(result);
          console.log('object');
        }
      })
      .catch((error) => console.log("error", error));
  };

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
        handleTaskUpdate={handleTaskUpdate}
        fetchAll={fetchAll}
      />
    </>
  );
};

export default TaskList;
