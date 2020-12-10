import axios from 'axios'; 

class CarDataService{

    retrieveAllCars(){
        return axios.get(`http://localhost:8080/cars`)
    }

    findCarById(id){
        return axios.get(`http://localhost:8080/cars/${id}`)
    }


}

export default new CarDataService;