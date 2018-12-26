import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    background-color: #ebebeb;
    color: #323232;
  }

  img {
    width: 100%;
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  ul, dl, dt, dd {
    padding: 0;
    margin: 0;
  }
`;

function Root() {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
