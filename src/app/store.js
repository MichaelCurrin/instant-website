import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import customWebsiteDataReducer from './customWebsiteDataSlice'

export default configureStore({
  reducer: {
    customWebsiteData: customWebsiteDataReducer
  },
  middleware: [...getDefaultMiddleware(), logger]
});
