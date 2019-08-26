import {fromJS} from 'immutable'

const defaultState= fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'https://upload-images.jianshu.io/upload_images/13638982-4c7adfc7bc2003d6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://upload-images.jianshu.io/upload_images/1521845-1b912a22cb30ca22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:3,
        title:'军工国防',
        imgUrl:'http://img1.imgtn.bdimg.com/it/u=2493007760,68479721&fm=26&gp=0.jpg'
    }]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        default:
            return  state;
    }
}