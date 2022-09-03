import * as React from 'react';
import { GeneralObserver } from '../general-observer/index';

export interface ISpotifyProps {
  /** Spotify link */
  spotifyLink: string;
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame */
  height?: number | string;
}

export const Spotify: React.FunctionComponent<ISpotifyProps> = ({
  spotifyLink,
  width = 320,
  height = 380,
}: ISpotifyProps) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <GeneralObserver>
      {loading && (
        <div className="tweet-header">
          <div className="skeleton-line" style={{ width, height }} />
        </div>
      )}
      <iframe
        style={{ visibility: loading ? 'hidden' : 'visible' }}
        onLoad={() => setLoading(false)}
        data-testid="spotify"
        title={`spotify-${spotifyLink}`}
        className="spotify-mdx-embed"
        src={`https://open.spotify.com/embed/${spotifyLink}`}
        // width={width}
        // height={height}
        frameBorder="0"
        allow="encrypted-media"
      />
    </GeneralObserver>
  );
};
