import { TOOGLE_TODO, ADD_TODO, SET_VISIBILITY_FILTER, REMOVE_TODO, REMOVE_LIST} from "./ActionTypes";

let nextToDoId = 0;

export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text      
    }
}

export const toogleTodo = id => {
    return {
        type: TOOGLE_TODO,
        id
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    }
}

export const removeList = () => {
    return {
        type: REMOVE_LIST
    }
}