import React, { forwardRef } from 'react';

import TextLink from './TextLink';
import { ILinkProps } from './Link.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostLink = (props: ILinkProps, ref?: any) => {
  return <TextLink {...props} ref={ref} />;
};

export default forwardRef(PostLink);
