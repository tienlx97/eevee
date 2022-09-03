import * as React from 'react';
import { GeneralObserver } from '../general-observer/index';
import { Iframe } from '../layout/Iframe';

export interface ISpotifyProps {
  /** Spotify link */
  spotifyLink: string;
  /** Height for the iFrame */
  height?: number | string;
}

export const Spotify: React.FunctionComponent<ISpotifyProps> = ({ spotifyLink, height = 380 }: ISpotifyProps) => {
  return (
    <GeneralObserver>
      <Iframe
        data-testid="spotify"
        title={`spotify-${spotifyLink}`}
        className="spotify-mdx-embed"
        src={`https://open.spotify.com/embed/${spotifyLink}`}
        frameBorder="0"
        allow="encrypted-media"
        height={height}
      />
    </GeneralObserver>
  );
};
