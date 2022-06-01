import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  users: string
}

const initialUserState: UserState = {
  users: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {
    setUser(state: UserState, action: { payload: string }): void {
      state.users = action.payload
    },
  },
})

export const userAction = usersSlice.actions

export default usersSlice.reducer
