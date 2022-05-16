/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import StaticCodeWrapper from './StaticCodeWrapper';
import { IStaticCodeSnippet } from './types';

const LazyStaticCodeSnippet = (props: IStaticCodeSnippet) => {
  const [Component, setComponent] = React.useState(() => StaticCodeWrapper);

  React.useEffect(() => {
    import('./StaticCodeSnippet').then((Thing) =>
      setComponent(() => Thing.default)
    );
  }, []);

  return <Component {...props} />;
};

export default LazyStaticCodeSnippet;
