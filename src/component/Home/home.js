import React, { Component } from 'react'
import Login from './login'
import About from './about'
export default class Home extends Component {
    render() {
        return (
            <div>
            <Login/>
            <hr style = {{color: " blue", width: '100%', height: '50px'  }}/>
            <About/>
            </div>
        )
    }
}
