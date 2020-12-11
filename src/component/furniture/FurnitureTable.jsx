
import React,{Component} from 'react'; 
import FurnitureDataService from "../service/FurnitureDataService";


class FurnitureTable extends Component{
    constructor(props){
        super(props)
        this.state={
            furnitures:[]
        }
    }
    componentDidMount(){
        this.refresh();
    }

    refresh(){
        FurnitureDataService.retrieveAll()
        .then(
            respons=>{
                this.setState(
                    {furnitures:respons.data}
                )
            }
        )
    }
    viewFurnitureClicked(id) {
        this.props.history.push(`/furniture/${id}`)
    }


    render(){
        return(
        <div className="container">
            <h1 style={{textAlign:"center"}}>All Furnitures</h1>
            <br></br>
            <div className="jumbotron card" style={{backgroundColor: "", color: "black"}}>
                <table className="table">
                    <tr style={{textAlign:"center",color:"black"}}>
                               <th>Item Name</th>
                               <th>Condition</th>
                               <th>Year</th>
                               <th>Price</th>
                               <th>View</th>
                    </tr>
                    <tbody>
                           {
                               this.state.furnitures.map (
                                   furniture => 
                                   <tr style={{textAlign: "center"}} key={furniture.id}>
                                       <td>{furniture.name}</td>
                                       <td>{furniture.itemCondition}</td>
                                       <td>{furniture.year}</td>
                                       <td>{furniture.price}</td>
                                       <td><button className="btn btn-success" onClick={() => this.viewFurnitureClicked(furniture.id)}>View</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default FurnitureTable;