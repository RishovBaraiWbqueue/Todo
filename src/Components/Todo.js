import React from 'react'
import { Button } from '@material-ui/core'

const Todo = ({ onClick, text, completed, remove }) => {
    return (
        <li className='Todo'>
            <div className='Item'>
                <p onClick={onClick}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none',
                        textDecorationColor: completed ? 'black' : 'none'
                    }}>
                    {text}
                </p>
                <Button variant="outlined" color="secondary" size="small" onClick={remove}>Remove</Button>
            </div>

        </li>
    )
}

export default Todo