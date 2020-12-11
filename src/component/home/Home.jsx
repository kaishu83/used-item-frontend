import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import UserDataService from '../service/UserDataService'
import HeaderComponent from '../header_footer/HeaderComponent'




export class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        } 
        this.getUserDetails = this.getUserDetails.bind(this)
    }

    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails() {
        UserDataService.findUserById(this.state.id)
        .then(
            response => {
                this.setState({
                    user: response.data,
                })
            }
        )
    }



    render() {
        return (
                <div>

                    <HeaderComponent id={this.state.user.id}/>

                 <h2>Welcome {this.state.user.firstName}</h2>

                <div className="row m-5">
                    <div className="col">
                        <div className="card card-size">
                            <Link to={{
                              pathname: "/electronic",
                              userId: this.state.user.id
                            }}
                            >Electronics</Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-size">
                        <Link to={{
                              pathname: "/cars",
                              userId: this.state.user.id
                            }}
                            >Cars</Link>
                        </div>
                    </div>

                  <div className="col">
                        <div className="card card-size">
                        <Link to={{
                              pathname: "/furnitures",
                              userId: this.state.user.id
                            }}
                            >Furniture</Link>
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
