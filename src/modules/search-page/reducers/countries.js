import { handleActions } from 'redux-actions';
import {
  GET_COUNTRIES_BY_FULLNAME,
  GET_COUNTRIES_BY_CODE,
  GET_COUNTRIES_BY_CURRENCY,
  GET_COUNTRIES_BY_NAME,
} from '../constansts/actions';

const INITIAL_STATE = {
  isLoading: false,
  country: null,
  error: {
    type: '',
    body: null,
  }
}

const countriesReducer = handleActions(
  {
    [GET_COUNTRIES_BY_NAME.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_COUNTRIES_BY_NAME.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      country: action.payload,
    }),
    [GET_COUNTRIES_BY_NAME.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [GET_COUNTRIES_BY_CODE.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_COUNTRIES_BY_CODE.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      country: action.payload,
    }),
    [GET_COUNTRIES_BY_CODE.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [GET_COUNTRIES_BY_FULLNAME.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      },
    }),
    [GET_COUNTRIES_BY_FULLNAME.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      country: action.payload,
    }),
    [GET_COUNTRIES_BY_FULLNAME.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [GET_COUNTRIES_BY_CURRENCY.REQUEST]: state => ({
      ...state, 
      isLoading: true,
      error: {
        type: '',
        body: null,
      }
    }),
    [GET_COUNTRIES_BY_CURRENCY.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      country: action.payload,
    }),
    [GET_COUNTRIES_BY_CURRENCY.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  INITIAL_STATE
);

export default countriesReducer;
