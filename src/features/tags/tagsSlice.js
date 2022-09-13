
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTags } from './tagsAPI';

 const initialState={
    isLoading:false,
    tags:[],
    isError:false,
    error:''

 }

//  create async thunk 
export const fetchTags=createAsyncThunk(
    'tags/fetchTags', async()=>{
        const tags = await getTags();
        return tags


    }
)




 export const tagsSlice=createSlice({
    name:'tags',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTags.pending,(state)=>{
            state.isError=false
            state.isLoading=true
           


        })
        .addCase(fetchTags.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.tags=action.payload

           


        })
        .addCase(fetchTags.rejected,(state,action)=>{
            state.isError=true
            state.error=action.error?.message
            state.isLoading=false
            state.tags=[]
           


        })

    }


 })
 export default tagsSlice.reducer ;