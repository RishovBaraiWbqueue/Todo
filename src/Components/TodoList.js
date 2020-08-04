import React from 'react'
import Todo from './Todo'
import { Button } from '@material-ui/core'


const TodoList = ({ todos, toogleTodo, removeTodo, removeList }) => {


    return (
        <ul className='List'>
            <Button variant="outlined" color="secondary" size ="small" onClick = {removeList}>Remove List</Button>
            {todos.map(todo => (<Todo
                key={todo.id}
                {...todo}
                onClick={() => toogleTodo(todo.id)}
                remove={() => removeTodo(todo.id)} />))}
        </ul>
    )
}

export default TodoList

