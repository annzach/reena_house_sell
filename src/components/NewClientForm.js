import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions';
import { Modal, Button } from 'react-bootstrap';

export default class NewClientForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      showModal: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onInputNameChange = this.onInputNameChange.bind(this);
    this.onInputEmailChange = this.onInputEmailChange.bind(this);

    this.submitForm = this.submitForm.bind(this);
    this.addClient = this.addClient.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
  }

  closeModal() {
   this.setState({ showModal: false });
  }

  openModal() {
   this.setState({ showModal: true });
  }

  onInputNameChange(e) {
    let name = e.target.value;
    this.setState({name});
  }

  onInputEmailChange(e) {
    let email = e.target.value;
    this.setState({email});
  }


  addClient(id){
    this.openModal();
  }

  submitForm(e){
    e.preventDefault();
    let client  = {
        name: this.state.name,
        email: this.state.email
    };
    ClientActions.createClient(client);
    this.setState({name: '', email: ''});
    this.closeModal();
  }

  cancelAdd() {
    this.closeModal();
  }

  render() {

    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.addClient()}><span className="glyphicon glyphicon-plus"></span></button>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
            </Modal.Header>
          <form onSubmit={this.submitForm}>
            <Modal.Body>
                <div className="form-group">
                  <label>Name</label>
                  <input type="name" className="form-control" value={this.state.name}  placeholder="Name" onChange={this.onInputNameChange}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="type" className="form-control" value={this.state.email} placeholder="type" onChange={this.onInputEmailChange}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-primary" type='submit'>Save</Button>
              <Button onClick={this.cancelAdd}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}
