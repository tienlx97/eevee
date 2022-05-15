import React, { FunctionComponent } from 'react';
import { useFullscreen } from '../Helpers';

const UseFullScreenDebug: FunctionComponent<{
  startFullscreened?: boolean;
}> = ({ startFullscreened }) => {
  const [isFullscreened, toggleFullscreen] = useFullscreen(startFullscreened);

  return (
    <>
      <div>{isFullscreened}</div>
      <button onClick={toggleFullscreen}>Click to fullscreen</button>
    </>
  );
};

export default UseFullScreenDebug;
