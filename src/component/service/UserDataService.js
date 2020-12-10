import axios from 'axios'; 

class UserDataService{

    createUser(user){
        return axios.post(`http://localhost:8080/users`, user)
    }

    userAuthentication(userCredentials){
        return axios.get(`http://localhost:8080/authUsers`, userCredentials)
    }

}

export default new UserDataService;