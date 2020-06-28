import React, { Component } from 'react';

export default class CardFront extends Component {
// The poster prop passed to the CardFront Component  
// Will render a background image
  render() {
    return (
      <div className="card-front" style={
        {backgroundImage: `url(${this.props.poster})`}
        }>
      </div>
    ) } }
