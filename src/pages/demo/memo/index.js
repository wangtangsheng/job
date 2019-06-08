import React from 'react'
 

function F1 (props){
    console.log('F1改变了')
    return <div>{props.name}</div>
}
function F2 (props){
    console.log('F2改变了')
    return <div>{props.age}</div>
}
const F3 =React.memo( (props)=>{
    console.log('F3改变了')
    return <div>{props.sex}</div>
})

class Memo extends React.Component {
    state={
        name: 'yfh',
        age: 18,
        sex:'nv'
    }
    handleClick=()=>{
        this.setState({
            name: 'yfh1',
            age: 18,
            sex:'nv'
        })
    }
    render(){
        return <React.Fragment>
            <F1></F1>
            <F2></F2>
            <F3></F3>
            <button onClick={this.handleClick}>改变</button>
        </React.Fragment>
    }
}

export default Memo