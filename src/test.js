import React,{Fragment} from 'react'

const Parent = ({children})=>{
    return <Fragment>
        children.map(child=>child.customRender());
    </Fragment>
}

const Parent = ({children})=>{
    children.forEach(item=>{
        item.customRender = ()=>{
            item.customRender();
            console.log('log the information');
        }
    });
    return <Fragment>
        children.map(child=>child.customRender());
    </Fragment>
}