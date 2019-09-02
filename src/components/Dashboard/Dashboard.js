import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

        componentDidMount(){
            axios.get('http://localhost:8080/api/house').then((response) => {
                this.setState({houses: response.data})
            }).catch((error) => {console.log(error)})
        }
        handleDelete = (data) => {
            console.log(data)
            this.setState({
                houses:data
            })
        }


    render() {

            let mappedHouses = this.state.houses.map((houses,index) => {
                return <House key={index} houses={houses} handleDelete = {this.handleDelete}/>
            })

        return (
            <div>
               <Link to='/wizard'><button>Add New Property</button></Link> 
                {mappedHouses}
            </div>
        )
    }
}
