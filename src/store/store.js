import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './features/homeSlice'
import collectionReducer from './features/collectionSlice'

export const store = configureStore({
    reducer: {
        homeSlice: homeReducer,
        collection: collectionReducer
    },
})