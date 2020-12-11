import React, { Component } from 'react'
import ElectronicDataService from '../service/ElectronicDataService'
import './Electronic.css'


export class Electronic extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            electronic: []
        }


        this.refereshElectronicList = this.refereshElectronicList.bind(this)

    }



    componentDidMount() {
        this.refereshElectronicList();
    }

    refereshElectronicList() {
        ElectronicDataService.findElectronicById(this.state.id)
        .then(
            response => {
                this.setState({
                   electronic : response.data,
                })
            }
        )
    }


    render() {
        return (
            <div className="card w-75 mx-auto mt-5">
                 <div className="" style={{backgroundColor: "white"}}>
        <h3 style={{textAlign: "center"}}>{this.state.electronic.name}</h3>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <label className="title">Description</label>
                            <p className="">{this.state.electronic.description}</p>
                        </div>
                        <div>
                            <label className="title">Condition</label>
                            <p className="">{this.state.electronic.itemCondition}</p>
                        </div>

                        <div>
                            <label className="title" >Manufacturer</label>
                            <p className="">{this.state.electronic.manufacture}</p>                       
                            </div>
                        <div>
                            <label className="title">Year</label>
                            <p className="">{this.state.electronic.year}</p>                       
                             </div>
                        <div>
                            <label className="title">Price</label>
                            <p className="">$ {this.state.electronic.price}</p>                        
                            </div>
                        <div>
                            <label className="title">Contact</label>
                            <p className="">{this.state.electronic.email}</p>                       
                         </div>
                         </div>
                </div>
            </div>
        )
    }
}

export default Electronic
