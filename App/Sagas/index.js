import { takeLatest, takeEvery } from 'redux-saga'
import API from '../Services/Api'
import WeatherAPI from '../Services/WeatherApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'
import ApiConfig from '../Config/ApiConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { TemperatureTypes } from '../Redux/TemperatureRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { StructureTypes } from '../Redux/StructureRedux'
import { DsCallSceneTypes } from '../Redux/DsCallSceneRedux'
import { GcSendCommandTypes } from '../Redux/GcSendCommandRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getTemperature } from './TemperatureSagas'
import { openScreen } from './OpenScreenSagas'
import { getStructure } from './StructureSagas'
import { callScene } from './DsCallSceneSagas'
import { sendCommand } from './GcSendCommandSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugSettings.useFixtures ? FixtureAPI : API.create(ApiConfig.smartboxBaseURL)
const weatherApi = DebugSettings.useFixtures ? FixtureAPI : WeatherAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(TemperatureTypes.TEMPERATURE_REQUEST, getTemperature, weatherApi),
    takeLatest(StructureTypes.STRUCTURE_REQUEST, getStructure, api),

    takeEvery(DsCallSceneTypes.DS_CALL_SCENE_REQUEST, callScene, api),
    takeEvery(GcSendCommandTypes.GC_SEND_COMMAND_REQUEST, sendCommand, api)
  ]
}
