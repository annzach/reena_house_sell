import React, { Component } from 'react';
import AnimalActions from '../actions/AnimalActions';
import { Modal, Button } from 'react-bootstrap';

export default class NewAnimalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
      age: 0,
      picture: '',
      showModal: false
      // owner: {}
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onInputNameChange = this.onInputNameChange.bind(this);
    this.onInputTypeChange = this.onInputTypeChange.bind(this);
    this.onInputAgeChange = this.onInputAgeChange.bind(this);
    this.onInputPictureChange = this.onInputPictureChange.bind(this);
    //this.onInputOwnerChange = this.onInputOwnerChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
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

  onInputTypeChange(e) {
    let type = e.target.value;
    this.setState({type});
  }

  onInputAgeChange(e) {
    let age = e.target.value;
    this.setState({age});
  }

  onInputPictureChange(e) {
    let picture = e.target.value;
    this.setState({picture});
  }

  // onInputOwnerChange(e) {
  //   let owner = e.target.value;
  //   this.setState({owner});
  // }

  addAnimal(id){
    this.openModal();
  }

  submitForm(e){
    e.preventDefault();
    let animal  = {
        name: this.state.name,
        type: this.state.type,
        age: this.state.age,
        picture: this.state.picture
    };
    AnimalActions.createAnimal(animal);
    this.setState({name: '', type: '', age: 0, picture: ''});
    this.closeModal();
  }

  cancelAdd() {
    this.closeModal();
  }

  render() {

    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.addAnimal()}><span className="glyphicon glyphicon-plus"></span></button>
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
                  <label>Type</label>
                  <input type="type" className="form-control" value={this.state.type} placeholder="type" onChange={this.onInputTypeChange}/>
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="age" className="form-control" value={this.state.age} placeholder="age" onChange={this.onInputAgeChange}/>
                </div>
                <div className="form-group">
                  <label>picture</label>
                  <input type="picture" className="form-control" value={this.state.picture} placeholder="url" onChange={this.onInputPictureChange}/>
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
