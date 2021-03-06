import React, { Component } from 'react'
import FurnitureDataService from '../service/FurnitureDataService';
import "./Furniture.css"
import HeaderComponent from '../header_footer/HeaderComponent'


class Furniture extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            furniture: []
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
            <div>
            <HeaderComponent id={this.props.location.userId}/>
            <div className="card w-75 mx-auto mt-5">
                 <div className="" style={{backgroundColor: "white"}}>
        <h3 style={{textAlign: "center"}}>{this.state.furniture.name}</h3>
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
                            <p className="">{this.state.furniture.weight} lbs</p>                       
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
            </div>
        )
    }
}
export default Furniture