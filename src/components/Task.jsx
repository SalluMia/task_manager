import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const Task = ({ task, onDelete, onEdit, onEditTask }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check); // Toggle check state
  };

  const handleEditClick = () => {
    console.log("Editing task:", task);
    onEdit(task); // Trigger the onEdit function with the task data
    onEditTask(task); // Trigger the onEditTask function with the task data
  };

  return (
    <>
      <div
        className={`flex flex-col p-2 sm:p-0 xl:p-0 md:p-0 lg:p-0 items-start md:flex-row  md:items-center lg:items-center lg:justify-between lg:items-center mb-2 rounded-md border ${
          check ? "border-blue-500" : "border-gray-200 bg-white"
        }`}
      >
        {/* left row  */}
        <div className=" flex items-center gap-2 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 sm:justify-center md:justify-center lg:justify-center xl:justify-center sm:items-center md:items-center lg:items-center xl:items-center">
          <div
            className="w-4 h-4  lg:ml-2 md:ml-0 md:mr-4"
            style={{ backgroundColor: task?.color || "white" }}
          ></div>
          <div className="flex-1">
            <span>{task?.name}</span> {/* Add null check for task.name */}
          </div>
        </div>

        {/* right row */}
        <div className="flex justify-between w-full sm:w-full md:w-2/5  items-center sm:justify-between  md:justify-end lg:justify-end ">
          <span className="md:ml-auto md:mr-4  w-full flex justify-start md:justify-end">{task?.time}</span>
          {/* Add null check for task.time */}
          <div className="md:ml-auto md:mr-4 mb-2 md:mb-0">
            <button onClick={handleCheck}>
              <FaCircleCheck
                className={check ? "text-blue-700" : "text-gray-400"}
              />
            </button>
          </div>
          <div className="bg-blue-100 p-2">
            <button onClick={handleEditClick}>
              <MdEdit className="text-blue-700" />
            </button>
          </div>
          <div className="bg-red-100 p-2 rounded-r-md">
            <button onClick={() => task && onDelete(task.id)}>
              <RiDeleteBinFill className="text-red-800" />
            </button>{" "}
            {/* Add null check for task.id */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
