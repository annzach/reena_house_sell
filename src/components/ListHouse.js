import React, { Component } from 'react';

export default class ListHouse extends Component {
  constructor(props){
    super(props);
    this.orderHouse = this.orderHouse.bind(this);
    this.editHouse=this.editHouse.bind(this);

    this.state = {
      editing:null,
      editPicture:'',
      editAddress:'',
      editLocation:'',
      editSqft:'',
      editZipcode:'',
      editBeds:'',
      editBaths:'',
      editPrice:''
    }
  }
  orderHouse(id){

  }

  saveMe(){
    console.log("Please save me");
  }

  editHouse(e){
    console.log("Edit me please " + e.target.id);
    this.setState({
      editing:this.props._id,
      editPicture:this.props.picture,
      editAddress:this.props.address,
      editLocation:this.props.location,
      editSqft:this.props.sqft,
      editZipcode:this.props.zipcode,
      editBeds:this.props.beds,
      editBaths:this.props.baths,
      editPrice:this.props.price
    })
  }
  render() {
    let { _id, address, sqft, beds, baths, picture, price, location,zipcode }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editPicture} onChange ={e=>this.setState({editPicture:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editAddress} onChange ={e=>this.setState({editAddress:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editZipcode} onChange ={e=>this.setState({editZipcode:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editSqft} onChange ={e=>this.setState({editSqft:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editBeds} onChange ={e=>this.setState({editBeds:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editBaths}onChange ={e=>this.setState({editBaths:e.target.value})} /></td>
          <td><input type="text" value = {this.state.editPrice} onChange ={e=>this.setState({editPrice:target.value})}/></td>
      
          <td><button id ={_id} className='btn btn-default btn-xs' onClick={this.SaveMe}>
              <span className='glyphicon glyphicon-ok'></span>
              </button>
              <button id ={_id} className='btn btn-default btn-xs'>
              <span className='glyphicon glyphicon-remove'></span>
              </button>
        </td>
        </tr>
        )
      }
    else {
    console.log("id:",_id);
    return(
      <tr className='trFont' key={_id}>
        <td><img src={picture} width="300 px" alt="No Image"/></td>
        <td>{address}<br/>{location}</td>
        <td>{zipcode}</td>
        <td>{sqft}</td>
        <td>{beds}</td>
        <td>{baths}</td>
        <td>${price}</td>
        <td>
          <button className="btn btn-danger btn-xs" onClick={() => this.orderHouse(_id)}>
            <span className="glyphicon glyphicon-tag"></span>
          </button>
            <button id = {_id} className="btn btn-primary btn-xs" onClick={this.editHouse}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
        </td>
      </tr>
    )
  }
  }
}
