import React, { Component } from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { EOLocale } from 'eo-locale';

import './country-codes.less';

class CountryCodes extends Component {

  componentDidMount () {
    const { dispatchGetAllCountryCodes } = this.props;

    dispatchGetAllCountryCodes();
  }


  render () {
    const { codes } = this.props;

    return (
        <div className="country-codes">
          <div className="country-codes__container">
            <table>
              <thead className="table-header">
                <tr>
                  <td>
                    <EOLocale.Text id="countryName" />
                  </td>
                  <td>
                    alpha 3 code
                  </td>
                  <td>
                    alpha 2 code
                  </td>
                </tr>
              </thead>
              <tbody className="table-body">
                {
                  codes.map((code, index) => (
                    <tr key ={index}>
                      <td>
                        {code.name}
                      </td>
                      <td>
                        {code.alpha3Code}
                      </td>
                      <td>
                        {code.alpha2Code}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      )
  }
}

export default onlyUpdateForKeys(['codes', 'error'])(CountryCodes);

