import React, { Component } from 'react'

export class Car extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            itemCondition: this.props.match.params.itemCondition,
            make: this.props.match.params.make,
            model: this.props.match.params.model,
            mileage: this.props.match.params.mileage,
            year: this.props.match.params.year,
            price: this.props.match.params.price,
            description: this.props.match.params.description,
            email: this.props.match.params.email
        }
    }


    render() {
        return (
            <div>
                 <div className="card" style={{backgroundColor: "white"}}>
        <h3 style={{textAlign: "center"}}>{this.state.make} {this.state.model}</h3>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <lable>Condition</lable>
                            <p className="form-control">{this.state.itemCondition} Hello</p>
                        </div>

                        <div>
                            <lable>Mileage</lable>
                            <p className="form-control">{this.state.mileage}</p>                        </div>
                        <div>
                            <lable>Year</lable>
                            <p className="form-control">{this.state.year}</p>                        </div>
                        <div>
                            <lable>Price</lable>
                            <p className="form-control">{this.state.price}</p>                        </div>
                        <div>
                            <lable>Contact</lable>
                            <p className="form-control">{this.state.email}</p>                        </div>
                         </div>
                </div>
            </div>
        )
    }
}

export default Car
