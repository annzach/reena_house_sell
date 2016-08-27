import API from '../API';

const ClientActions = {
  getAllClients: API.getAllClients,
  createClient(person) {
    API.createClient(person);
  },
  lookup(email){
    API.lookup(email);
  },
  editClient(id, client){
    API.editClient(id, client);
  },
  deleteClient(id){
    API.deleteClient(id);
  }
}

export default ClientActions;
