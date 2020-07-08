import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toogleTodo }) => (
    <ul className = 'List'>
        {todos.map(todo => (<Todo key={todo.id} {...todo} onClick = {() => toogleTodo(todo.id)}/>))}
    </ul>
)

export default TodoList

