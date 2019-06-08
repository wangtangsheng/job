import React from 'react'

const demo = {
    name: 'yf',
    age: '18',
    sex: 'nv'
}
const { Provider, Consumer}  = React.createContext();

class Child extends React.Component {

    render () {
        console.log(this.props,'?????')
        return <Consumer>
        {(store)=>{
            console.log(store,'+++++++++++++')
            return <p>{store.name}+ 123123</p>
        }}
    </Consumer>
    }
    
}

class PP1 extends React.Component {
    render() {
        return <Provider value={demo}>
            <Child></Child>
        </Provider>
    }
}
export default PP1