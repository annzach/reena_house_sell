import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'


let _clients = [];

class ClientStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_CLIENTS':
          _clients = action.people;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_CLIENT':
          var { person } = action;
          _clients.push(person);
          this.emit('CHANGE');
          break;
        case 'RECEIVE_LOOKUP_PEOPLE':
          _clients = action.person;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _clients;
  }
}

export default new ClientStore();
