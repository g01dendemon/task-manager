import { useState } from "react";
import { initialTasks } from "./data/initialTasks";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TaskStatistics from "./components/TaskStatistics";
import TaskList from "./components/TaskList.jsx";
import TaskItem from "./components/TaskItem.jsx";



function App() {

  function clearTasks() {

    setTasks([]);

  }

  function addTask() {

    const newTask = {
      id: Date.now(),
      title: "New Task",
      completed: false
    };

    setTasks([...tasks, newTask]);

  }

  const [tasks, setTasks] = useState(initialTasks);

  function deleteTask(id) {

    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);

  }

  function toggleTask(id) {

    const newTasks = tasks.map(task => {

      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
      <div>
        <Header />
        <TaskStatistics tasks={tasks} />
        <button onClick={clearTasks}>Clear tasks</button>
        <button onClick={addTask}>Add Task</button>

        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>

        <Footer />
      </div>
  );
}

export default App;