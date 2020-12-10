import './Login.css';
import React from 'react'; 


class Login extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="loginContainer card p-5">

                <h1>Login</h1>

                <form action="">
                    <label>
                        <input className="m-3" type="text" placeholder="username"></input>
                    </label>
                    <div className="m-3">
                    <label>
                        <input type="password" placeholder="password"></input>
                    </label>
                    </div>
                    <input className="btn btn-primary m-3" type="submit" value="Login"/>
                </form>
                <button className="btn btn-success signUpBtn mx-auto">Sign Up</button>

            </div>
        );
    }


}

export default Login;