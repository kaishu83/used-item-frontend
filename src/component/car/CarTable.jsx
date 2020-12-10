import React, { Component } from 'react'
import CarDataService from '../service/CarDataService'


class CarTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: []
        }
     
    }

    componentDidMount() {
        this.refereshCarList();
    }

    refereshCarList() {
        CarDataService.retrieveAllCars()
        .then(
            response => {
                this.setState({
                    cars: response.data,
                })
            }
        )
    }

    viewCarClicked(id) {
        this.props.history.push(`/car/${id}`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>All Cars</h1><br></br>
               <div className="jumbotron card"  style={{backgroundColor: "", color: "black"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Make</th>
                               <th>Model</th>
                               <th>Condition</th>
                               <th>Mileage</th>
                               <th>Year</th>
                               <th>View</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.cars.map (
                                   car => 
                                   <tr style={{textAlign: "center"}} key={car.id}>
                                       <td>{car.make}</td>
                                       <td>{car.model}</td>
                                       <td>{car.itemCondition}</td>
                                       <td>{car.mileage}</td>
                                       <td>{car.year}</td>
                                       <td><button className="btn btn-success" onClick={() => this.viewCarClicked(car.id)}>View</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                   </div>
               </div>
           </div>
       )
   } 
}

export default CarTable; 