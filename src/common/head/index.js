import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,SearchWarpper,NavSearch,Addition,Button}  from "./style";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focus:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return (
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
                                in={this.state.focus}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={this.state.focus?'focused':''}
                                    onFocus={this.handleInputFocus}
                                    onBlur={this.handleInputBlur}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <i className={this.state.focus?'focused iconfont':'iconfont'}
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
    handleInputFocus (){
        this.setState({
            focus:true
        })
    }
    handleInputBlur (){
        this.setState({
            focus:false
        })
    }
}

export default Header;