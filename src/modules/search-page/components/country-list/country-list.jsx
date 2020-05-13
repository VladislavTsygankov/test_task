import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { EOLocale } from 'eo-locale';

import './country-list.less'

const CountryList = ({countryList, onShowMore}) => (
  <div className="search-page__list">
    {
      countryList.map((country, index) => (
        <div className="list-item" key={index}>
            <div className="list-item__header">
              <div className="list-item__header_name">
                <EOLocale.Text id="country" />
                : <p>{country.name}</p></div>
              <button className="list-item__header_button" onClick={()=> onShowMore(index)}>
                <EOLocale.Text id="showMore" />
              </button>
            </div>
            <div className="list-item__info">
              <div className="row">
                <div className="list-item__info-graph">
                  <EOLocale.Text id="nativeName" />
                  : <p>{country.nativeName}</p></div>
                  <div className="list-item__info-graph">
                  <EOLocale.Text id="capital" /> 
                  : <p>{country.capital}</p></div>
              </div>
              <div className="row">
                <div className="list-item__info-graph">
                  <EOLocale.Text id="countryCode" /> 
                  : <p>{country.alpha3Code}</p></div>
                <div className="list-item__info-graph">
                  <EOLocale.Text id="region" /> 
                  : <p>{country.region}</p></div>
              </div>
            </div>
        </div>
      ))
    }
  </div>
);

CountryList.propTypes = {
  countryList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShowMore: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['countryList'])(CountryList);

