import React from 'react'
// import './SignUp.css'
import UserDataService from '../service/UserDataService'
import CarDataService from '../service/CarDataService'


import {Link} from 'react-router-dom'
// import { withRouter } from 'react-router';




class CarPost extends React.Component {
   
   
   constructor(props){
       super(props)
       this.state = {
           itemCondition: '',
           make: '',
           model: '',
           mileage: '',
           year:'',
           price:'',
           description:'',
           email: ''
       }

       this.handleChange = this.handleChange.bind(this)
       this.handleSubmition = this.handleSubmition.bind(this)
       
   }

   handleChange(event){
       this.setState({
           [event.target.name]: event.target.value
       })
   }

   handleSubmition(event){

    event.preventDefault();
       let car = {
        itemCondition: this.state.itemCondition,
        make: this.state.make,
        model: this.state.model,
        mileage: this.state.mileage,
        year: this.state.year,
        price: this.state.price,
        description: this.state.description,
        email: this.state.email
       }
       //Add .then and route them to homepage
       CarDataService.createCarPost(car)
       this.props.history.push('/cars')

   }

   
    render(){ 
        
        return (
            <div className="signUpContainer card p-5">

            <h1>Car Post</h1>

            <form onSubmit={this.handleSubmition}>

                <div className="form-group">
                <label>Make</label>
                <input className="form-control" name="make" type="text" placeholder="Make" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Model</label>
                <input className="form-control" name="model" type="text" placeholder="Model" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Mileage</label>
                <input className="form-control" name="mileage" type="number" placeholder="Mileage" onChange={this.handleChange}></input>
                </div>   

                <div className="form-group">
                <label>Year</label>
                <input className="form-control" name="year" type="text" placeholder="Year" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Price</label>
                <input className="form-control" name="price" type="number" step=".01" placeholder="Price" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" name="description" type="text" placeholder="Enter Description" onChange={this.handleChange}></textarea>
                </div>

                <div className="form-group">
                <label>Condition</label>
                <select className="form-control" name="itemCondition" type="text" onChange={this.handleChange}>
                    <option value="NEW">New</option>
                    <option value="LIKE_NEW">Like New</option>
                    <option value="GOOD">Good</option>
                    <option value="FAIR">Fair</option>
                </select>
                </div>

                <div className="form-group">
                <label>Email for Contact</label>
                <input className="form-control" name="email" type="text" placeholder="Email" onChange={this.handleChange}></input>
                </div>

                <br/>
                <input className="btn btn-primary m-3" type="submit" value="Post"/>
            </form>

        </div>
        )
}



}

export default CarPost;

