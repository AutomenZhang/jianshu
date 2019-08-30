import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent{
    render(){
        const {imgList} = this.props;
        return(
            <div>
                <RecommendWrapper>
                    {
                       imgList.map((item)=>{
                           return(
                               <RecommendItem
                                   key={item.get('id')}
                                   imgUrl={item.get('imgUrl')}>
                               </RecommendItem>
                           )
                       })
                    }
                </RecommendWrapper>
            </div>
        )
    }
}
const mapState = (state)=>({
    imgList:state.getIn(['home','recommendList'])
})
export  default connect(mapState,null)(Recommend);