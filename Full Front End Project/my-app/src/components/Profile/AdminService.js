import axios from 'axios'

const ADMIN_REST_API_URL = 'http://localhost:8080/api/admin/';

class AdminService {

    getUsers(){
        return axios.get(ADMIN_REST_API_URL);
    }

    
}

export default new AdminService();
