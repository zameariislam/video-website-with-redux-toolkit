import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../../features/video/videoSlice';
import VideoDescription from '../description/VideoDescription';
import VideoPlayer from '../description/VideoPlayer';
import RelatedVideoList from '../list/RelatedVideoList';
import Loading from '../ui/Loading';


const Video = () => {

    const dispatch = useDispatch()
    const { video, isLoading, isError, error } = useSelector((state) => state.video)
    const { videoId } = useParams()
    console.log(videoId)

    useEffect(() => {
        dispatch(fetchVideo(videoId))

    }, [dispatch, videoId])
    const { link, id, title, tags } = video

    // decide what to render 
    let content = null
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">No video Found</div>


    if (!isLoading && !isError && video?.id) {
        content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                {/* video player */}
                <VideoPlayer link={link} />


                {/* video description  */}
                <VideoDescription  video={video} />
            </div>

            {/* related videos  */}

            <RelatedVideoList id={id} tags={tags} />
        </div>
    }

    return (
        <div>


            <section className="pt-6 pb-20">
                <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}

                </div>
            </section>



        </div>
    );
};

export default Video;