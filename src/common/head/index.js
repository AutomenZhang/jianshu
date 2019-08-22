import React,{Component} from 'react'
import {HeaderWrapper,Logo}  from "./style";

class Header extends Component{
    render() {
        return (
            <div>
                <HeaderWrapper></HeaderWrapper>
                <Logo></Logo>
            </div>
        );
    }
}

export default Header;