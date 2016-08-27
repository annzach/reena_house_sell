import React, { Component } from 'react';
import BuyerActions from '../actions/BuyerActions'
import {browserHistory} from 'react-router'

export default class ListHouse extends Component {
  constructor(){
    super();
    this.orderHouse = this.orderHouse.bind(this);
    this.editHouse=this.editHouse.bind(this);
    this.saveMe=this.saveMe.bind(this);

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

  saveMe(e){
    console.log("Please save me" + e.target.id);
    let new_id = this.props._id;
    console.log("new_id",new_id);
    let new_picture =this.state.editPicture
    let new_address =this.state.editAddress
    let new_location =this.state.editLocation
    let new_baths=this.state.editBaths
    let new_sqft =this.state.editSqft;
    let new_zipcode =this.state.editZipcode;
    let new_beds =this.state.editBeds;
    let new_price = this.state.editPrice;
    let new_obj = {picture:new_picture  ,address:new_address,location:new_location,
                   baths:new_baths,sqft:new_sqft,zipcode:new_zipcode,beds:new_beds,
                   price:new_price }
    console.log(new_obj);
   BuyerActions.editHouse(new_id,new_obj);
   this.setState({editing:null});
   //browserHistory.push('/buy')


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

  deleteHouse(e){
    console.log("Delete Me" + e.target.id);
    BuyerActions.deleteHouse(e.target.id);
  }
  render() {
    let { _id, address, sqft, beds, baths, picture, price, location,zipcode }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editPicture} onChange ={e=>this.setState({editPicture:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editAddress} onChange ={e=>this.setState({editAddress:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editZipcode} onChange ={e=>this.setState({editZipcode:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editSqft} onChange ={e=>this.setState({editSqft:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editBeds} onChange ={e=>this.setState({editBeds:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editBaths}onChange ={e=>this.setState({editBaths:e.target.value})} /></td>
          <td><input type="text" value = {this.state.editPrice} onChange ={e=>this.setState({editPrice:e.target.value})}/></td>
      
          <td><button id ={_id} className='btn btn-default btn-xs' onClick={this.saveMe}>
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
        <td>{address}{location}</td>
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
               <button id = {_id} className="btn btn-danger btn-xs" onClick={this.deleteHouse}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </td>
      </tr>
    )
  }
  }
}
