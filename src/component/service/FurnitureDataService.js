import axios from 'axios'; 

class FurnitureDataService{

    retrieveAll(){
        return axios.get(`http://localhost:8080/furniture`)
    }

    findById(id){
        return axios.get(`http://localhost:8080/furniture/${id}`)
    }

    update(furniture){
        return axios.put(`http://localhost:8080/furniture/`,furniture)
    }


}

export default new FurnitureDataService;