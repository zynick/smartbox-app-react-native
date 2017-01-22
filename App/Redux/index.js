// @flow

import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        temperature: require('./TemperatureRedux').reducer,
        login: require('./LoginRedux').reducer,
        logintwo: require('./LogintwoRedux').reducer,
        search: require('./SearchRedux').reducer
    });

    const store = configureStore(rootReducer, rootSaga);

    // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = combineReducers({
                temperature: require('./TemperatureRedux').reducer,
                login: require('./LoginRedux').reducer,
                logintwo: require('./LogintwoRedux').reducer,
                search: require('./SearchRedux').reducer
            });
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
