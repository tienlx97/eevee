/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import VideoGif from '../VideoGif';

const VideoGifDebug = () => {
  return (
    <>
      <VideoGif
        noBorder={true}
        src="https://storage.googleapis.com/joshwcomeau/chrome-zoom.mp4"
        maxWidth={1920 / 2}
      />
    </>
  );
};

export default VideoGifDebug;
