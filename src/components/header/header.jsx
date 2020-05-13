import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { EOLocale} from 'eo-locale';
import { Link } from "react-router-dom";

import './header.less';

const Header = ({ language, onChangeLanguage }) => {
    const [isActive, setActive] = useState(false);

    return (
        <div className ="header">
            <div className="header__container">
                <Link to="/" className="logo">
                    <div className="logo_text-white">
                        Country
                    </div>
                    <div className="logo_text-red">
                        Search
                    </div>
                </Link>
                <div className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link 
                        to="/countrycodes" 
                        className="navbar__item"
                        onClick={() => setActive(!isActive)}>
                        <EOLocale.Text id="showCodes" /> 
                    </Link>
                    <Link 
                        to="/aboutme" 
                        className="navbar__item"
                        onClick={() => setActive(!isActive)}>
                        <EOLocale.Text id="aboutDev" />
                    </Link>
                    <div className="languages" onClick={onChangeLanguage}>{language}</div>
                </div>
                <button 
                    className={`header__burger-menu ${isActive ? 'header__burger-menu_active' : ''}`} 
                    onClick={() => setActive(!isActive)} >
                    <span></span>
                </button>
            </div>
        </div>
    )
};

Header.propTypes = {
    language: PropTypes.string.isRequired,
    onChangeLanguage: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['language'])(Header);