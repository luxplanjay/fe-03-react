import React, { Component } from 'react';

export default class DynamicImport extends Component {
  state = {
    component: null,
  };

  componentDidMount() {
    this.props.load().then(module =>
      this.setState({
        component: module.default,
      })
    );
  }

  render() {
    return this.props.children(this.state.component);
  }
}
