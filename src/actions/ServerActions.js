import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveHouses(houses) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_HOUSES',
      houses
    })
  },
  receiveOneHouse(house) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_HOUSE',
      house
    })
  },
  receiveLookupHouses(house){
    AppDispatcher.dispatch({
      type: 'RECEIVE_LOOKUP_HOUSES',
      person
    })
  },
  receiveAnimals(animals) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMALS',
      animals
    })
  },
  receiveOneAnimal(animal) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_ANIMAL',
      animal
    })
  },
  editHouse(data){
    AppDispatcher.dispatch({
      type: 'EDIT_HOUSE',
      data
    })

  }
}

export default ServerActions;
