import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,SearchWarpper,NavSearch,Addition,Button}  from "./style";

const Header = (props) =>{
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
                            in={props.focus}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={props.focus?'focused':''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={props.focus?'focused iconfont':'iconfont'}
                        >&#xe62b;</i>
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
const mapStateToProps = (state) =>{
    return{
        focus:state.header.get('focus')
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(){
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);