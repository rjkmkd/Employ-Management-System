import React from 'react'

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-80 w-full  mt-10 py-5 px-4 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      <div
        id="task"
        className="h-full w-[300px]  rounded-xl shrink-0 bg-red-500"
      >
        <div className="flex justify-between items-center">
          <h3 className="bg-red-800 w-1/4 rounded-full it justify-center flex m-2 p-1 font-extrabold cursor-default">
            High
          </h3>
          <h4 className='text-sm font-semibold px-2 cursor-default'> 21 oct 2024</h4>
        </div>

        <h1 className='px-5 py-2 text-2xl font-semibold'>Make A YouTube Video</h1>
        <p className='p-5 text-sm font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus accusantium esse quae deserunt dignissimos corrupti?</p>
      </div>
    </div>
  );
}

export default TaskList
