import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { EOLocale } from 'eo-locale';

import './radio-group.less';

const RadioGroup = ({selectedType, changeSearchType}) => (
    <ul className="radio-group">
      <li className="radio-group__item">
        <input
          id="byName"
          type="radio"
          value="byName"
          onChange={changeSearchType}
          checked={selectedType === 'byName'} />
        <label htmlFor="byName">
          <EOLocale.Text id="byName" />
        </label>
      </li>
      <li className="radio-group__item">
        <input
          id="byCode"
          type="radio"
          value="byCode"
          onChange={changeSearchType}
          checked={selectedType === 'byCode'} />
        <label htmlFor="byCode">
          <EOLocale.Text id="byCountryCode" />
        </label>
      </li>
      <li className="radio-group__item">
        <input 
          id="byCurrency"
          type="radio"
          value ="byCurrency"
          onChange={changeSearchType}
          checked={selectedType === 'byCurrency'} />
          <label htmlFor="byCurrency">
            <EOLocale.Text id="byCurrency" />
          </label>
      </li>
      <li className="radio-group__item">
        <input
          id="byFullName"
          type="radio"
          value="byFullName"
          onChange={changeSearchType}
          checked={selectedType === 'byFullName'} />
        <label htmlFor="byFullName">
          <EOLocale.Text id="byFullName" />
        </label>
      </li>
    </ul>
);

RadioGroup.propTypes = {
  selectedType: PropTypes.string.isRequired,
  changeSearchType: PropTypes.func.isRequired,
}


export default onlyUpdateForKeys(['selectedType'])(RadioGroup);