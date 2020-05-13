import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { ConnectedRouter } from 'connected-react-router';
import { EOLocale } from 'eo-locale';
import Header from '../header/header';
import routes from '../../routes';
import { getLanguage, setLanguage } from '../../helpers/localization-storage';
import { LOCALES } from '../../constants/locales';


class App extends Component{
  
  state = {
    language: '',
  }

  componentDidMount () {
    const storageLanguage = getLanguage();

    if (storageLanguage) {
      this.setState({
        language: storageLanguage,
      });
    }
    else {
      setLanguage('en');
      this.setState({
        language: 'en',
      })
    }
  }

  onChangeLanguage = () => {
    const language = getLanguage() === 'en' ? 'ru' : 'en';

    setLanguage(language);

    this.setState({
      language: language,
    });
  }

  render () {
    const { history } = this.props;
    const { language } = this.state;

    return (
      <ConnectedRouter history={history}>
        <EOLocale.Provider locales={LOCALES} language={language}>
          <Grid fluid>
              <Row>
                  <Col md={12}>
                    <Header  language={language} onChangeLanguage={this.onChangeLanguage} />
                  </Col>
              </Row>
              <Row>
                  {routes}
              </Row>
          </Grid>
        </EOLocale.Provider>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default onlyUpdateForKeys(['history'])(App);
