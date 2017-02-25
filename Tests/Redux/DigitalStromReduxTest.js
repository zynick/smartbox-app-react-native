import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/DigitalStromRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.digitalStromRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.digitalStromSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.digitalStromFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
