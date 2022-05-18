/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PostLink from '../../link/PostLink';
import VideoGif from '../VideoGif';

const VideoGifDebug = () => {
  return (
    <>
      <VideoGif
        noBorder={true}
        src="https://storage.googleapis.com/joshwcomeau/chrome-zoom.mp4"
        maxWidth={1920 / 2}
        caption={
          <>
            Believe it or not, this is just a collection of textured divs!{' '}
            <PostLink href="https://keithclark.co.uk/labs/css-fps/">
              View Live
            </PostLink>
          </>
        }
      />
    </>
  );
};

export default VideoGifDebug;
