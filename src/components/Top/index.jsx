import React from 'react';
import './style.scss';

import Weather from './weather';

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="top-container">
        <h2 className="title">Weather</h2>
        <Weather />
      </div>
    )
  }
}