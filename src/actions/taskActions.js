// src/actions/taskActions.js

// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK'; // New action type for updating tasks

// Action creators
export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        payload: taskId,
    };
};

export const updateTask = (taskId, updatedTask) => { // Modified to accept task ID and updated task data
    return {
        type: UPDATE_TASK,
        payload: { taskId, updatedTask }, // Pass both task ID and updated task data
    };
};