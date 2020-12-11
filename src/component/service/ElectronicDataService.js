import axios from 'axios'; 

class ElectronicDataService{

    getAllElectronics(){
        return axios.get(`http://localhost:8080/electronic`)
    }

    findElectronicById(id){
        return axios.get(`http://localhost:8080/electronic/${id}`)
    }

    createElectronicPost(electronic){
        return axios.post(`http://localhost:8080/electronic`, electronic)
    }


}

export default new ElectronicDataService;