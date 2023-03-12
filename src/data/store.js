import { configureStore } from "@reduxjs/toolkit"
import imageApiSliceReducer from "../reducers/imageApi.reducer"
import loadingApiSliceReducer from "../reducers/loadingApi.reducer"

export const store = configureStore({
  reducer: {
    apiSetter: imageApiSliceReducer,
    isFirstandLoading: loadingApiSliceReducer,
  },
})
