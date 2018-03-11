import React, { Component } from 'react';
import withLoader from '../HOC/withLoader';

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <h1>Finished loading!</h1>
        <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default withLoader(List);
