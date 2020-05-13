import createDefineAction from '../../../helpers/define-action';

const GET_COUNTRIES_BY_NAME = createDefineAction('GET_COUNTRIES_BY_NAME');

const GET_COUNTRIES_BY_FULLNAME = createDefineAction('GET_COUNTRIES_BY_FULLNAME');

const GET_COUNTRIES_BY_CURRENCY = createDefineAction('GET_COUNTRIES_BY_CURRENCY');

const GET_COUNTRIES_BY_CODE = createDefineAction('GET_COUNTRIES_BY_CODE');

export {
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_FULLNAME,
  GET_COUNTRIES_BY_CURRENCY,
  GET_COUNTRIES_BY_CODE,
}
