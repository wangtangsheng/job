import React from 'react'
/**
 * @constructor 生命周期
 */
class Demo extends React.Component {
    constructor(props){
        super(props)
        this.dom = React.createRef();
        this.state={}
        console.log('构造函数被调用')
    } 
    static getDerivedStateFromProps(props,state){
        console.log(this)
        console.log(props, state)
        console.log('获取数据，getDerivedStateFromProps')
        return {
            name: props.name
        }
    }
    static defaultProps ={
        name: 1,
        age: 10
    }
    componentDidMount(){
        console.log('组件挂在完成')
    }
    getSnapshotBeforeUpdate(preProps, preState){
        console.log(this)
        console.log(preProps, preState);
        console.log('更新之前获取数据')

        return this.dom.current.clientHeight;
    }
    shouldComponentUpdate(props, state){
        console.log('是否应该更新')
        return true
    }
    componentDidUpdate(preProps, preState,  snapShot){
        console.log(snapShot)
        console.log('更新完成')
    }
    componentWillUnmount(){
        console.log('组件即将卸载')
    }
    render(){
        console.log('执行render')
        return <div style={{height: this.props.age + 'px'}} ref={this.dom}>{this.props.age}+{this.state.name}</div>
    }
}

export default Demo