import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videosReducer from '../features/videos/videosSlice'
import tagsReducer from '../features/tags/tagsSlice'
import videoReducer from '../features/video/videoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos:videosReducer,
    tags:tagsReducer,
    video:videoReducer
  },
});
