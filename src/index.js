import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Apps';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { fetchMemes } from './actions'

const store = createStore(rootReducer,applyMiddleware(thunk));
console.log(store,22)
store.subscribe(() => console.log('store',store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
	<Provider store={store}>
		<Apps />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
