// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    structure: require('./StructureRedux').reducer,
    startup: require('./StartupRedux').reducer,
    dsCallScene: require('./DsCallSceneRedux').reducer,
    gcSendCommand: require('./GcSendCommandRedux').reducer
  })

  const store = configureStore(rootReducer, rootSaga)

  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = combineReducers({
        login: require('./LoginRedux').reducer,
        search: require('./SearchRedux').reducer,
        structure: require('./StructureRedux').reducer,
        startup: require('./StartupRedux').reducer,
        dsCallScene: require('./DsCallSceneRedux').reducer,
        gcSendCommand: require('./GcSendCommandRedux').reducer
      })
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
