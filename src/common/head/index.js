import React,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button}  from "./style";

class Header extends Component{
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo></Logo>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavSearch></NavSearch>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>Aa</NavItem>
                    </Nav>
                    <Addition>
                        <Button>注册</Button>
                        <Button>写文章</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}

export default Header;