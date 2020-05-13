import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { EOLocale } from 'eo-locale';

import './country-info.less';

const CountryInfo = ({country}) => (
  <div className="country-info">
    <div className="country-info__flag-container">
      <img src={country.flag}  height="300px" width="400px" />
    </div>
      <div className="country-info__info-container">
      <div className="country-info_title">
        <EOLocale.Text id="country" />
        : <p>{country.name}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="nativeName" />
        : <p>{country.nativeName}</p>.</div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="capital" />
        : <p>{country.capital}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="population" />
        : <p>{country.population}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="area" />
        : <p>{country.area}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="region" />
        : <p>{country.region}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="subregion" />
        : <p>{country.subregion}</p></div>
      <div className="country-info_subtitle">
        <EOLocale.Text id="language" />
        : <p>{
        country.languages.map(lang => `${lang.name}, `)}</p>
      </div>
    </div>
  </div>
);

CountryInfo.propTypes = {
  country: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number, PropTypes.array])
  )
}

export default onlyUpdateForKeys(['country'])(CountryInfo);