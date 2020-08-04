import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Redux'
import { Button,TextField } from '@material-ui/core'

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div className = 'AddTodo'>
            <form 
                onSubmit = {
                    e => {
                        e.preventDefault()

                        if(!input.value.trim()){
                            return
                        }
                        dispatch(addTodo(input.value))
                        input.value = ''
                    }
                }>
                     <input id="outlined-basic" label="Outlined" variant="outlined"  size="small" ref = { el => (input = el)} />
                    
                    <Button   variant="contained" color="primary" type = 'submit'>Add Todo</Button>
            </form>
            
        </div>
    )
}

export default connect()(AddTodo)
