import { connect } from 'react-redux';
import { auth } from '../actions';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  onAuth(email, password, type) {
    dispatch(auth(email, password, type));
  }
});

const withAuth = Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);

export default withAuth;
