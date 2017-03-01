// @flow


const login = (email, password) => {
  if (!email || !password) {
    return { ok: false } // Fail - Unable to connect to SMARTBOX Server
  }

  if (email !== 'aaa' || password !== 'bbb') {
    const data = require('../Fixtures/login-failure.json')
    return { ok: false, problem: 'CLIENT_ERROR', data } // Fail - Invalid credentials
  }

  const data = require('../Fixtures/login-success.json')
  return { ok: true, data } // Success
}

const structure = () => {
  // console.tron.log(`FixtureApi structure()`)
  const data = require('../Fixtures/structure.json')
  return { ok: true, data }
}

/**
 * digitalSTROM
 */
const callScene = (token, id, groupID, sceneNumber) => {
  return { ok: true, data: { ok: true } }
}

/**
 * GlobalCache
 */
const command = (token, command) => {
  return { ok: true }
}

/**
 * WeatherApi - Functions return fixtures
 */
const getCity = (city: string) => {
  // This fixture only supports Boise or else returns toronto
  const data = city.toLowerCase() === 'boise' ? require('../Fixtures/city-boise.json') : require('../Fixtures/city-toronto.json')
  return { ok: true, data }
}


export default {
  login,
  structure,
  structureRefresh: structure,
  ds: { callScene },
  gc: { command },
  getCity
}
