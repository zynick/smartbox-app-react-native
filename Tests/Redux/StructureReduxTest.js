import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/StructureRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.structureRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.structureSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.structureFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
