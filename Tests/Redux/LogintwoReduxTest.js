import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/LogintwoRedux'

test('attempt', (t) => {
  const state = reducer(INITIAL_STATE, Actions.logintwoRequest('u', 'p'))

  t.true(state.fetching)
})

test('success', (t) => {
  const state = reducer(INITIAL_STATE, Actions.logintwoSuccess('hi'))

  t.is(state.username, 'hi')
})

test('failure', (t) => {
  const state = reducer(INITIAL_STATE, Actions.logintwoFailure(69))

  t.false(state.fetching)
  t.is(state.error, 69)
})

test('logout', (t) => {
  const loginState = reducer(INITIAL_STATE, Actions.logintwoSuccess('hi'))
  const state = reducer(loginState, Actions.logouttwo())

  t.falsy(state.username)
})
