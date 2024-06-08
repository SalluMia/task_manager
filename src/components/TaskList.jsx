import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../actions/taskActions';
import Task from './Task';

const TaskList = ({ onEditTask }) => { // Pass onEditTask as a prop
    const tasks = useSelector(state => state.task.tasks);
    const dispatch = useDispatch();

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEdit = (task) => {
        dispatch(updateTask(task));
    };

    return (
        <div className="mb-10">
            {tasks && tasks.map(task => (
               <Task key={task.id} task={task} onDelete={handleDelete} onEdit={handleEdit} onEditTask={onEditTask} />

            ))}
        </div>
    );
};

export default TaskList;
