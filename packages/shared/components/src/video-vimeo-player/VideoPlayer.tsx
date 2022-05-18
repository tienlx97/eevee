// import React from 'react';
// import styled from 'styled-components';
// import Player from '@vimeo/player';

// function VideoPlayer({
//   playbackId,
//   aspectRatio = 1600 / 2560,
//   fillEdges,
//   ...delegated
// }) {
//   const iframeRef = React.useRef(null);

//   const playerRef = React.useRef(null);

//   // HACK: pip should be an option passed to Player, but it doesn't
//   // seem to work for me, so I can't verify that that works.
//   // Presumably I'm using the wrong browser or OS or something.
//   const videoUrl = `https://player.vimeo.com/video/${playbackId}?pip=true`;

//   React.useEffect(() => {
//     if (!playerRef.current) {
//       playerRef.current = new Player(iframeRef.current);
//     }

//     const player = playerRef.current;

//     player.on('ended', () => {
//       player.exitFullscreen();
//     });

//     return () => {
//       player.off('ended');
//     };
//   }, []);

//   return (
//     <Wrapper
//       {...delegated}
//       style={{
//         // iFrames are bad at auto-sizing.
//         // To ensure a consistent aspect ratio, use the
//         // padding-bottom trick.
//         paddingBottom: `${aspectRatio * 100}%`,
//       }}
//     >
//       {fillEdges && <Filler />}
//       <Iframe
//         ref={iframeRef}
//         src={videoUrl}
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//       />
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   position: relative;
//   width: auto;
//   height: 0px;
//   border-radius: 4px;
//   overflow: hidden;
//   margin-bottom: 48px;

//   /* prettier-ignore */
//   box-shadow:
//     0 1.2px 1.2px rgba(0, 0, 0, 0.02),
//     0 2.9px 3px rgba(0, 0, 0, 0.028),
//     0 5.5px 5.6px rgba(0, 0, 0, 0.035),
//     0 9.8px 10.1px rgba(0, 0, 0, 0.042),
//     0 18.4px 18.8px rgba(0, 0, 0, 0.05),
//     0 44px 45px rgba(0, 0, 0, 0.07);
// `;

// // For some reason, screenflow sometimes creates a 1px black
// // outline. Let's hide it.
// const Filler = styled.div`
//   position: absolute;
//   top: -1px;
//   left: -1px;
//   right: -1px;
//   bottom: -1px;
//   z-index: 2;
//   pointer-events: none;
//   border: 2px solid white;
//   border-radius: 4px;
// `;

// const Iframe = styled.iframe`
//   position: absolute;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// export default VideoPlayer;
