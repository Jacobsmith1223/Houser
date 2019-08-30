import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div className="colors">
                <img className="pic" src = 'https://raw.githubusercontent.com/Jacobsmith1223/simulation-2/master/assets/houser_logo.png' />
                <h1 className='houser'>Houser</h1>
            </div>
        )
    }
}
