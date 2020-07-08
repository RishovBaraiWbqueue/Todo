import { connect } from 'react-redux'
import { visibilityFilters } from '../Redux/Actions/ActionTypes'
import { toogleTodo } from '../Redux'
import TodoList from '../Components/TodoList'
 
const Visibletodo = (todos, filter) => {
    switch(filter) {
        case visibilityFilters.SHOW_ALL : return todos;

        case visibilityFilters.SHOW_ACTIVE : return todos.filter(filterTodo => !filterTodo.completed );
        
        case visibilityFilters.SHOW_COMPLETED : return todos.filter(filterTodo => filterTodo.completed );
        
        default : throw new Error('unknown filter:' + filter) 
    }
}

const mapStateToProps = state => {
    return {
        todos : Visibletodo(state.todo, state.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toogleTodo : id => dispatch(toogleTodo(id)) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)