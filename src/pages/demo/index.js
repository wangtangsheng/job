import React from 'react'
import { connect } from 'dva';
import css from './index.less'
import App from './circle'
import Forward from './forwardRef'
import Portal from './portal'
import Pure from './pureComponent'
import PureFn from './memo'
import Context from './context'
import Hooks from './hook'

console.log(App)

class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            age: 18,
            name: 'yfh'
        }
    }
   
    changeAge=()=>{
        this.setState((state)=>{
            console.log(state)
            return {
                age: 108
            }
        })
    }
    render () {
        console.log(this.props)
        return <div>
            <App ></App>
            <button onClick={this.changeAge}>改变年龄</button>

            <hr/>
            <Forward></Forward>
            <hr/>
            <Portal></Portal>
            <hr/>
            xxx
            <Pure></Pure>
            <hr/>
            函数
            <PureFn></PureFn>
            <hr/>
            上下文
            <Context></Context>
            <hr/>
            hook    
            <Hooks></Hooks>
        </div>
    }
}

export default connect((state)=>{
    return {
        ...state
    }
})(Demo)