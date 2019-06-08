import React, { PureComponent, useState } from 'react'


class Hook extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            age: 1
        }
    }

    handleClick = () => {
        this.setState((state) => {
            console.log(state)
            return {
                age: state.age+1
            }
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>增加</button>
                <p>{this.state.age}</p>
            </>
        )
    }
}


function HookFn(props) {
    const [age, setAge] = useState(1)

    return <>
        <button onClick={()=>{setAge(age+1)}}>增加数字</button>
        <p>{age}</p>
    </>
}

export default class Hooks extends PureComponent {
    render() {
        return <>
            <p>测试</p>
            <HookFn></HookFn>
            <Hook></Hook>
        </>
    }
}