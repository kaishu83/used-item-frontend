import React from 'react'
// import './SignUp.css'
import UserDataService from '../service/UserDataService'
import FurnitureDataService from "../service/FurnitureDataService";
import HeaderComponent from '../header_footer/HeaderComponent'

import {Link} from 'react-router-dom'
// import { withRouter } from 'react-router';




class FurniturePost extends React.Component {
   
   
   constructor(props){
       super(props)
       this.state = {
           itemCondition: 'NEW',
           weight: '',
           name: '',
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
       let furniture = {
        itemCondition: this.state.itemCondition,
        weight: this.state.weight,
        name: this.state.name,
        year: this.state.year,
        price: this.state.price,
        description: this.state.description,
        email: this.state.email
       }
       //Add .then and route them to homepage
       FurnitureDataService.createFurniturePost(furniture)
       this.props.history.push({
        pathname: `/furnitures`,
        userId: this.props.location.userId
    })

   }

   
    render(){ 
        
        return (
             
            <div>

            <HeaderComponent id={this.props.location.userId}/>


            <div className="signUpContainer card p-5 mt-3">

            <h1>Furniture Post</h1>

            <form onSubmit={this.handleSubmition} >

                <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name" type="text" placeholder="Name" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Estimated Weight (lbs)</label>
                <input className="form-control" name="weight" type="number" placeholder="Weight" onChange={this.handleChange}></input>
                </div>  

                <div className="form-group">
                <label>Year</label>
                <input className="form-control" name="year" type="year" placeholder="Year" onChange={this.handleChange}></input>
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
                    <option value="NEW" selected="selected">New</option>
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
        </div>
        )
}



}

export default FurniturePost;

