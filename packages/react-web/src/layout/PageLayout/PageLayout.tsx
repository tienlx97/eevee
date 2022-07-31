import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';

import { PageLayoutProps } from './Page.types';
import { usePageLayout } from './usePageLayout';
import { usePageLayoutStyles } from './usePageLayoutStyles';
import { renderPageLayout } from './renderPageLayout';

export const PageLayout: ForwardRefComponent<PageLayoutProps> = React.forwardRef(
  (props: PageLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const state = usePageLayout(props, ref);

    usePageLayoutStyles(state);

    return renderPageLayout(state);
  },
) as ForwardRefComponent<PageLayoutProps>;

PageLayout.displayName = 'PageLayout';
