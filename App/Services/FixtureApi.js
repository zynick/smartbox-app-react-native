// @flow

export default {

  login: (email, password) => {
    const data = require('../Fixtures/login.json')
    return { ok: true, data }
  },

  structure: () => {
    console.tron.log(`FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFixtureApi structure`)
    const data = require('../Fixtures/structure.json')
    return { ok: true, data }
  },

  // WeatherApi - Functions return fixtures
  getCity: (city: string) => {
    // This fixture only supports Boise or else returns toronto
    const data = city.toLowerCase() === 'boise' ? require('../Fixtures/city-boise.json') : require('../Fixtures/city-toronto.json')
    return { ok: true, data }
  }
}
