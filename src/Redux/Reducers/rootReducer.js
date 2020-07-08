import  { combineReducers }  from 'redux'
import TodoReducer from './TodoReducer'
import FilterReducer from './FilterReducer'

const rootReducer = combineReducers( {
    todo: TodoReducer,
    filter: FilterReducer
})

export default rootReducer