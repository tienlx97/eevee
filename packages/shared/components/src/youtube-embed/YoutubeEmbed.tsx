import React from 'react';

interface IYoutubeEmbed {
  title?: string;
  src?: string;
  width?: string | number;
  height?: string | number;
}

const YoutubeEmbed = ({
  title,
  width = 560,
  height = 315,
  src,
}: IYoutubeEmbed) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ maxWidth: 'calc(100vw - 32px)' }}
    ></iframe>
  );
};

export default YoutubeEmbed;
