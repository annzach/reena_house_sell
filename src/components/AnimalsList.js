import React, { Component } from 'react';
import AnimalActions from '../actions/AnimalActions';
import AnimalStore from '../stores/AnimalStore';
import { Modal, Button } from 'react-bootstrap';


export default class AnimalList extends Component {
  constructor(props) {
    super(props);
    this.deleteAnimal = this.deleteAnimal.bind(this);
    this.editAnimal = this.editAnimal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      editName: '',
      editType:'',
      editAge: 0,
      editPicture: '',
      editId: null,
      showModal: false
    }

  }


  deleteAnimal(id){
    AnimalActions.deleteAnimal(id);
  }

  editAnimal(animal){
    this.openModal();
    this.setState({editName: animal.name, editType: animal.type, editAge: animal.age, editPicture: animal.picture, editId: animal._id});
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  saveEdit(id) {
    let newAnimal = {
      name: this.state.editName,
      type: this.state.editType,
      age: this.state.editAge,
      picture: this.state.editPicture
    };
    AnimalActions.editAnimal(id, newAnimal);
    this.setState({editName: '', editType: '', editAge: 0, editPicture: ''});
    this.closeModal();
  }

  cancelEdit() {
    this.closeModal();
  }
  render() {
    let animals = this.props.animals;
    let content = animals.map(animal => {
      let owner = animal.owner ? animal.owner.name : 'NO OWNER';
      return (
        <div className="col-sm-6 col-md-4" key={animal._id} >
          <div className="thumbnail"  height="100px">
            <img src={animal.picture}/>
            <div className="caption">
              <h4>Name: {animal.name}</h4>
              <h4>Type: {animal.type}</h4>
              <h4>Age: {animal.age}</h4>
              <h4>Owner: {owner}</h4>
              <p className="text-center">
                <button className="btn btn-success" >Add Owner</button>
                <button className="btn btn-primary" onClick={()=>this.editAnimal(animal)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>this.deleteAnimal(animal._id)}>Delete</button>
              </p>
            </div>
          </div>
        </div>
      )

    })



    return(
      <div className="row" >
        {content}
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Name: </span><input type="text" value={this.state.editName} onChange={e => {this.setState({editName: e.target.value}) }}/> <br/>
            <span>Type: </span><input type="text" value={this.state.editType} onChange={e => {this.setState({editType: e.target.value}) }}/><br/>
            <span>Age: </span><input type="text" value={this.state.editAge} onChange={e => {this.setState({editAge: e.target.value}) }}/><br/>
            <span>Picture: </span><input type="text" value={this.state.editPicture} onChange={e => {this.setState({editPicture: e.target.value}) }}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-primary" onClick={() => this.saveEdit(this.state.editId)}>Save</Button>
            <Button onClick={this.cancelEdit}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )

  }
}
