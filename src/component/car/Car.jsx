import React, { Component } from 'react'
import CarDataService from '../service/CarDataService'
import './Car.css'
import HeaderComponent from '../header_footer/HeaderComponent'



export class Car extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            car: []
        }

        this.refereshCarList = this.refereshCarList.bind(this)

    }



    componentDidMount() {
        this.refereshCarList();
    }

    refereshCarList() {
        CarDataService.findCarById(this.state.id)
        .then(
            response => {
                this.setState({
                    car: response.data,
                })
            }
        )
    }


    render() {
        return (

            <div>
            <HeaderComponent id={this.props.location.userId}/>
            
            <div className="card w-75 mx-auto mt-5">
                 <div className="" style={{backgroundColor: "white"}}>
        <h3 style={{textAlign: "center"}}>{this.state.car.make} {this.state.car.model}</h3>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <label className="title">Description</label>
                            <p className="">{this.state.car.description}</p>
                        </div>
                        <div>
                            <label className="title">Condition</label>
                            <p className="">{this.state.car.itemCondition}</p>
                        </div>

                        <div>
                            <label className="title" >Mileage</label>
                            <p className="">{this.state.car.mileage}</p>                       
                            </div>
                        <div>
                            <label className="title">Year</label>
                            <p className="">{this.state.car.year}</p>                       
                             </div>
                        <div>
                            <label className="title">Price</label>
                            <p className="">$ {this.state.car.price}</p>                        
                            </div>
                        <div>
                            <label className="title">Contact</label>
                            <p className="">{this.state.car.email}</p>                       
                         </div>
                         </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Car
