import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {
    deleteHome = () => {
        console.log('deleteHome')
        axios.delete(`http://localhost:8080/api/home/${this.props.houses.id}`).then(res => {
            this.props.handleDelete(res.data)
        })
    }

    render() {
        const {name,address,city,state,zipcode} = this.props.houses
        return (
            <div>
                <button onClick={this.deleteHome}>Delete</button>
                <p>{name}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{zipcode}</p>
            </div>
        )
    }
}
