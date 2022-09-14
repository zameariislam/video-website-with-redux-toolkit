import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { tagSeleted, tagRemoved } from '../../features/filter/filterSlice'




const Tag = ({ title }) => {


    const dispatch = useDispatch()
    const { tags } = useSelector(state => state.filter)
    const isSlected = tags.includes(title)?true:false

    const style=isSlected?'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
    :"bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

    const handleSelect=()=>{
        if(isSlected){
            dispatch(tagRemoved(title))
        }
        else{
            dispatch(tagSeleted(title))
        }

    }




    return (
        <div onClick={handleSelect}
            className={style}
        >
            {title}
        </div>



    );
};


//  selected 
            <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
                redux
            </div>



export default Tag;