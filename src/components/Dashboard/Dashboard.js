import React, { Component } from 'react'
import House from '../House/House'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }
    render() {
        return (
            <div>
                <House />
            </div>
        )
    }
}
