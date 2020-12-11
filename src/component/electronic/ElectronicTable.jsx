import React, { Component } from 'react'
import ElectronicDataService from '../service/ElectronicDataService'
import HeaderComponent from '../header_footer/HeaderComponent'



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
        ElectronicDataService.getAllElectronics()
        .then(
            response => {
                this.setState({
                    electronics: response.data,
                })
            }
        )
    }

    viewElectronicClicked(id) {
        this.props.history.push({
            pathname: `/electronic/${id}`,
            userId: this.props.location.userId
        })
    }
 
   render() {
       return(
           <div>
            <HeaderComponent id={this.props.location.userId}/>
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
                                       <td>${electronic.price}</td>
                                       <td>{electronic.itemCondition}</td>
                                       <td>{electronic.manufacture}</td>
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
           </div>
          
       )
   } 
}

export default ElectronicTable; 