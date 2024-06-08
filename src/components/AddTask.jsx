import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../actions/taskActions';
import { v4 as uuidv4 } from 'uuid';
import { MdAccessTime } from 'react-icons/md';
import TimeModal from './TimeModal';

const AddTask = ({ editTask, onEditTask }) => {
    const [taskName, setTaskName] = useState('');
    const [time, setTime] = useState('');
    const [color, setColor] = useState('#000000');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [taskId, setTaskId] = useState(null);
    const dispatch = useDispatch();
   
    console.log(editTask)
    console.log(onEditTask)
    useEffect(() => {
        if (editTask) {
            setTaskName(editTask.name || '');
            setTime(editTask.time || '');
            setColor(editTask.color || '#000000');
            setIsEditMode(true);
            setTaskId(editTask.id || null);
            console.log("Received edited task in AddTask:", editTask); // Log the received edited task
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && time) {
            if (isEditMode) {
                dispatch(updateTask({ id: taskId, name: taskName, time, color }));
                onEditTask({ id: taskId, name: taskName, time, color }); // Pass the updated task to the parent component
            } else {
                dispatch(addTask({ id: uuidv4(), name: taskName, time, color }));
            }
            resetForm();
        }
    };

    const resetForm = () => {
        setTaskName('');
        setTime('');
        setColor('#000000');
        setIsEditMode(false);
        setTaskId(null);
    };

    const handleTimeClick = () => {
        setIsModalOpen(true);
    };

    const handleSaveTime = (selectedTime) => {
        setTime(selectedTime);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col lg:flex-row gap-2 justify-between mb-2 bg-white border rounded py-2 px-5">
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-10 border-none"
                />
                <div className="w-full lg:w-3/5 border-b flex flex-col">
                    <label htmlFor="taskName" className="text-sm font-semibold text-gray-600">About Task</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="What's your next task?"
                        className="py-1 focus:border-none focus:outline-none"
                    />
                </div>
                <div className="border-b flex flex-col">
                    <div className='flex flex-end justify-end'>
                    <label htmlFor="time" className="text-sm font-semibold text-gray-600">Time</label>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className="flex items-center pr-3 text-blue-500">
                            <MdAccessTime />
                        </span>
                        <input
                            type="text"
                            id="time"
                            value={time}
                            onClick={handleTimeClick}
                            readOnly
                            placeholder="00:00"
                            className="p-2 pr-8 right-0 cursor-pointer focus:border-none focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="bg-blue-700 text-white p-2 rounded sm:px-10 md:px-20">
                {isEditMode ? 'Update Task' : '+ Add New Task'}
            </button>
            <TimeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveTime}
            />
        </form>
    );
};

export default AddTask;
