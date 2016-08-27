import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import '../css/style.css'

export default class Welcome extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h1 className="text-center">Find Your Best Home</h1>
            <img id='mainPic' src="http://www.zoomtm.com/11/2015/01/home-decor-best-home-remodeling-ideas-best-home-designs.jpg" alt="bear"/>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
