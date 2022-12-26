import './App.css';
import InputField from './components/InputField/InputField';
import NavBar from './components/NavBar/NavBar';
import TaskItem from './components/TaskItem/TaskItem';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      </header>
      <InputField/>
      <TaskList />
    </div>
  );
}

export default App;
