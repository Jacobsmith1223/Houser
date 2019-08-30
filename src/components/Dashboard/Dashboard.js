import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'


export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }
    render() {

            const mappedHouse = this.state.houses.map((houses,index) => {
                return <House key={index} houses={houses} />
            })

        return (
            <div>
               <Link to='/wizard'><button>Add New Property</button></Link> 
                {mappedHouse}
            </div>
        )
    }
}
