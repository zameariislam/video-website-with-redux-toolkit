
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideo } from './videoAPI';

 const initialState={
    isLoading:false,
    video:{},
    isError:false,
    error:''

 }

//  create async thunk 
export const fetchVideo=createAsyncThunk(
    'video/fetchVideo', async(id)=>{
        const video = await getVideo(id);
        return video


    }
)




 export const videoSlice=createSlice({
    name:'video',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchVideo.pending,(state)=>{
            state.isError=false
            state.isLoading=true
           


        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.video=action.payload

           


        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.isError=true
            state.error=action.error?.message
            state.isLoading=false
            state.video={}
           


        })

    }


 })
 export default videoSlice.reducer;