import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import Home from '../home/Home'

class RouterComponent extends Component{
    render(){
        return(
            <div>
                <Router>
                <Route exact path="/"><Login/></Route>
                <Route path="/signup" component={SignUp}/>
                <Route path="/home" component={Home}/>
                </Router>
            </div>
        )
    }
}

export default RouterComponent