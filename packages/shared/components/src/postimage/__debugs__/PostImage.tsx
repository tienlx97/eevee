/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PostImage from '../PostImage';

const PostImageDebug = () => {
  return (
    <>
      <PostImage
        alt="A cat photo with a poorly-drawn moustache and halo"
        width={300}
        height={300}
        src="https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fstacking-contexts%2Fcat-layers.jpg&w=384&q=75"
      />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        👆 Post image with width/height
      </div>
      <PostImage
        alt="Screenshot of the Chrome devtools with a new pane that shows info about the element's current stacking context"
        style={{ maxWidth: 600 }}
        src="https://www.joshwcomeau.com/images/chrome-stacking-context.png"
      />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        👆 Post image without width/height
      </div>
    </>
  );
};

export default PostImageDebug;
