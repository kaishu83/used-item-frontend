import axios from 'axios'; 

class ElectronicsDataService{

    retrieveAllElectronics(){
        return axios.get(`http://localhost:8080/electronic`)
    }

    findElectronicById(id){
        return axios.get(`http://localhost:8080/electronic/${id}`)
    }


}

export default ElectronicsDataService;