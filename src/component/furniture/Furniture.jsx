import React, { Component } from 'react'
import FurnitureDataService from '../service/FurnitureDataService';
import "./Furniture.css"

class Furniture extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            furnitrue: []
        }
        this.refereshFurnitureList = this.refereshFurnitureList.bind(this)
        //question
    }

    componentDidMount(){
        this.refereshFurnitureList();
    }
    refereshFurnitureList() {
        FurnitureDataService.findById(this.state.id)
        .then(
            response => {
                this.setState({
                    furniture: response.data,
                })
            }
        )
    }

    render() {
        return (
            <div className="card w-75 mx-auto mt-5">
                 <div className="" style={{backgroundColor: "white"}}>
        {/* <h3 style={{textAlign: "center"}}>{this.state.furnitrue.make} {this.state.car.model}</h3> */}
                </div>
                <div className="container">
                    <div>
                        <div>
                            <label className="title">Description</label>
                            <p className="">{this.state.furniture.description}</p>
                        </div>
                        <div>
                            <label className="title">Condition</label>
                            <p className="">{this.state.furniture.itemCondition}</p>
                        </div>

                        <div>
                            <label className="title" >Weight</label>
                            <p className="">{this.state.furniture.weight}</p>                       
                            </div>
                        <div>
                            <label className="title">Year</label>
                            <p className="">{this.state.furniture.year}</p>                       
                             </div>
                        <div>
                            <label className="title">Price</label>
                            <p className="">$ {this.state.furniture.price}</p>                        
                            </div>
                        <div>
                            <label className="title">Contact</label>
                            <p className="">{this.state.furniture.email}</p>                       
                         </div>
                         </div>
                </div>
            </div>
        )
    }
}
export default Furniture