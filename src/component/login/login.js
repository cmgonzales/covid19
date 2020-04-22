import React, { Component } from 'react'
import  '../css/login.css'
export default class login extends Component {
    render() {
        return (
            <div class = 'login'>
                <img src = {require('../img/whiteRibbon.gif')} alt = 'White Ribbon'></img>
               <input placeholder = 'Username'></input>
               <input placeholder = 'Password'></input>
            </div>
        )
    }
}
