import React, { Component } from 'react';
// import SearchClient from './SearchClient';
import AnimalStore from '../stores/AnimalStore';
import AnimalsList from './AnimalsList';
import NewAnimalForm from './NewAnimalForm';
import AnimalActions from '../actions/AnimalActions';


export default class AnimalPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      animals: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllAnimals();
    AnimalStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      animals: AnimalStore.getAll()
    });
  }

  render() {
    let {animals} = this.state;
    return (
      <div className="container">
        <h1 className='text-center'>Animals Information</h1>
        <NewAnimalForm />
        <AnimalsList animals={animals} />
      </div>
    )
  }
}
