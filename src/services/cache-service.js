import { API_SERVIER_URL } from '../config';

const addToCache = async (url, response) => {
  const cache = await caches.open('countries');

  cache.put(API_SERVIER_URL + url, new Response(JSON.stringify(response)))
};

const getFromCache = async url => {
  const cache = await caches.open('countries');

  return await cache.match(API_SERVIER_URL + url);;
}

export {
  addToCache,
  getFromCache,
}