
import React,{Component} from 'react'; 
import FurnitureDataService from "../service/FurnitureDataService";
import HeaderComponent from '../header_footer/HeaderComponent'



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
        this.props.history.push({
            pathname: `/furniture/${id}`,
            userId: this.props.location.userId
        })
    }

    createFurnitureClick(){
        this.props.history.push({
            pathname: `/furniturePost`,
            userId: this.props.location.userId
        })
    }

    render(){
        return(

        <div>
        <HeaderComponent id={this.props.location.userId}/>

        <div className="container">
            <h1 style={{textAlign:"center"}}>All Furniture</h1>
             
            <button onClick={() => this.createFurnitureClick()} className="btn btn-primary m-3">Create Furniture Posting</button>

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
        </div>
        )
    }
}
export default FurnitureTable;