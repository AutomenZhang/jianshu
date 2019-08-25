import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState= fromJS({
    focus:false,
    list:[]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focus',true);
        case constants.SEARCH_BLUR:
            return state.set('focus',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return  state;
    }
}