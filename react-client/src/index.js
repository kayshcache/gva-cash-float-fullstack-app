import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

// Material UI Imports
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import indigo from '@material-ui/core/colors/indigo';

// Material UI Setup
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: indigo,
    secondary: amber,
  },
  status: {
    danger: 'orange',
  },
});

// Redux Setup
const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} >
    <PersistGate
      loading={<div>Loading</div>}
      persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
