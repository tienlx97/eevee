/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Pause, Play } from '../icons';

import { ConfigContext } from '../config-context';

import { usePrefersReducedMotion } from '@vaporeon/hooks';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    ...shorthands.margin('36px', 'auto', '64px'),
    boxSizing: 'content-box',
    ...shorthands.borderRadius('5px'),
  },

  caption: {
    paddingTop: '8px',
    fontSize: '15px',
    textAlign: 'center',
  },

  video: {
    position: 'relative',
    display: 'block',
    maxWidth: '100%',
    ...shorthands.margin('auto'),
    ...shorthands.borderRadius('3px'),
    cursor: 'pointer',
  },

  // For some reason, screenflow sometimes creates a 1px black
  // outline. Let's hide it.
  filler: {
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    pointerEvents: 'none',
    ...shorthands.border('3px', 'solid', 'white'),
    ...shorthands.borderRadius('4px'),
  },

  pauseButton: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    ...shorthands.margin('auto'),
    width: '64px',
    height: '64px',
    backgroundColor: 'hsl(0deg 0% 0% / 0.5)',
    ...shorthands.borderRadius('50%'),
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // transition: 'opacity 500ms',
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
    pointerEvents: 'none',

    '& i, & svg': {
      display: 'block !important',
    },
  },
});

const FANCY_SHADOW = `
  0 1.3px 2.5px -3px rgba(0, 0, 0, 0.02),
  0 3.1px 6.1px -3px rgba(0, 0, 0, 0.028),
  0 5.9px 11.4px -3px rgba(0, 0, 0, 0.035),
  0 10.5px 20.3px -3px rgba(0, 0, 0, 0.042),
  0 19.6px 38px -3px rgba(0, 0, 0, 0.05),
  0 47px 91px -3px rgba(0, 0, 0, 0.07)
`;

export interface IVideoGif extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  darkSrc?: string;
  maxWidth?: string | number;
  minWidth?: string | number;
  alt?: string;
  caption?: React.ReactNode;
  noBorder?: boolean;
  includeShadow?: boolean;
  fillEdges?: boolean;
  backdrop?: string | number;
}

function VideoGif({
  src,
  darkSrc,
  maxWidth,
  minWidth,
  alt,
  caption,
  noBorder,
  includeShadow,
  fillEdges,
  backdrop,
  style = {},
  className,
  ...delegated
}: IVideoGif) {
  const styles = useStyles();

  const videoRef = React.useRef<HTMLVideoElement>(null);

  const { colorMode } = React.useContext(ConfigContext);

  const [isPaused, setIsPaused] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);

  const actualSrc = colorMode === 'light' ? src : darkSrc || src;

  const prefersReducedMotion = usePrefersReducedMotion();

  const autoplay = !prefersReducedMotion;

  function handleClick() {
    if (videoRef.current?.paused) {
      setIsPaused(false);
      setShowControls(false);
      videoRef.current?.play();
    } else {
      setIsPaused(true);
      videoRef.current?.pause();
    }
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        maxWidth,
        border: noBorder ? 'undefined' : `1px solid var(--color-gray-200)`,
        padding: noBorder ? 0 : 10,
        background: backdrop,
      }}
    >
      <video
        className={mergeClasses(styles.video, className)}
        ref={videoRef}
        autoPlay={autoplay}
        loop
        controls={false}
        muted={autoplay}
        playsInline={autoplay}
        src={actualSrc}
        aria-label={alt}
        style={{
          ...style,
          boxShadow: includeShadow ? FANCY_SHADOW : undefined,
        }}
        onClick={handleClick}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        {...delegated}
      />

      {fillEdges && <div className={styles.filler} />}

      <div
        className={styles.pauseButton}
        style={{ opacity: showControls ? 1 : 0 }}
      >
        {isPaused ? <Play size={24} /> : <Pause size={24} />}
      </div>

      {caption && (
        <div
          className={styles.caption}
          style={{ marginTop: includeShadow ? 16 : 0 }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

// const Wrapper = styled.div`
//   position: relative;
//   margin: 36px auto 64px;
//   box-sizing: content-box;
//   border-radius: 5px;
// `;

// const Caption = styled.div`
//   padding-top: 8px;
//   font-size: 15px;
//   text-align: center;
// `;

// const Video = styled.video`
//   position: relative;
//   display: block;
//   max-width: 100%;
//   margin: auto;
//   border-radius: 3px;
//   cursor: pointer;
// `;

// For some reason, screenflow sometimes creates a 1px black
// outline. Let's hide it.
// const Filler = styled.div`
//   position: absolute;
//   top: -1px;
//   left: -1px;
//   right: -1px;
//   bottom: -1px;
//   pointer-events: none;
//   border: 3px solid white;
//   border-radius: 4px;
// `;

// const PauseButton = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: auto;
//   width: 64px;
//   height: 64px;
//   background: hsl(0deg 0% 0% / 0.5);
//   border-radius: 50%;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: opacity 500ms;
//   pointer-events: none;

//   i,
//   svg {
//     display: block !important;
//   }
// `;

export default VideoGif;
