import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { store } from './store';
import { history } from './history';
import { theme } from './theme';
import 'antd/dist/antd.css';
import { Layout } from './containers/Layout/Layout';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;
