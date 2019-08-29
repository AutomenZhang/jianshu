import axios from "axios";
import * as constants  from  './constants'
import {fromJS} from 'immutable'

const changHome = (result) =>({
    type:constants.ChANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});
const getArticleList = (result,page) =>({
    type:constants.GET_MORE_LIST,
    articleList:fromJS(result.articleList),
    page
})

export const getHomeInfo = () =>{
    return (dispatch) =>{
        axios.get('api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changHome(result));
        }).catch((err)=>{
            console.log(err);
        })
    }
};
export const getMoreList = (page) =>{
   return (dispatch)=>{
      axios.get('api/homeList.json?page='+page).then((res)=>{
          const result = res.data.data;
          dispatch(getArticleList(result,page));
      }).catch((err)=>{
          console.log(err);
      })
   }
};
export const toggleTop = (show)=>({
    type:constants.TOGGLE_TOP,
    show
})