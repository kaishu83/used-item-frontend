import './Login.css';
import {Link} from 'react-router-dom'
import React from 'react'; 
import image from '../../img/leaf.jpg'
import UserDataService from '../service/UserDataService'



class Login extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmition = this.handleSubmition.bind(this)
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    retrieveUser(userCrendentials) {
        UserDataService.userAuthentication(userCrendentials)
        .then(
            response => {
                this.setState({
                    user: response.data,
                })
            }
        )
    }

    handleSubmition(event){

        event.preventDefault();
    
           let userCrendentials = {
                userName: this.state.userName,
                password: this.state.password,
               
           }
           //Add .then and route them to homepage
           this.setState({
                user: this.retrieveUser(userCrendentials)
           }) 

          const user = this.state.user[0]; 

           if(user.id == 0){
               console.log("Invalid Input")
           }
           else{
               console.log("This was a valid password")
           }



       }
    


    render(){
        return(
            <div className="loginContainer card p-5">

                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmition}>

                    <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" name="userName" type="text" placeholder="username" onChange={this.handleChange}></input>
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
                    </div>

                        <input className="btn btn-primary m-3" type="submit" value="Login"/>
                    
                    </form>
                    <Link className="btn btn-success signUpBtn mx-auto" to="/signup">Sign Up</Link>
                </div>
                
        );
    }


}

export default Login;