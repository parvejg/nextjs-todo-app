"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{ text: string; active: boolean }[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, active: true }]);
      setInput("");
    }
  };

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].active = !newTasks[index].active;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Todo List</h1>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Sign Up with GitHub
        </a>
      </nav>

      {/* Todo Inputt */}
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="border p-2 w-full rounded-md"
            placeholder="Enter a task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-200 p-3 rounded-md mt-2 shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!task.active}
                  onChange={() => toggleTask(index)}
                  className="cursor-pointer"
                />
                <span className={task.active ? "" : "line-through text-gray-500"}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
