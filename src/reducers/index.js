import { combineReducers } from 'redux';
import countries from '../modules/search-page/reducers/countries';
import codes from '../modules/country-codes/reducers/country-codes';

export default combineReducers({
  countries,
  codes,
});
