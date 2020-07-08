import { connect } from 'react-redux'
import Link from '../Components/Link'
import { setVisibilityFilter } from '../Redux'


const mapStateToProps = (state, ownProps) =>{
    return {
        active : ownProps.filter === state.filter 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick : () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Link)