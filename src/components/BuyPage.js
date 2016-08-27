import React, { Component } from 'react';
import HouseStore from '../stores/HouseStore';
import ListHouse from './ListHouse';
import BuyerActions from '../actions/BuyerActions';
import { Link } from 'react-router';
// import SearchPage from './SearchPage';

// import NewBuyForm from './NewBuyForm';
// import GetAllBuys from './GetAllBuys';


export default class BuyPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      houses: HouseStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    BuyerActions.getAllHouses();
    HouseStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    HouseStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      houses: HouseStore.getAll()
    });
  }

  render() {
    let {houses} = this.state;
    const ListHouses = houses.map(house => {
      return (
        <ListHouse key={house._id} {...house} />
      )
    })

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Pleasanton, CA"/>
                </div>
                <button type="submit" className="btn btn-default"><Link to="search">Search</Link></button>
              </form>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Price <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">200k-300k</a></li>
                    <li><a href="#">301k-400k</a></li>
                    <li><a href="#">401k-500k</a></li>
                    <li><a href="#">501k-600k</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Bedroom<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Sqft</th>
                <th>Bedroom</th>
                <th>Bathroom</th>
                <th>Price</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {ListHouses}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
}
