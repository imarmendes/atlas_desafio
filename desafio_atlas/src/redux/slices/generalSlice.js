import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: "",
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.user = action.payload
    },    
  },
})

// Action creators are generated for each case reducer function
export const { setUserName } = generalSlice.actions

export default generalSlice.reducer