import React,{Component} from 'react';
import {  DetailWrapper,Header,Content} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component{
    render() {
        const {title, content} = this.props
        return (
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html: content}}/>
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.getDetailInfo(this.props.match.params.id);
    }
}
const mapState= (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) =>{
    return{
        getDetailInfo(id){
            dispatch(actionCreators.getDetailData(id))
        }
    }
}
export  default connect(mapState,mapDispatch)(Detail);