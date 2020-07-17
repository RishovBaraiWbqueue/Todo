import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO, REMOVE_LIST } from "../Actions/ActionTypes";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];
        case TOOGLE_TODO: return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);

        case REMOVE_TODO: return state.filter(todo => todo.id != action.id);
        
        case REMOVE_LIST: return []
        default: return state
    }
}

export default todoReducer