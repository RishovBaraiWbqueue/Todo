import React from 'react'

const Todo = ({ onClick, text, completed, remove }) => {
    return (
        <li className='Todo'>
                <div className = 'Item'>
                <p onClick={onClick}
                 style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? 'black' : 'none'
                }}>
                    {text}
                    </p>
                <button onClick={remove}>Remove</button>
                </div>
          
        </li>
    )
}

export default Todo