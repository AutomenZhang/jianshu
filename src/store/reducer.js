import {reducer as headerReducer} from '../common/head/store'
import {reducer as homeReduce} from '../pages/home/store'
import {combineReducers} from 'redux-immutable'

const redux = combineReducers({
    header:headerReducer,
    home:homeReduce
})

export default redux;