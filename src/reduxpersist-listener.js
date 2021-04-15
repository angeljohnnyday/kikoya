import { getStoredState, REHYDRATE } from 'redux-persist'

const crossBrowserListener = (store, persistConfig) => async () => {
    const state = await getStoredState(persistConfig);
    store.dispatch({ type: REHYDRATE, key: persistConfig.key, payload: state })
}

export default crossBrowserListener