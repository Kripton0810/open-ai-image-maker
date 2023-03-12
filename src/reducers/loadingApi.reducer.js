import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  isLoading: false,
  isFirst: false,
}

export const loadingApiSlice = createSlice({
  name: "loadingApi",
  initialState,
  reducers: {
    isFirstSetter: (state) => {
      if (state.isFirst === false) {
        state.isFirst = true
      }
    },

    isLoadingSetterOn: (state) => {
      state.isLoading = true
    },
    isLoadingSetterOff: (state) => {
      state.isLoading = false
    },
  },
})

export const { isFirstSetter, isLoadingSetterOn, isLoadingSetterOff } =
  loadingApiSlice.actions

export default loadingApiSlice.reducer
