import React from 'react'

class Child1 extends React.Component {
    render(){
        console.log('第一个子元素 更新了')
        return <div>{this.props.name}</div>
    }
}

class Child2 extends React.Component {
    render(){
        console.log('第二个子元素 更新了')
        return <div>{this.props.age}</div>
    }
}

class Child3 extends React.PureComponent {
    render () {
        console.log('纯组件更新了')
        return <div>{this.props.sex}</div>
    }
}

class Parent extends React.Component {
    state={
        name:'yfh',
        age: 18,
        sex: 'nv'
    }
    handleClick=(e)=>{
        this.setState({
            name:'yfh1',
            age: 18,
            sex: 'nv'
        })
    }
    render(){
        return <React.Fragment>
            <button onClick={this.handleClick}>点击</button>
            <Child1 name={this.state.name}></Child1>
            <Child2 age={this.state.age}></Child2>
            <Child3 sex={this.state.sex}></Child3>
        </React.Fragment>
    }
}

export default Parent