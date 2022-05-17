/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ILiveCodeSnippet } from './types';

const LazyLiveCodeSnippet = (props: ILiveCodeSnippet) => {
  const [Component, setComponent] =
    React.useState<(prop: ILiveCodeSnippet) => JSX.Element>();

  React.useEffect(() => {
    import('./LiveCodeSnippet').then((Thing) =>
      setComponent(() => Thing.default)
    );
  }, []);
  return Component != null ? <Component {...props} /> : <></>;
};

export default LazyLiveCodeSnippet;
