import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {



    render() {
        return (
                <div className="row">

                    <div className="col">
                        <div className="card card-size">
                            Electronics
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-size">
                            Cars
                        </div>
                    </div>

                  <div className="col">
                        <div className="card card-size">
                            Furniture
                        </div>                        
                    </div>
                </div>
                
        )
    }
}

export default Home
