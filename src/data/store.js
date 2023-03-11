import { configureStore } from "@reduxjs/toolkit"
import imageApiSliceReducer from "../reducers/imageApi.reducer"

export const store = configureStore({
  reducer: {
    apiSetter: imageApiSliceReducer,
  },
})
