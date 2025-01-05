import React from "react";
import { Link } from "react-router-dom";

const AllTask = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  console.log("value in task", tasks);
  return (
    <div className="w-full max-w-md mt-11 px-6">
      {tasks?.length === 0 || tasks === undefined ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
           All Tasks
          </h2>

          <p className="text-gray-500 text-center text-2xl text-wrap">
            You did'nt create task yet!!. Start by adding one!
          </p>
          <div className="mt-7">
            <Link
              to="/"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none mt-5"
            >
              Add Task
            </Link>
          </div>
        </div>
      ) : (
        tasks?.map((task) => (
          <div
            key={task?.id}
            className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-md `}
          >
            <div className="flex items-center justify-center gap-4">
              <span
                onClick={() => toggleTaskCompletion(task.id)}
                className={`flex-grow cursor-pointer text-lg `}
              >
                {task.text}
              </span>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`w-40 h-10 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-medium ${
                  task.completed
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-gray-200 border-gray-300 text-gray-700"
                } hover:shadow-md`}
              >
                Task{task.completed ? "  Done" : "  Not Done"}
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4 items-center text-wrap">
        {tasks?.length > 0 ? (
          <div>
            <Link
              to={"/"}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Add More Task
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AllTask;
