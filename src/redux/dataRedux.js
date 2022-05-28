import {createSlice} from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name:"data",
    initialState: {
        currentData: null
    },
    reducers: {
        fetchingSuccess: (state, action) => {
            state.currentData = action.payload
        }
    }
})

export const { fetchingSuccess} = dataSlice.actions
export default dataSlice.reducer