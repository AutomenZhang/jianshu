import axios from "axios";
import * as constants  from  './constants'

const changHome = (result) =>({
    type:constants.ChANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});
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
export const getMoreList = () =>{
   return (dispatch)=>{
       console.log('click');
   }
}