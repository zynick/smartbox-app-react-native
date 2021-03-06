import { put, select } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'
// import TemperatureActions from '../Redux/TemperatureRedux'
// import { is } from 'ramda'

// // exported to make available for tests
// export const selectTemperature = state => state.temperature.temperature

// process STARTUP actions
export function* startup (api, action) {
  // // straight-up string logging
  // console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

  // // logging an object for better clarity
  // console.tron.log({
  //     message: 'pass objects for better logging',
  //     someGeneratorFunction: selectTemperature~
  // })

  // // fully customized!
  // const subObject = { a: 1, b: [1, 2, 3], c: true }
  // subObject.circularDependency = subObject // osnap!
  // console.tron.display({
  //     name: '🔥 IGNITE 🔥',
  //     preview: 'You should totally expand this',
  //     value: {
  //         '💃': 'Welcome to the future!',
  //         subObject,
  //         someInlineFunction: () => true,
  //         someGeneratorFunction: startup,
  //         someNormalFunction: selectTemperature
  //     }
  // })

  // // only fetch new temps when we don't have one yet
  // const temp = yield select(selectTemperature)
  // if (!is(Number, temp)) {
  //   yield put(TemperatureActions.temperatureRequest('San Francisco'))
  // }

  yield put(StartupActions.startupComplete())
}
