import { handleActions } from 'redux-actions';
import { GET_ALL_COUNTRIES } from '../constants/actions';

const INITIAL_STATE = {
  isLoading: false,
  codes: [],
  error: {
    type: '',
    body: null,
  }
}

const countryCodesReducer = handleActions(
  {
    [GET_ALL_COUNTRIES.REQUEST]: state => ({
      ...state,
      isLoading: true,
      error: {
        type: '',
        body: null,
      }
    }),
    [GET_ALL_COUNTRIES.SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      codes: action.payload,
    }),
    [GET_ALL_COUNTRIES.FAILURE]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload
    })
  },
  INITIAL_STATE
);

export default countryCodesReducer;