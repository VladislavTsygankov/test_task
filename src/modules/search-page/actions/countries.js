import axios from 'axios';
import {
  GET_COUNTRIES_BY_CODE,
  GET_COUNTRIES_BY_CURRENCY,
  GET_COUNTRIES_BY_FULLNAME,
  GET_COUNTRIES_BY_NAME,
} from '../constansts/actions';
import { API_SERVIER_URL } from '../../../config';
import { addToCache, getFromCache } from '../../../services/cache-service';

const getCountriesByName = name => async dispatch => {
  dispatch({ type: GET_COUNTRIES_BY_NAME.REQUEST })

  const url = `name/${name}`

  const cache = await getFromCache(url);

  if (cache) {
    const response = await cache.json();

    dispatch({ type: GET_COUNTRIES_BY_NAME.SUCCESS, payload: response.data });

    return;
  }

  axios
    .get(API_SERVIER_URL + URL)
    .then(response => {
      addToCache(url, response);
      
      dispatch({ type: GET_COUNTRIES_BY_NAME.SUCCESS, payload: response.data })
    })
    .catch(error =>
      dispatch({
        type: GET_COUNTRIES_BY_NAME.FAILURE,
        payload: {
          type: 'error',
          body: {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          },
        },
      })
    );
}

const getCountriesByFullName = name => async dispatch => {
    dispatch({ type: GET_COUNTRIES_BY_FULLNAME.REQUEST });

    const url = `name/${name}?fulltext=true`;

    const cache = await getFromCache(url);

    if (cache) {
      const response = await cache.json();

      dispatch({ type: GET_COUNTRIES_BY_FULLNAME.SUCCESS, payload: response.data[0]})

      return;
    }

    axios
      .get(API_SERVIER_URL + url)
      .then(response => {
        addToCache(url, response);

        dispatch({ type: GET_COUNTRIES_BY_FULLNAME.SUCCESS, payload: response.data[0] })
      })
      .catch(error =>
        dispatch({
          type: GET_COUNTRIES_BY_FULLNAME.FAILURE,
          payload: {
            type: 'error',
            body: {
              status: error.response.status,
              statusText: error.response.statusText,
              data: error.response.data,
            },
          },
        })
       ) 
}

const getCountriesByCode = code => async dispatch => {
    dispatch({ type: GET_COUNTRIES_BY_CODE.REQUEST });

    const url = `alpha/${code}`;

    const cache = await getFromCache(url);

    if (cache) {
      const response = await cache.json();

      dispatch({ type: GET_COUNTRIES_BY_CODE.SUCCESS, payload: response.data })

      return;
    }

    axios
      .get(API_SERVIER_URL + url)
      .then(response => {
        addToCache(url, response);

        dispatch({ type: GET_COUNTRIES_BY_CODE.SUCCESS, payload: response.data });
      })
      .catch(error =>
        dispatch({
          type: GET_COUNTRIES_BY_CODE.FAILURE,
          payload: {
            type: 'error',
            body: {
              status: error.response.status,
              statusText: error.response.statusText,
              data: error.response.data,
            },
          },
        })
      );
};

const getCountriesByCurrencyCode = currencyCode => async dispatch => {
    dispatch({ type: GET_COUNTRIES_BY_CURRENCY.REQUEST });

    const url = `currency/${currencyCode}`;

    const cache = await getFromCache(url);

    if (cache) {
      const response = await cache.json();

      dispatch({ type: GET_COUNTRIES_BY_CURRENCY.SUCCESS, payload: response.data[0] });

      return;
    }

    axios
      .get(API_SERVIER_URL + url)
      .then(response => {
        addToCache(url, response);

        dispatch({ type: GET_COUNTRIES_BY_CURRENCY.SUCCESS, payload: response.data[0] });
      })
      .catch(error =>
        dispatch({
          type: GET_COUNTRIES_BY_CURRENCY.FAILURE,
          payload: {
            type: 'error',
            body: {
              status: error.response.status,
              statusText: error.response.statusText,
              data: error.response.data,
            },
          },
        })
      );
}


export {
  getCountriesByName,
  getCountriesByCode,
  getCountriesByCurrencyCode,
  getCountriesByFullName,
};