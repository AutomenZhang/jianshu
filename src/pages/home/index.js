import React,{Component} from 'react';
import { connect }from 'react-redux'
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import { actionCreators } from './store'

class Home extends Component{
    render(){
        return(
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            alt='banner'
                            className='banner-img'
                            src='https://upload.jianshu.io/admin_banners/web_images/4709/b8781402df958bbf067a1b876b6efb13619b695d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}
const mapDisPatch = (dispatch) =>{
   return{
       changeHomeData(){
           const action = actionCreators.getHomeInfo();
           dispatch(action);
       }
   }
};
export  default connect(null,mapDisPatch)(Home);