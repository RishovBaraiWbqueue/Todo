import React from 'react'

const Todo = ({ onClick, text, completed }) => {
    return (
        <li className='Todo'
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
           <p>{text}</p> 
        </li>
    )
}

export default Todo