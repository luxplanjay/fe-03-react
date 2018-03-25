import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppNav from '../components/AppNav';
import { getIsAuthenticated } from '../selectors';

const mSTP = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default withRouter(connect(mSTP, null)(AppNav));
