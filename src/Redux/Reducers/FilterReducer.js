import { SET_VISIBILITY_FILTER } from '../Actions/ActionTypes'
import { visibilityFilters } from  '../Actions/ActionTypes'



const filterReducer = (state = visibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER : return action.filter

        default : return state
    }
}

export default filterReducer