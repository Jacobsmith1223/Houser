import React, { Component } from 'react'
import './Wizard.css'
import {Link,} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super()

        this.state ={
            name: '',
            address: '',
            city: '',
            state:'',
            zipcode:0
        }
}
addHome = () => {
    

    const{name,address,city,state,zipcode} = this.state;
    const body = {
        name,
        address,
        city,
        state,
        zipcode
    }
    axios.post('http://localhost:8080/api/home', body).then(res => {
        this.setState({houses:res.data,
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        })
        
    }).catch((error) => console.log(error))
    
}



    render() {
        return (
            <div className='wiz'>
                <div className='wizlite'>
                <div className='wizz'>
                <h1 className="title">Add New Listing</h1>
               <Link to='/'><button className='cancel'>Cancel</button></Link>
                </div>


                <div className = 'flexwizzy'>
                <label className='proppy'>Property Name</label>
                <input className='proppy-input' type = "text" value = {this.state.name} onChange ={(event) => {this.setState({name:event.target.value})}} />
                <label className='address'>Address</label>
                <input className='address-input' type = "text" value = {this.state.address} onChange ={(event) => {this.setState({address:event.target.value})}}/>
                </div>
                <div className='bottom-wizzy'>
                  <div className='city'>
                <label>City</label>
                <input className='city-input' type = "text" value = {this.state.city} onChange ={(event) => {this.setState({city:event.target.value})}}/>
                </div>  
                <div className='state'>
                <label>State</label>
                <input className='state-input' type = "text" value = {this.state.state} onChange ={(event) => {this.setState({state:event.target.value})}}/>
                </div>
                <div className='zippy'>
                <label>Zip</label>
                <input className='zip-input' type = "number" value = {this.state.zipcode} onChange ={(event) => {this.setState({zipcode:event.target.value})}}/>
                </div>
                </div>
                <div className='compbutt'>
               <Link to= '/'><button  className='complete' onClick={this.addHome}>Complete</button></Link>
                </div>
                
                </div>
            </div>
        )
    }
}
