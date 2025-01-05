import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNewTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex items-center justify-center w-full px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg flex-shrink ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add a New Task</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full ">
          <input 
            required
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className=" max-lg:w-4 flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:w-[100px]"
          />
          <button 
            
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-10 py-1 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Add Task
          </button>
          <Link to="/view-task" className="bg-pink-500 text-white px-10 py-1 rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"> All Tasks</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
