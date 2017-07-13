import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

  injectGlobal `
    body {
      padding: 0;
      margin: 0;
      font-family: source sans pro;
      background-color: #f4f4f4;
    }
    h1, h2, h3, h4 {
      margin: 0;
      padding: 0;
    }
    .group:after {
      content: "";
      display: table;
      clear: both;
    }
  `

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
