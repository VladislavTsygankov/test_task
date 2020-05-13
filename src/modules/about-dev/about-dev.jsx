import React from 'react';
import { pure } from 'recompose';
import { EOLocale } from 'eo-locale';

import image from '../../../public/images/me.jpg';
import './about-dev.less';

const AboutDev = () => (
  <div className="about-me">
    <div className="about-me__container">
      <div className="about-me__title">
        <h1>
          <EOLocale.Text id="myName" />          
        </h1>
      </div>
      <div className="about-me__text">
        <p>
          <EOLocale.Text id="devText" />
        </p>
      </div>
      <div className="about-me__image">
        <img src={image}  width="300px" />
      </div>
    </div>
  </div>
);

export default pure(AboutDev);