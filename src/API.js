import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getAllHouses(){
    axios.get('/api/houses')
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  createHouse(house) {
    axios.post('/api/houses', house)
      .then(res => res.data)
      .then(ServerActions.receiveOneHouse)
      .catch(console.error);
  },
  // lookup(email){
  //   axios.get(`/api/houses/email/${email}`)
  //     .then(res => res.data)
  //     .then(ServerActions.receiveLookupPeople)
  //     .catch(console.error);
  // },
  editHouse(id, house){
    axios.put(`/api/houses/${id}`, house)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`)
    .then(this.getAllHouses())
  },


  getAllAnimals(){
    axios.get('/api/animals')
      .then(res => res.data)
      .then(ServerActions.receiveAnimals)
      .catch(console.error);
  },
  createAnimal(animal) {
    axios.post('/api/animals', animal)
      .then(res => res.data)
      .then(ServerActions.receiveOneAnimal)
      .catch(console.error);
  },
  editAnimal(id, Animal){
    axios.put(`/api/animals/${id}`,Animal)
    .then(this.getAllAnimals())
  },
  deleteAnimal(id) {
    axios.delete(`/api/animals/${id}`)
    .then(this.getAllAnimals())
  },
  addOwner(animal_id, owner_id){
    axios.put(`/api/animals/${animal_id}/addOwner/${owner_id}`)
      .then(this.getAllAnimals())
  }
}

export default API;
