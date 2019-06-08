import React from 'react'
import Dom from './dom'
import Hoc from './hoc'

// 纯组件 + ref转发 //注意异步加载的组件时不能够在初始化就获取ref的，类似高阶组件了一层
class Ref extends React.PureComponent {
    constructor(props){
        super(props)
        this.dom = React.createRef();
        this.hoc = React.createRef();
        console.log(this.dom,this.hoc)
    }
    render(){
        return <>
            <Dom ref={this.dom}>我是一个DOM元素</Dom>
            <Hoc ref={this.hoc}>我是一个高阶组件</Hoc>
        </>
    }
}

export default Ref