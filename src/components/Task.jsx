import React, { useState } from 'react';
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
        <div className={`flex flex-col md:flex-row items-center mb-2 rounded-md border ${check ? "border-blue-500" : "border-gray-200 bg-white"}`}>
            <div className="w-4 h-4 mr-2 ml-2 lg:ml-2 md:ml-0 md:mr-4" style={{ backgroundColor: task?.color || 'white' }}></div>
            <div className="flex-1">
                <span>{task?.name}</span> {/* Add null check for task.name */}
            </div>
            <span className="md:ml-auto md:mr-4">{task?.time}</span> {/* Add null check for task.time */}
            <div className="md:ml-auto md:mr-4 mb-2 md:mb-0">
                <button onClick={handleCheck}><FaCircleCheck className={check ? 'text-blue-700' : 'text-gray-400'} /></button>
            </div>
            <div className="bg-blue-100 p-2">
                <button onClick={handleEditClick}><MdEdit className='text-blue-700' /></button>
            </div>
            <div className="bg-red-100 p-2 rounded-r-md">
                <button onClick={() => task && onDelete(task.id)}><RiDeleteBinFill className='text-red-800' /></button> {/* Add null check for task.id */}
            </div>
        </div>
    );
};

export default Task;
