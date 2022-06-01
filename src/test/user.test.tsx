/* eslint-disable */
import '@testing-library/jest-dom'
import reducer, { userAction } from '../store/users'

describe('User state test in store', () => {
  test('should return the initial state', () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({ users: '' })
  })

  test('should set users', () => {
    const previousState = { users: '' }
    const expectedState = { users: 'eve.holt@reqres.in' }

    expect(
      reducer(previousState, userAction.setUser('eve.holt@reqres.in'))
    ).toEqual(expectedState)
  })
})
