import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import RadioGroup from '../radio-group/radio-group';
import SearchForm from '../form-group/form-group';
import CountryList from '../country-list/country-list';
import CountryInfo from '../country-info/country-info';
import {
    BY_CODE,
    BY_CURRENCY_CODE,
    BY_FULL_NAME,
    BY_NAME,
} from '../../constansts/placeholders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './search-page.less'

class SearchPage extends Component {
    state = {
        searchString: '',
        selectedSearchType: 'byName',
        placeholder: BY_NAME,
        active: false,
        isShownMore: false,
        showByIndex: 0,
    };

    static propTypes = {
        dispatchGetCountriesByFullName: PropTypes.func.isRequired,
        dispatchGetCountriesByName: PropTypes.func.isRequired,
        dispatchGetByCurrencyCode: PropTypes.func.isRequired,
        dispatchGetByCode: PropTypes.func.isRequired,
        country: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        erroro: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
        isLoading: PropTypes.bool.isRequired,
    }

    onSearchString = event => {
        const { value } = event.target;

        this.setState({
            searchString: value 
        });
    };

    onSearchClick = () => {
        const {
            dispatchGetCountriesByFullName,
            dispatchGetCountriesByName,
            dispatchGetByCurrencyCode,
            dispatchGetByCode

        } = this.props;
        const { searchString, selectedSearchType } = this.state;

        this.setState({
            active: true,
            isShownMore: false,
        });

        if (!searchString){
            console.log("WWWOOOOW")
            return;
        }

        switch (selectedSearchType) {
            case 'byName':
                dispatchGetCountriesByName(searchString);
                break;
            case 'byCode':
                dispatchGetByCode(searchString);
                break;
            case 'byCurrency':
                dispatchGetByCurrencyCode(searchString);
                break;
            case 'byFullName':
                dispatchGetCountriesByFullName(searchString);
                break;
        };
        
    };

    onShowMore = index => {
        this.setState({
            isShownMore: true,
            showByIndex: index,
        });
    }

    onBackButton = () => {
        this.setState({
            isShownMore: false,
        })
    }

    onSearchType = event => {
        const { value } = event.target;
        const newPlaceholer = value === 'byName'
                                ? BY_NAME : value === 'byCurrency'
                                ? BY_CURRENCY_CODE : value === 'byCode'
                                ? BY_CODE : BY_FULL_NAME;
        
        this.setState({
            selectedSearchType: value,
            placeholder: newPlaceholer,
            isShownMore: false,
        })
    };

    render() {
        const { selectedSearchType, searchString, placeholder, active, isShownMore, showByIndex} = this.state;
        const { isLoading, country } = this.props;

        return (
            <div className={`search-page ${active ? 'search-page_active' : ''}`}>
                <div className={`search-page__container${active ? '-active' : ''}`}>
                    <RadioGroup selectedType={selectedSearchType} changeSearchType={this.onSearchType}/>
                    <SearchForm
                    searchString={searchString}
                    onSearchString={this.onSearchString}
                    onSearchClick={this.onSearchClick}
                    placeholder={placeholder} 
                    isActive={active}/>
                    {
                        isShownMore ?
                        (
                            <button className="search-page__back-button" onClick={this.onBackButton}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                        ) : null
                    }
                    { active ? 
                        isLoading ? 
                            (<div>Loading...</div>) :
                            Array.isArray(country) ?
                                isShownMore ?
                                (
                                    <CountryInfo country={country[showByIndex]} />
                                ) :
                                (
                                    <CountryList countryList={country} onShowMore = {this.onShowMore} />
                                ) : (
                                    <CountryInfo country={country} />
                                )
                    : null}
                </div>
            </div>
        );
    };
}

export default onlyUpdateForKeys([
    'error',
    'country',
    'isLoading'
])(SearchPage);