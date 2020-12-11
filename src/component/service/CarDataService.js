import axios from 'axios'; 

class CarDataService{

    retrieveAllCars(){
        return axios.get(`http://localhost:8080/cars`)
    }

    findCarById(id){
        return axios.get(`http://localhost:8080/cars/${id}`)
    }

    createCarPost(car){
        return axios.post(`http://localhost:8080/cars`, car)
    }


}

export default new CarDataService;