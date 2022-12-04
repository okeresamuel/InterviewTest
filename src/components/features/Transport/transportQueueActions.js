import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const get__transport = createAsyncThunk("get_transportQueue", async(_, {rejectWithValue})=>{
   try {
    
    const response = await axios.get("http://localhost:5000/App")
    console.log("resp:", response)
    return response.data
   } catch (error) {
     return rejectWithValue(error.response.data)
   }
})

export const post__transport = createAsyncThunk("post_transportQueue", async(data, {rejectWithValue})=>{
    try {
    axios.post("http://localhost:5000/App", data)
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
})