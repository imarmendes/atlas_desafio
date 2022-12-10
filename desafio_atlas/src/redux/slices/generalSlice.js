import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: "",
  profile: [],
  repositories: [],
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(setUserInfoAsync.fulfilled, (state, action) => {
  //       state.userName = action.payload.userName;
  //       state.profile = action.payload.profile;
  //       state.repositories = action.payload.repos;
  //       state.findHistory = [...state.findHistory, action.payload.userName]
  //     })
        
  //     .addCase(setUserInfoAsync.pending, (state, action) => {
  //       console.log("Loading");
  //     })

  //     .addCase(setUserInfoAsync.rejected, (state, action) => {
  //       console.log("rejected");
  //       throw Error()
  //     });
  //   }
})

export const { setUserInfo } = generalSlice.actions

export default generalSlice.reducer