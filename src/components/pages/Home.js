import React from 'react';
import VideoGrid from '../grid/VideoGrid';

import Pagination from '../Pagination/Pagination';
import Tags from '../Tags/Tags';



const Home = () => {
    return (
        <>
       
        <Tags/>
        <VideoGrid/>
        <Pagination/>
       
            
        </>
    );
};

export default Home;