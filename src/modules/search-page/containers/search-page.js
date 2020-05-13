import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCountriesByFullName,
  getCountriesByName,
  getCountriesByCurrencyCode,
  getCountriesByCode
} from '../actions/countries';
import SearchPage from '../components/search-page/search-page';

const mapStateToProps = state => ({
  error: state.countries.error,
  country: state.countries.country,
  isLoading: state.countries.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCountriesByFullName: bindActionCreators(getCountriesByFullName, dispatch),
  dispatchGetCountriesByName: bindActionCreators(getCountriesByName, dispatch),
  dispatchGetByCurrencyCode: bindActionCreators(getCountriesByCurrencyCode, dispatch),
  dispatchGetByCode: bindActionCreators(getCountriesByCode, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);