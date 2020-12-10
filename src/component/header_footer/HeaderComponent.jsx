import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/home">Home</Link></li>
                        <li><Link className="nav-link" to="/">Cars</Link></li>
                        <li><Link className="nav-link" to="/">Furniture</Link></li>
                        <li><Link className="nav-link" to="/">Electronics</Link></li>
                        <li><Link className="nav-link" to="/">Sign Out</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 