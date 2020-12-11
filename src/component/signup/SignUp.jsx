import React from 'react'
import './SignUp.css'
import UserDataService from '../service/UserDataService'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';




class SignUp extends React.Component {
   
   
   constructor(props){
       super(props)
       this.state = {
           userName: '',
           password: '',
           firstName: '',
           lastName: '',
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
       let user = {
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
       }
       //Add .then and route them to homepage
       UserDataService.createUser(user)
       this.props.history.push('/')

   }

   
    render(){ 
        
        return (
            <div className="signUpContainer card m-5 p-5">

            <h1>Sign Up</h1>

            <form onSubmit={this.handleSubmition}>

                <div className="form-group">
                <label>Username</label>
                <input className="form-control" name="userName" type="text" placeholder="Username" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Password</label>
                <input className="form-control" name="password" type="password" placeholder="Password" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>First Name</label>
                <input className="form-control" name="firstName" type="text" placeholder="First Name" onChange={this.handleChange}></input>
                </div>   

                <div className="form-group">
                <label>Last Name</label>
                <input className="form-control" name="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}></input>
                </div>

                <div className="form-group">
                <label>Email</label>
                <input className="form-control" name="email" type="text" placeholder="Email" onChange={this.handleChange}></input>
                </div>
                <br/>
                <input className="btn btn-primary m-3" type="submit" value="Sign Up"/>
            </form>

            <Link to='/'>Already have an account? Login Here.</Link>

        </div>
        )
}



}

export default withRouter(SignUp);

