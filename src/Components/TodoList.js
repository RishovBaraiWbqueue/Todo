import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, toogleTodo, removeTodo, removeList }) => {


    return (
        <ul className='List'>
            <button onClick = {removeList}>Remove List</button>
            {todos.map(todo => (<Todo
                key={todo.id}
                {...todo}
                onClick={() => toogleTodo(todo.id)}
                remove={() => removeTodo(todo.id)} />))}
        </ul>
    )
}

export default TodoList

