// @flow

export default {

  login: (email, password) => {
    const data = require('../Fixtures/login.json')
    return { ok: true, data }
  },

  ds: {
    zones: () => {
      console.tron.log(`FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFixtureApi ds`)
      const data = require('../Fixtures/ds-zones.json')
      return { ok: true, data }
    }
  },

  gc: {
    settings: () => {
      console.tron.log(`FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFixtureApi gc`)
      const data = require('../Fixtures/gc-settings.json')
      return { ok: true, data }
    }
  },

  // WeatherApi - Functions return fixtures
  getCity: (city: string) => {
    // This fixture only supports Boise or else returns toronto
    const data = city.toLowerCase() === 'boise' ? require('../Fixtures/boise.json') : require('../Fixtures/toronto.json')
    return { ok: true, data }
  }
}
