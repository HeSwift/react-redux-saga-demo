import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}></Route>
        <Route path="/index" component={App}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
