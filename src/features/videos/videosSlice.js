
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

 const initialState={
    isLoading:false,
    videos:[],
    isError:false,
    error:''

 }

//  create async thunk 
export const fetchVideos=createAsyncThunk(
    'videos/fetchVideos', async()=>{
        const videos = await getVideos();
        return videos


    }
)




 export const videosSlice=createSlice({
    name:'videos',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideos.pending,(state)=>{
            state.isError=false
            state.isLoading=true
           


        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.videos=action.payload

           


        })
        .addCase(fetchVideos.rejected,(state,action)=>{
            state.isError=true
            state.error=action.error?.message
            state.isLoading=false
            state.videos=[]
           


        })

    }


 })
 export default videosSlice.reducer;