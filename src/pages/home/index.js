import React,{Component} from 'react';
import { connect }from 'react-redux'
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import { actionCreators } from './store'

class Home extends Component{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
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
                    {this.props.showTop? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.toggleScroll);
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.toggleScroll);
    }
}
const mapState = (state) =>({
    showTop:state.getIn(['home','showTop'])
});
const mapDisPatch = (dispatch) =>{
   return{
       changeHomeData(){
           dispatch(actionCreators.getHomeInfo());
       },
       toggleScroll(){
           if(document.documentElement.scrollTop>200){
               dispatch(actionCreators.toggleTop(true))
           }else{
               dispatch(actionCreators.toggleTop(false))
           }
       }
   }
};
export  default connect(mapState,mapDisPatch)(Home);