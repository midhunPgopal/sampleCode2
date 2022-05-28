import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataRedux'

export const store = configureStore({
    reducer: {
        data : dataReducer
    }
})