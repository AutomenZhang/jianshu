import {reducer as headerReducer} from '../common/head/store'
import {reducer as homeReduce} from '../pages/home/store'
import {reducer as detailReduce} from '../pages/detail/store'
import {combineReducers} from 'redux-immutable'

const redux = combineReducers({
    header:headerReducer,
    home:homeReduce,
    detail:detailReduce
})

export default redux;