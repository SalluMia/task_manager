// taskReducer.js
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/taskActions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTasksAdd = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasksAdd));
            return {
                ...state,
                tasks: newTasksAdd,
            };
        case DELETE_TASK:
            const filteredTasksDelete = state.tasks.filter(task => task && task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasksDelete));
            return {
                ...state,
                tasks: filteredTasksDelete,
            };
        case UPDATE_TASK:
            const updatedTasksUpdate = state.tasks.map(task => {
                if (task && task.id === action.payload.id) {
                    return action.payload;
                } else {
                    return task;
                }
            });
            localStorage.setItem('tasks', JSON.stringify(updatedTasksUpdate));
            return {
                ...state,
                tasks: updatedTasksUpdate,
            };
        default:
            return state;
    }
};

export default taskReducer;
