import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  value: null,
  errors: null,
}

export const imageApiSlice = createSlice({
  name: "imageApi",
  initialState,
  reducers: {
    apiSetter: (state, action) => {
      state.value = action.payload
    },
    apiErrorSetter: (state, action) => {
      state.errors = action.payload
    },
  },
})

export const { apiSetter, apiErrorSetter } = imageApiSlice.actions

export default imageApiSlice.reducer
