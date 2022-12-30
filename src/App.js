import './App.css';
import InputField from './components/InputField/InputField';
import NavBar from './components/NavBar/NavBar';
import TaskList from './components/TaskList/TaskList';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
  {
    "_id": "63af008995c9253eab34b365",
    "name": "new task",
    "isChecked": false,
    "isDeleted": false
  },
  {
    "_id": "63af008d95c9253eab34b367",
    "name": "tsk 2",
    "isChecked": false,
    "isDeleted": false
  }
]);

  const fetchAll = () => fetch(process.env.REACT_APP_global_uri + "users")
  .then(res => res.json())
  .then(data => setTasks(data))

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  const handleAddTask = (task) => {
    setTasks((tasks) => ([
      ...tasks,
      task
    ]))
  }

  const handleUpdate = (task) => {
    const newTasks = tasks.map((tssk) => {
      if (tssk._id === task._id) {
        return task
      } else {
        return tssk;
      }
    })

    setTasks(newTasks);
  }

  return (
    <div className="App">
      <header>
      <NavBar />
      </header>
      <InputField handleAddTask={handleAddTask}  />
      <TaskList tasks={tasks} setTasks={setTasks} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
