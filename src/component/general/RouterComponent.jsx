import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import Home from '../home/Home'
import HeaderComponent from '../header_footer/HeaderComponent'
import CarTable from '../car/CarTable'
import Car from '../car/Car'






class RouterComponent extends Component{
    render(){
        return(
            <div>
                <Router>
                <HeaderComponent />
                    <Switch>
                <Route exact path="/"><Login/></Route>
                <Route path="/signup" component={SignUp}/>
                <Route path="/home" component={Home}/>
                <Route path="/cars" component={CarTable}/>
                <Route path="/car/:id" component={Car}/>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent