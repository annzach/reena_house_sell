import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions';
// import ClientStore from '../stores/ClientStore';
import { Modal, Button } from 'react-bootstrap';


export default class GetAllClients extends Component {
  constructor(props) {
    super(props);
    this.deleteClient = this.deleteClient.bind(this);
    this.editClient = this.editClient.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);


    this.state = {
      editName: '',
      editEmail:'',
      editId: null,
      showModal: false,
      clients: []
    }

  }


  deleteClient(id){
    ClientActions.deleteClient(id);
  }

  editClient(client){
    this.openModal();
    this.setState({editName: client.name, editEmail: client.email, editId: client._id});
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  saveEdit(id) {
    let newClient = {
      name: this.state.editName,
      email: this.state.editEmail,
    };
    ClientActions.editClient(id, newClient);
    this.setState({editName: '', editEmail: ''});
    this.closeModal();
  }

  cancelEdit() {
    this.closeModal();
  }

  render() {
    let clients = this.props.clients;
    let content = clients.map(client =>{
        return(
            <div className="col-sm-6 col-md-4" key={client._id} >
              <div className="thumbnail"  height="100px">
                <div className="caption">
                  <h4>Name: {client.name}</h4>
                  <h4>Email: {client.email}</h4>
                  <p className="text-center">
                    <button className="btn btn-primary" onClick={()=>this.editClient(client)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>this.deleteClient(client._id)}>Delete</button>
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
          <span>E-mail: </span><input type="text" value={this.state.editEmail} onChange={e => {this.setState({editEmail: e.target.value}) }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={this.saveEdit.bind(null,this.state.editId)}>Save</Button>
          <Button onClick={this.cancelEdit}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )

  }
}
