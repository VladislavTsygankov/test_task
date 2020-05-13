import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchPage from '../modules/search-page/containers/search-page';
import CountryCodes from '../modules/country-codes/containers/country-codes';
import AboutDev from '../modules/about-dev/about-dev';

const routes = (
    <Switch>
        <Route exact path="/" render={props =>
            <SearchPage {...props}>{props.children}</SearchPage>}
        />
        <Route path="/countrycodes" render={props =>
            <CountryCodes {...props}>{props.children}</CountryCodes>}
        />
        <Route path="/aboutme" render={props => 
            <AboutDev {...props}>{props.children}</AboutDev>}
        />
    </Switch>
);

export default routes;
