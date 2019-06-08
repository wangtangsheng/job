import React from 'react'

// 转发第二次
const Dom =  React.forwardRef((props, ref)=>{
    console.log(ref)
    return <div id="dom" ref={ref}>{props.children}</div>
})

function WithLogger (Component) {
    class Logger extends React.PureComponent {
        componentDidMount(){
            console.log('xxxxx')
            console.log(this.props)
        }
        render(){
            let {forwardRef, ...rest} = this.props;
            return <Component {...rest} ref={forwardRef}></Component>
        }
    }
    // 转发一次
    return React.forwardRef((props, ref)=>{
        return <Logger {...props} forwardRef={ref}></Logger>
    })
}

export default WithLogger(Dom)