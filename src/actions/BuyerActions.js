import API from '../API';

const BuyerActions = {
  getAllHouses: API.getAllHouses,
  createHouse(house) {
    API.createHouse(house);
  },
  editHouse(id, house){
    API.editHouse(id, house);
  },
  deleteHouse(id){
    API.deleteHouse(id);
  }
}

export default BuyerActions;
