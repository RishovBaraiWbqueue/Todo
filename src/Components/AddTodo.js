import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Redux'

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
                    <input type= 'text' ref = { el => (input = el)}></input>
                    <button type = 'submit'>Add Todo</button>
            </form>
            
        </div>
    )
}

export default connect()(AddTodo)
