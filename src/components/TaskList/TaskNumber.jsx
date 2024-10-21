import React from 'react'

const TaskNumber = () => {
  return (
    <div className="flex justify-between gap-5 mt-10 m-4">

      <div className="px-10 py-6 w-1/2 bg-red-600 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="px-10 py-6 w-1/2 bg-blue-500 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="px-10 py-6 w-1/2 bg-green-500 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="px-10 py-6 w-1/2 bg-yellow-500 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

    </div>
  );
}

export default TaskNumber
