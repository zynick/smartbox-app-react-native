// a library to wrap and simplify api calls
import apisauce from 'apisauce'

/**
 * https://github.com/skellock/apisauce
 */

// our "constructor"
const create = (baseURL) => {

  console.tron.log(`Api baseURL: ${baseURL}`)

  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json'
    },
    timeout: 30 * 1000
  })

  // Force API Key on all requests
  // api.addRequestTransform((request) => {
  //     request.params['token'] = 'auth-token-here'
  // })

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }


  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const login = (email, password) => api.post('/v2/login', { email, password })

  const structure = token => {
    console.tron.log('Api.structure()')
    const axiosConfig = { headers: { Authorization: `Bearer ${token}` } }
    return api.get('/v2/structure', null, axiosConfig)
  }

  const structureRefresh = token => {
    const axiosConfig = { headers: { Authorization: `Bearer ${token}` } }
    return api.get('/v2/structure/refresh', null, axiosConfig)
  }


  /**
   * DigitalStrom API
   */
  const callScene = (token, id, groupID, sceneNumber) => {
    // console.tron.log(`Api.callScene() ${token}, ${id}, ${groupID}, ${sceneNumber}`)

    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const path = '/json/zone/callScene'
    const parameters = { id, groupID, sceneNumber }

    return api.post('/v2/ds/api', { path, parameters }, axiosConfig)
  }


  /**
   * Global Cache API
   */
  const command = (token, command) => {

    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    return api.post('/v2/gc/command', { command }, axiosConfig)
  }


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    login,
    structure,
    structureRefresh,
    callScene, // TODO deprecate this
    ds: {
      callScene
    },
    gc: {
      command
    }
  }
}


export default {
  create
}
