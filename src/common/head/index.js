import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,SearchWarpper,NavSearch,Addition,Button,
    SearchInfo,SearchTitle,SearchSwitch,SearchInfoList,SearchInfoItem}  from "./style";


class Header extends Component{
    getInfoList(){
        const {focus,list} = this.props;
        if(focus){
            return (
                <SearchInfo>
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch>
                            换一批
                        </SearchSwitch>
                    </SearchTitle>
                    <SearchInfoList>
                        <SearchInfoItem>
                            教育
                        </SearchInfoItem>
                        {
                            list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const {focus,handleInputFocus,handleInputBlur} = this.props;
        return(
            <div>
                <HeaderWrapper>
                    <Logo></Logo>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWarpper>
                            <CSSTransition
                                in={focus}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focus?'focused':''}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focus?'focused iconfont':'iconfont'}
                            >&#xe62b;</i>
                            {this.getInfoList()}
                        </SearchWarpper>
                    </Nav>
                    <Addition>
                        <Button className='write'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        focus:state.getIn(['header','focus']),
        list:state.getIn(['header','list'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(){
            dispatch(actionCreator.getList());
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);