import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCountries } from '../actions/country-codes';
import CountryCodes from '../components/country-codes';

const mapStateToProps = state => ({
  codes: state.codes.codes,
  error: state.codes.error,
});

const mapDispatchtToProps = dispatch => ({
  dispatchGetAllCountryCodes: bindActionCreators(getAllCountries, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchtToProps,
)(CountryCodes);