import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { EOLocale } from 'eo-locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './form-group.less';

const SearchFormGroup = ({
  searchString,
  onSearchString, 
  onSearchClick,
  placeholder,
  isActive }) => (
  <div className="form-group">
    <div className="form-group__input-container">
      <input
        id="search"
        type="text" 
        onChange={onSearchString} 
        value= {searchString} 
        placeholder={placeholder} 
        className="form-group__input" />
      <label htmlFor="search" className={`form-group__label ${isActive ? 'black-text' : ''}`} >
        <EOLocale.Text id="searchLabel" />
      </label>
    </div>
    <button className="form-group__button" onClick={onSearchClick} >
      <FontAwesomeIcon className="icon" icon={faSearch} />
      <EOLocale.Text id="search" />
    </button>
  </div> 
);

SearchFormGroup.propTypes = {
  onSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default onlyUpdateForKeys(['searchString', 'placeholder', 'isActive'])(SearchFormGroup);