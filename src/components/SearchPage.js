import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions';
import ClientList from './ClientList';
import ClientStore from '../stores/ClientStore';


export default class ClientsPage extends Component {
  constructor(props){
    super();
    this.state = {
      inputValue: '',
      clients: []
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ClientActions.getAllClients();
    ClientStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ClientStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      clients: ClientStore.getAll()
    });
  }

  onInputChange(e) {
    let inputValue = e.target.value;
    this.setState({inputValue});
  }

  submitForm(e){
    e.preventDefault();
    ClientActions.lookup(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render(){
    let {inputValue} = this.state;
    let {clients} = this.state;

    return(
      <div className="container">
        <div className="row">
          <form onSubmit={this.submitForm}>
            <div className="col-xs-6 col-xs-offset-3 text-center">
              <input type="text" value={inputValue} onChange={this.onInputChange} placeholder='E-mail'/>
              <button className='btn btn-info' type='submit'>Search</button>
            </div>
          </form>
          <ClientList clients={clients} />
        </div>
      </div>
    )
  }
}
