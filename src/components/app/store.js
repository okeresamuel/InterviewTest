import { configureStore } from "@reduxjs/toolkit"
import transportQueue from "../features/Transport/transportQueueSlice"

export const store = configureStore({
 reducer:{
    transport:transportQueue
 }
})