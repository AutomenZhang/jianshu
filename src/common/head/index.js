import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,SearchWarpper,NavSearch,Addition,Button,
    SearchInfo,SearchTitle,SearchSwitch,SearchInfoList,SearchInfoItem}  from "./style";


class Header extends Component{
    getInfoList(){
        const {focus,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const pageList=[];
        const newList = list.toJS();
        if(newList.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focus || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchSwitch>
                    </SearchTitle>
                    <SearchInfoList>
                        {pageList}
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
                            <i className={focus?'focused iconfont zoom':'iconfont zoom'}
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
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
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
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngel = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngel){
                originAngel = parseInt(originAngel,10);
            }else{
                originAngel = 0;
            }
            spin.style.transform ='rotate('+(originAngel+360)+'deg)';
            if(page<totalPage-1){
                dispatch(actionCreator.changePage(page+1));
            }else{
                dispatch(actionCreator.changePage(0));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);