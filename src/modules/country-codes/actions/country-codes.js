import axios from 'axios';
import { GET_ALL_COUNTRIES } from '../constants/actions';
import { API_SERVIER_URL } from '../../../config';
import { addToCache, getFromCache } from '../../../services/cache-service';

const getAllCountries = () => async dispatch => {
  dispatch({ type: GET_ALL_COUNTRIES.REQUEST });

  const cache =await getFromCache('all');

  if (cache) {
    const response = await cache.json();

    dispatch({ type: GET_ALL_COUNTRIES.SUCCESS, payload: response.data });

    return;
  }

  axios
    .get(`${API_SERVIER_URL}all`)
    .then(async response => {
      const codes = response.data.map(item => ({
        name: item.name,
        alpha2Code: item.alpha2Code,
        alpha3Code: item.alpha3Code,
      }));

      addToCache('all', codes);

      dispatch({ type: GET_ALL_COUNTRIES.SUCCESS, payload: codes });
    })
    .catch(error => 
      dispatch({ type: GET_ALL_COUNTRIES.FAILURE, payload: {
        type: 'error',
        body: {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
        }}
      })
    )
};

export {
  getAllCountries
}

