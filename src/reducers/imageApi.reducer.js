import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  value: null,
}

export const imageApiSlice = createSlice({
  name: "imageApi",
  initialState,
  reducers: {
    apiSetter: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { apiSetter } = imageApiSlice.actions

export default imageApiSlice.reducer
