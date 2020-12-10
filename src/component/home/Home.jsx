import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export class Home extends Component {



    render() {
        return (
                <div>
                <div className="row m-5">
                    <div className="col">
                        <div className="card card-size">
                            <Link to="/electronic">Electronics</Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-size">
                        <Link to="/cars">Cars</Link>
                        </div>
                    </div>

                  <div className="col">
                        <div className="card card-size">
                        <Link>Furniture</Link>
                        </div>                        
                </div>
                </div>

                <div className="row m-5">
               
                <div className="col">
                    <div className="card card-size">
                        <Link>Create a Post</Link>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-size">
                        <Link>View Account Information</Link>
                    </div>
                </div>

                </div>

                </div>
                
        )
    }
}

export default Home
