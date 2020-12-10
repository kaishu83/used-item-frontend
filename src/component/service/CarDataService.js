import axios from 'axios'; 

class CarDataService{

    retrieveAllCars(){
        return axios.get(`http://localhost:8080/cars`)
    }


}

export default new CarDataService;