import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from '../services/local-starage';

const LANGUAGE = 'LANGUAGE';

const getLanguage = () => getLocalStorageItem(LANGUAGE);
const setLanguage = userData => setLocalStorageItem(LANGUAGE, userData);
const removeLanguage = () => removeLocalStorageItem(LANGUAGE);

export { getLanguage, setLanguage, removeLanguage };
