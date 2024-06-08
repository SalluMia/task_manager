import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch to dispatch actions
import { updateTask } from './actions/taskActions'; // Importing the updateTask action

const App = () => {
    const [editTask, setEditTask] = useState(null); // State to hold the task being edited

    // Accessing tasks from Redux store
    const tasks = useSelector(state => state.task.tasks);
    const dispatch = useDispatch(); // Initialize dispatch

    // Function to handle task editing
    const handleEdit = (task) => {
        console.log("Updating task:", task);
        setEditTask(task); // Set the task being edited
        console.log("Editing task:", task); // Log the edited task
    };

    // Function to handle task update
    const handleUpdateTask = (updatedTask) => {
        console.log("Updating task:", updatedTask); // Log the updated task
        dispatch(updateTask(updatedTask)); // Dispatch the updateTask action with the updated task details
        setEditTask(null); // Clear the editTask state
    };

    return (
        <div className="container mx-auto p-4 py-10 w-4/5 border-2 shadow-md mt-10 rounded-xl">
            <div className='w-3/5 mx-auto'>
                <h1 className="text-2xl font-bold mb-4">Task-list</h1>
                <p>Your scheduled tasks for today.</p>
                <p className='mt-6 font-semibold mb-5 text-gray-800'>Today's</p>
                <TaskList onEdit={handleEdit} onEditTask={handleUpdateTask} />
                <AddTask editTask={editTask} onEditTask={handleUpdateTask} />

            </div>
        </div>
    );
};

export default App;
