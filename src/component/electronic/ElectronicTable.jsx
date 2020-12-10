import React, { Component } from 'react'
import ElectronicsDataService from '../service/ElectronicsDataService'


class ElectronicTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            electronics: []
        }
     
    }

    componentDidMount() {
        this.refereshElectronicList();
    }

    refereshElectronicList() {
        ElectronicsDataService.retrieveAllElectronics()
        .then(
            response => {
                this.setState({
                    electronics: response.data,
                })
            }
        )
    }

    viewCarClicked(id) {
        this.props.history.push(`/electroinc/${id}`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>All Electronics</h1><br></br>
               <div className="jumbotron card"  style={{backgroundColor: "", color: "black"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Description</th>
                               <th>Price</th>
                               <th>Condition</th>
                               <th>Manufacturer</th>
                               <th>Year</th>
                               <th>View</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.electronics.map (
                                   electronic => 
                                   <tr style={{textAlign: "center"}} key={electronic.id}>
                                       <td>{electronic.description}</td>
                                       <td>{electronic.model}</td>
                                       <td>{electronic.itemCondition}</td>
                                       <td>{electronic.manufacter}</td>
                                       <td>{electronic.year}</td>
                                       <td><button className="btn btn-success" onClick={() => this.viewElectronicClicked(electronic.id)}>View</button></td>
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

export default ElectronicTable; 