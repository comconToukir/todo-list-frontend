import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item, i) => {
        return <TaskItem key={i} item={item} />;
      })}
    </div>
  );
};

export default TaskList;
