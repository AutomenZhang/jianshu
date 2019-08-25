import {reducer as headerReducer} from '../common/head/store'
import {combineReducers} from 'redux-immutable'

const redux = combineReducers({
    header:headerReducer
})

export default redux;