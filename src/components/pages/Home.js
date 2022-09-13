import React from 'react';
import VideoGrid from '../grid/VideoGrid';
import Navbar from '../navbar/Navbar';
import Pagination from '../Pagination/Pagination';
import Tags from '../Tags/Tags';
import Footer from '../ui/Footer';

const Home = () => {
    return (
        <>
        <Navbar/>
        <Tags/>
        <VideoGrid/>
        <Pagination/>
        <Footer/>
            
        </>
    );
};

export default Home;