import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './modules/auctions';

const middlewareEnhancer = applyMiddleware(thunk);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducer, composedEnhancers);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./modules/auctions', () => store.replaceReducer(reducer));
}

export default store;
