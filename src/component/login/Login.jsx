import './Login.css';
import {Link} from 'react-router-dom'
import React from 'react'; 
import image from '../../img/leaf.jpg'
import UserDataService from '../service/UserDataService'
import { withRouter } from 'react-router';





class Login extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user:{}
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
    
           let userCrendentials = {
                userName: this.state.userName,
                password: this.state.password,
           }

           UserDataService.userAuthentication(userCrendentials)
        .then(
            response => {
                this.setState({
                    user: response.data,
                },
                () => {
                    console.log(this.state.user)

                    if(this.state.user.id == null){
                        alert("Inavalid Username or Password")
                    }
                    else{
                        this.props.history.push(`/users/${this.state.user.id}`)
                    }
         
                }
               
                )
            }
        )
           
        //    //Add .then and route them to homepage
        //    this.setState({
        //         user: this.retrieveUser(userCrendentials)
        //    }, () => console.log(this.state.user)) 

        //   const user = this.state.user; 

           


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

export default withRouter(Login);