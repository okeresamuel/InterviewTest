import { createSlice } from "@reduxjs/toolkit"
import {get__transport, post__transport} from "./transportQueueActions"

const initialState={
 TransportQueue: [],
 error:false,
 loading:false,
 success:false,
 message:false
}

const transportQueue = createSlice({
    name:"transportQueue",
    initialState,
    reducers:{
      reset: (state)=>{
      state.TransportQueue = []
      state.error = false
      state.loading = false
      state.success = false
      state.message = false
      }
    },

    extraReducers:{
    //get transportation queue
    [get__transport.pending]:(state, action) =>{
      state.loading = true
      state.error = false
      state.message = false
      state.success = false
    },
    [get__transport.fulfilled]:(state, action) =>{
      state.TransportQueue = action.payload 
      state.loading = false
      state.error = false
      state.success = true
    },
    [get__transport.rejected]:(state, action) =>{
      state.loading = false
      state.error = true
      state.success = false
      state.message = action.payload
    },

    //post Transportation queue
    [post__transport.pending]:(state) =>{
        state.loading = true
        state.error = false
        state.message = false
        state.success = false
      },
      [post__transport.fulfilled]:(state, action) =>{
        state.loading = false
        state.error = false
        state.success = true
      },
      [post__transport.rejected]:(state, action) =>{
        state.loading = false
        state.error = true
        state.success = false
        state.message = action.payload
      }
      

    }

}) 

export default transportQueue.reducer
export const {reset} = transportQueue.actions