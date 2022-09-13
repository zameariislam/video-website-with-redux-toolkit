import React from 'react';
import VideoDescription from '../description/VideoDescription';
import VideoPlayer from '../description/VideoPlayer';
import RelatedVideoList from '../list/RelatedVideoList';


const Video = () => {
    return (
        <div>
          

            <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                     {/* video player */}
                     <VideoPlayer/>
                   

                     {/* video description  */}
                    <VideoDescription/>
                </div>

                {/* related videos  */}

              <RelatedVideoList/>
            </div>
        </div>
    </section>

            
            
        </div>
    );
};

export default Video;