import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/DsCallSceneRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.dsCallSceneRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.dsCallSceneSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.dsCallSceneFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
