import React from 'react'
import { visibilityFilters } from '../Redux/Actions/ActionTypes'
import FilterLink from '../Containers/FilterLink'

const Footer = () => {
    return (
        <div className = 'Footer'>
            <span>Show All</span>
            <FilterLink filter = {visibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter = {visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter = {visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>            
        </div>
    )
}

export default Footer
