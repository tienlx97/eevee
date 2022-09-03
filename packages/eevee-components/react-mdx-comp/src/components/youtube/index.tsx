import * as React from 'react';
import { GeneralObserver } from '../general-observer/index';
import { Spinner } from '../spinner/Spinner';
import { getPadding } from './utils';

export interface IYouTubeProps {
  /** YouTube id */
  youTubeId?: string;
  /** YouTube Playlist id */
  youTubePlaylistId?: string;
  title?: string;
  /** Aspect ratio of YouTube video */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** No Cookie option */
  noCookie?: boolean;
}

export const YouTube: React.FunctionComponent<IYouTubeProps> = ({
  youTubeId,
  youTubePlaylistId,
  title,
  aspectRatio = '16:9',
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  noCookie = false,
}: IYouTubeProps) => {
  const [loading, setLoading] = React.useState(true);
  const { h, m, s } = skipTo;

  const tH = h! * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;

  const provider = noCookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const baseUrl = `${provider}/embed/`;
  const src = `${baseUrl}${
    youTubeId ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}` : `&videoseries?list=${youTubePlaylistId}`
  }`;
  return (
    <GeneralObserver>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner />
        </div>
      )}
      <div
        style={{
          display: loading ? 'none' : 'block',
          position: 'relative',
          width: '100%',
          height: 0,
          ...getPadding(aspectRatio),
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          onLoad={() => setLoading(false)}
          src={src}
          title={`${title ?? youTubeId ?? youTubePlaylistId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </GeneralObserver>
  );
};
