import apisauce from 'apisauce'


const create = (baseURL) => {

  console.tron.log(`Api baseURL: ${baseURL}`)

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

  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

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


  /* DigitalStrom API */

  const callScene = (token, id, groupID, sceneNumber) => {
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


  /* Global Cache API */

  const command = (token, command) => {
    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    return api.post('/v2/gc/command', { command }, axiosConfig)
  }


  return {
    login,
    structure,
    structureRefresh,
    ds: { callScene },
    gc: { command }
  }
}


export default { create }
