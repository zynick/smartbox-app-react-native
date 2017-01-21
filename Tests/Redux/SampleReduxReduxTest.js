import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SampleReduxRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.sampleReduxRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.sampleReduxSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.sampleReduxFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
