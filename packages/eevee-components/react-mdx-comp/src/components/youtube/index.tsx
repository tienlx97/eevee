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
}

export const YouTube: React.FunctionComponent<IYouTubeProps> = ({
  youTubeId,
  youTubePlaylistId,
  title,
  aspectRatio = '16:9',
}: IYouTubeProps) => {
  const [loading, setLoading] = React.useState(true);

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
          // width={width}
          // height={height}
          src={`https://www.youtube.com/embed/${youTubeId ?? youTubePlaylistId}`}
          title={`${title ?? youTubeId ?? youTubePlaylistId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </GeneralObserver>
  );
};
