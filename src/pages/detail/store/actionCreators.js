import axios from 'axios'
import * as constants  from  './constants'
import {fromJS} from 'immutable'
const getDetailList = (result) =>({
    type:constants.GET_DETAIL_DATA,
    title:fromJS(result.title),
    content:fromJS(result.content)
})
export const getDetailData = (id) =>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data;
            dispatch(getDetailList(result));
        }).catch((err)=>{
            console.log(err)
        })
    }
}