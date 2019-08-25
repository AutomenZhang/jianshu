import {reducer as headerReducer} from '../common/head/store'
import {combineReducers} from 'redux'

const redux = combineReducers({
    header:headerReducer
})

export default redux;