import axios from 'axios'; 

class UserDataService{

    createUser(user){
        return axios.post(`http://localhost:8080/users`, user)
    }

    userAuthentication(userCredentials){
        return axios.post(`http://localhost:8080/authUsers`, userCredentials)
    }

    findUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`)
    }

    deleteUserById(id){
        return axios.delete(`http://localhost:8080/users/${id}`)
    }

}

export default new UserDataService;