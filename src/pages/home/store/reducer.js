import {fromJS} from 'immutable'
import * as constants  from  './constants'

const defaultState= fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showTop:false
});
const changeHomeData = (state,action)=>{
    return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommendList':fromJS(action.recommendList)
    })
};
const getList = (state,action) =>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.articleList),
        'articlePage':action.page+1
    });
}
export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.ChANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.GET_MORE_LIST:
            return getList(state,action);
        case constants.TOGGLE_TOP:
            return state.set('showTop',action.show);
        default:
            return  state;
    }
}