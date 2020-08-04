import React from 'react'
import { Button } from '@material-ui/core'

const Link = ({ active, onClick, children }) => {

    return (
        <Button variant="contained"
                size='small'
            onClick={onClick}
            disabled={active}>
            {children}
        </Button>
    )
}

export default Link 
