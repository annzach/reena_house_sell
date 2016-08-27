import React, {Component} from 'react';
import BuyerActions from '../actions/BuyerActions';
import {browserHistory} from 'react-router'

export default class HouseSell extends Component{

  constructor(){
    super();
    this.state ={
      address:'',
      sqft:'',
      baths:'',
      beds:'',
      price:'',
      location:'',
      picture:'',
      zipcode:''
    }
    this.submitHouse=this.submitHouse.bind(this);
  }

   resetForm(){
    this.setState({ address:'',
                    sqft:'',
                    baths:'',
                    beds:'',
                    price:'',
                    location:'',
                    picture:'',
                    zipcode:''});
  }


  submitHouse(e){
    console.log("inside submit House")
    e.preventDefault();
    let house ={
      address:this.state.address,
      sqft:this.state.sqft,
      baths:this.state.baths,
      beds:this.state.beds,
      price:this.state.price,
      location:this.state.location,
      picture:this.state.picture,
      zipcode:this.state.zipcode
    }
    console.log(house,{house});
    BuyerActions.createHouse(house)
    this.setState({house:''});
    this.resetForm();
    browserHistory.push('/buy');
  }

  render(){
     let {house}= this.state;
    return (
      <div className ="maindiv">
        <form  className ="formStyle" onSubmit={this.submitHouse}>
          <div className="container form-group ">
            <input type="text" value = {this.state.picture} placeholder="Image URL" className="form-control input-lg input1"
              onChange={e=>this.setState({picture:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.address} placeholder ="Address" className="form-control input-lg input2"
              onChange={e=>this.setState({address:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.location} placeholder="Location" className="form-control input-lg input3"
              onChange={e=>this.setState({location:e.target.value})}/>
          </div>

           <div className="container form-group">
            <input type="text" value = {this.state.zipcode} placeholder="Zipcode" className="form-control input-lg input8"
              onChange={e=>this.setState({zipcode:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.sqft} placeholder="Sqft" className="form-control input-lg input4"
              onChange={e=>this.setState({sqft:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.baths} placeholder="Baths" className="form-control input-lg input5"
              onChange={e=>this.setState({baths:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.beds} placeholder="Beds" className="form-control input-lg input6"
              onChange={e=>this.setState({beds:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.price} placeholder="Price" className="form-control input-lg input7"
              onChange={e=>this.setState({price:e.target.value})}/>
          </div>

          <div  className="container form-group text-center">
            <button id = "hsesbtid" type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>
         </form>

    </div>)
  }
}
