import API from '../API';

const BuyerActions = {
  getAllHouses: API.getAllHouses,
  
  createHouse(house) {
    API.createHouse(house);
  },
  editHouse(id, house){
    API.editHouse(id, house);
    API.getAllHouses();
  },
  deleteHouse(id){
    API.deleteHouse(id);
    API.getAllHouses();
  }
}

export default BuyerActions;
