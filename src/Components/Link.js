import React from 'react'

const Link = ({ active, onClick, children }) => {

    return (
        <button
            className='Link'
            onClick={onClick}
            disabled={active}>
            {children}
        </button>
    )
}

export default Link 
