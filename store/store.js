import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history'

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};
// const history = createBrowserHistory();

const persistConfig = {
    key: 'martfury',
    storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist', 'shipping'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware, thunk])
    );
    // const store = createStore(
    //     rootReducer,
    //     initialState,
    //     bindMiddleware([sagaMiddleware, thunk])
    // );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
