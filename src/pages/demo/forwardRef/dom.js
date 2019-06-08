import React from 'react'

export default  React.forwardRef((props, ref)=>{
    console.log(ref)
    return <div id="dom" ref={ref}>{props.children}</div>
})