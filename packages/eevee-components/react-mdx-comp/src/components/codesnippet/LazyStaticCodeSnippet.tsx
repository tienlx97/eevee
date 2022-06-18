import * as React from 'react';

import StaticCodeWrapper from './StaticCodeWrapper';
import type { StaticCodeSnippetProps } from './CodeSnippet.types';

const LazyStaticCodeSnippet = (props: StaticCodeSnippetProps) => {
  const [Component, setComponent] = React.useState(() => StaticCodeWrapper);

  React.useEffect(() => {
    import('./StaticCodeSnippet').then(Thing => setComponent(() => Thing.staticCodeSnippet));
  }, []);

  return <Component {...props} />;
};

export default LazyStaticCodeSnippet;
