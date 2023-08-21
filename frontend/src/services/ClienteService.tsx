import axios from 'axios'
const CLIENTE_DB_URL ="http://localhost:8080/clientes"

class ClienteService{
    getAllClients(){
        return axios.get(CLIENTE_DB_URL);
    }
}

export default new ClienteService();