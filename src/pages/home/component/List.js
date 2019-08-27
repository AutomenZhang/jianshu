import React,{Component} from 'react';
import {ListItem,ListInfo}from '../style'
import {connect} from 'react-redux'


class List extends Component{
    render(){
        const {list} = this.props;
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
            </div>
        )
    }
}
const mapState =  (state)=>({
    list:state.getIn(['home','articleList'])
})
export  default connect(mapState,null)(List);