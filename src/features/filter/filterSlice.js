
import {  createSlice } from '@reduxjs/toolkit';


 const initialState={
    tags:[],
    search:''
   

 }





 export const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{
        tagSeleted:(state,action)=>{
            state.tags.push(action.payload)


        },
        tagRemoved:(state,action)=>{
           let indexToRemove=state.tags.indexOf(action.payload)
           if(indexToRemove!==-1){
            state.tags.splice(indexToRemove,1)

           }

        

        },
        searched:(state,action)=>{

          state.search=action.payload
 
            }
 
         
 
         }
          

    }

  

 )
 export default filterSlice.reducer
 export const {tagSeleted,tagRemoved,searched}=filterSlice.actions
 