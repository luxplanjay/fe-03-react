import React, { Component } from 'react';
import Loader from '../components/Loader';

const withLoader = WrappedComponent => {
  return class extends Component {
    render() {
      const { isLoading } = this.props;

      return isLoading ? <Loader /> : <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoader;
