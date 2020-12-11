import React from 'react'
// import './SignUp.css'
import UserDataService from '../service/UserDataService'
import ElectronicDataService from '../service/ElectronicDataService'
import HeaderComponent from '../header_footer/HeaderComponent'
import {Link} from 'react-router-dom'
// import { withRouter } from 'react-router';




class ElectronicPost extends React.Component {
   
   
   constructor(props){
       super(props)
       this.state = {
           itemCondition: 'NEW',
           manfacture: '',
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
       let electronic = {
        itemCondition: this.state.itemCondition,
        manufacture: this.state.manufacture,
        name: this.state.name,
        year: this.state.year,
        price: this.state.price,
        description: this.state.description,
        email: this.state.email
       }
       //Add .then and route them to homepage
       ElectronicDataService.createElectronicPost(electronic)
       this.props.history.push({
        pathname: `/electronic`,
        userId: this.props.location.userId
    })

   }

   
    render(){ 
        
        return (
             
            <div>

            <HeaderComponent id={this.props.location.userId}/>


            <div className="signUpContainer card p-5 mt-3">

            <h1>Electronic Post</h1>

            <form onSubmit={this.handleSubmition} >

                <div className="form-group">
                <label>Item Name</label>
                <input className="form-control" name="name" type="text" placeholder="Name" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Manufacturer Name</label>
                <input className="form-control" name="manufacture" type="text" placeholder="Manufacturer Name" onChange={this.handleChange}></input>
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

export default ElectronicPost;

