import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import products from './ducks/products'
import user from './ducks/user'

const rootReducer = combineReducers({
    products: products,
    user: user
});

const persistConfig = {
    key: 'root',
    storage,
}

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer, 
    composeEnhancers(
        applyMiddleware( ...middlewares ) // applyMiddleware(thunk)
    )
);
const persistor = persistStore(store);

export { store, persistor, persistConfig }