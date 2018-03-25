import React from 'react';
import Loader from '../components/Loader';

// https://reactjs.org/docs/higher-order-components.html
const withLoader = WrappedComponent => props =>
  props.isLoading
    ? <Loader />
    : <WrappedComponent {...props} />;

export default withLoader;
