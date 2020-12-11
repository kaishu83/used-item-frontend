import React, { Component } from 'react'
import UserDataService from '../service/UserDataService'
import HeaderComponent from '../header_footer/HeaderComponent'



export class AccountDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            user: []
        }

        this.refereshUser = this.refereshUser.bind(this)

    }



    componentDidMount() {
        this.refereshUser();
    }

    refereshUser() {
        UserDataService.findUserById(this.props.match.params.id)
        .then(
            response => {
                this.setState({
                    user: response.data,
                })
            }
        )
    }


    deleteOnClick(){
        UserDataService.deleteUserById(this.props.match.params.id)
        .then(this.props.history.push('/'))
    }


    render() {
        return (

            <div>
            <HeaderComponent id={this.props.match.params.id}/>
            
            <div className="card w-75 mx-auto mt-5 p-5">
                 <div className="" style={{backgroundColor: "white"}}>
        <h3 style={{textAlign: "center"}}>{this.state.user.firstName} {this.state.user.lastName}</h3>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <label className="title">First Name</label>
                            <input value={this.state.user.firstName} className="form-control" type="text" name="jobTitle" onChange={this.handleChange} disabled="true"></input>
                        </div>
                        <div>
                            <label className="title">Last Name</label>
                            <input value={this.state.user.lastName} className="form-control" type="text" name="jobTitle" onChange={this.handleChange} disabled="true"></input>
                        </div>
                        <div>
                            <label className="title">Username</label>
                            <input value={this.state.user.userName} className="form-control" type="text" name="jobTitle" onChange={this.handleChange} disabled="true"></input>
                        </div>
                        <div>
                            <label className="title">Email</label>
                            <input value={this.state.user.email} className="form-control" type="text" name="jobTitle" onChange={this.handleChange} disabled="true"></input>
                         </div>

                         <button onClick={() => this.deleteOnClick()} className="btn btn-danger m-3">Delete Account</button>
                         
                         </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AccountDetails
