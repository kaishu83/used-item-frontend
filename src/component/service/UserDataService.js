import axios from 'axios'; 

class UserDataService{
    createUser(user){
        return axios.post(`http://localhost:8080/users`, user)
    }
}

export default new UserDataService;