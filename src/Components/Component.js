import React from 'react' 
import AddTodo from './AddTodo'
import Footer from './Footer'
import Visibletodo from '../Containers/Visibletodo'

const Component  = () => (
    <div className = 'rootComponent'>
        <AddTodo/>
        <Visibletodo/>
        <Footer />
    </div>
)

export default Component