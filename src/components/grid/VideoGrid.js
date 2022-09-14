import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoGridItem from './VideoGridItem';
import Loading from '../ui/Loading';

const VideoGrid = () => {
    const {tags,search}=useSelector((state)=>state.filter)
    
    const dispatch=useDispatch()
    const {isLoading,videos,isError,error}=useSelector(state=>state.videos)

    useEffect(()=>{
        dispatch(fetchVideos({tags,search}))

    },[dispatch,tags,search])

      // decide what to render
      let content;

      if (isLoading) content = <Loading />;
      if (!isLoading && isError)
          content = <div className="col-span-12">{error}</div>;
  
      if (!isError && !isLoading && videos?.length === 0) {
          content = <div className="col-span-12">No videos found!</div>;
      }
  
      if (!isError && !isLoading && videos?.length > 0) {
          content = videos.map((video) => (
              <VideoGridItem key={video.id} video={video} />
          ));
      }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* single video  */}
                  {content}


                    {/* error section */}
                    {/* <div className="col-span-12">some error happened</div>  */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;