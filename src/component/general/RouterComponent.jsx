import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from '../signup/SignUp'
import Login from '../login/Login'
import Home from '../home/Home'
import HeaderComponent from '../header_footer/HeaderComponent'
import CarTable from '../car/CarTable'
import Car from '../car/Car'
import ElectronicTable from '../electronic/ElectronicTable.jsx'
import Electronic from '../electronic/Electronic'







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
                <Route path="/electronic" component={ElectronicTable}/>
                <Route path="/electronic/:id" component={Electronic}/>

                </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent