import { createSlice } from '@reduxjs/toolkit';
import profileMock from './profileMock';
import repositoriesMock from './repositoriesMock';

const initialState = {
  userName: "imarmendes",
  profile: profileMock,
  repositories: repositoriesMock,
  findHistory: []
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return {...state,
        userName: action.payload.userName,
        profile: action.payload.profile,
        repositories: action.payload.repos,
        findHistory: [...state.findHistory, action.payload.userName]
      }
    },    
  },
})

export const { setUserInfo } = generalSlice.actions

export default generalSlice.reducer