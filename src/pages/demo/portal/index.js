import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
class Portal extends PureComponent {
    render(){
        return ReactDom.createPortal(<div>1112</div>,document.querySelector('#name'))
    }
}

export default Portal