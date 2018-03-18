import { connect } from 'react-redux';
import BalanceForm from '../components/BalanceForm';
import { deposit, withdraw } from '../actions';

const mapDispatchToProps = dispatch => ({
  onDeposit: amount => dispatch(deposit(amount)),
  onWithdraw: amount => dispatch(withdraw(amount)),
});

export default connect(null, mapDispatchToProps)(BalanceForm);
