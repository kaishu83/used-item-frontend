import './Login.css';
import {Link} from 'react-router-dom'
import React from 'react'; 
import image from '../../img/leaf.jpg'


class Login extends React.Component{


    constructor(props){
        super(props)
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