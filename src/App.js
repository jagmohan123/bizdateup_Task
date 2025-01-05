import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import AddNewTask from "./components/AddNewTask";
import AllTask from "./components/AllTask";
import { Routes, Route } from "react-router-dom";
function App() {
  // State for tasks management
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (newTask) => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Task Management</h1>

      <Routes>
        <Route path="/" element={<AddNewTask addTask={addTask} />} />
        <Route
          path="/view-task"
          element={
            <AllTask
              tasks={tasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              addTask={addTask}
            />
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
