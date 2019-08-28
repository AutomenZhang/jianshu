import React,{Component} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from "../store";


class List extends Component{
    render(){
        const {list,getMoreList} = this.props;
        return(
            <div>
                {
                    list.map((item) =>{
                      return(
                          <ListItem key={item.get('id')}>
                              <img
                                  alt="图片"
                                  className='list-pic'
                                  src={item.get('imgUrl')}
                              />
                              <ListInfo>
                                  <h3 className='title'>{item.get('title')}</h3>
                                  <p className='des'>{item.get('des')}</p>
                              </ListInfo>
                          </ListItem>
                      )
                    })
                }
                <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
            </div>
        )
    }
}
const mapState =  (state)=>({
    list:state.getIn(['home','articleList'])
})
const mapDisPatch = (dispatch) =>({
    getMoreList() {
        const action = actionCreators.getMoreList();
        dispatch(action)
    }
})

export  default connect(mapState,mapDisPatch)(List);