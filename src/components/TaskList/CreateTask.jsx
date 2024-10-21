import React from "react";

const CreateTask = () => {
  return (
    <div className="flex items-center justify-center mt-8 w-full px-4">
      <form className="text-white flex flex-col lg:flex-row gap-8 max-w-[1280px] w-full">
        <div className="w-full lg:w-1/2 px-4">
          <h3 className="font-bold pt-2">Task Title</h3>
          <input
            type="text"
            placeholder="Title"
            className="p-3 outline-none rounded-lg w-full bg-transparent border-2 border-emerald-500 placeholder:text-slate-300 text-lg placeholder:text-sm mb-4"
          />

          <h3 className="font-bold pt-2">Date</h3>
          <input
            type="date"
            className="p-3 outline-none rounded-lg w-full bg-transparent border-2 border-emerald-500 mb-4"
          />

          <h3 className="font-bold pt-2">Assign To</h3>
          <input
            type="text"
            placeholder="Assign your Task"
            className="p-3 outline-none rounded-lg w-full bg-transparent border-2 border-emerald-500 placeholder:text-slate-300 text-lg placeholder:text-sm mb-4"
          />

          <h3 className="font-bold pt-2">Company</h3>
          <input
            type="text"
            placeholder="Company"
            className="p-3 outline-none rounded-lg w-full bg-transparent border-2 border-emerald-500 placeholder:text-slate-300 text-lg placeholder:text-sm"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <h3 className="font-bold pt-2">Description</h3>
          <textarea
            placeholder="Describe the Task"
            className="w-full h-[150px] rounded-lg bg-transparent border-2 border-emerald-500 outline-none placeholder:text-slate-300 p-3 text-lg placeholder:text-sm mb-4"
          ></textarea>

          <button className="p-3 mt-4 outline-none rounded-lg w-full bg-black text-white text-2xl font-extrabold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
