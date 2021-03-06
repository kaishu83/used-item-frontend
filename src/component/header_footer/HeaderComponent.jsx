import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        
    }

    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to={'/users/' + this.props.id}>Home</Link></li>
                        <li><Link className="nav-link" to="/">Sign Out</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 