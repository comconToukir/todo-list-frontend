import './App.css';
import InputField from './components/InputField/InputField';
import NavBar from './components/NavBar/NavBar';
import TaskList from './components/TaskList/TaskList';
import { useEffect, useState } from 'react';
import DeleteModal from './components/DeleteModal/DeleteModal';

function App() {
  const [tasks, setTasks] = useState([]);
  // const [task, setTask] = useState({});
  // console.log(tasks);

  const fetchAll = () => fetch(process.env.REACT_APP_global_uri + "users")
  .then(res => res.json())
  .then(data => setTasks(data))

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAddTask = (task) => {
    setTasks((tasks) => ([
      ...tasks,
      task
    ]))
  }

  const handleUpdate = (task) => {
    console.log(task)
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
      <TaskList tasks={tasks} setTasks={setTasks} handleUpdate={handleUpdate} fetchAll={fetchAll} />
      {/* <DeleteModal /> */}
    </div>
  );
}

export default App;
