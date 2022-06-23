import * as React from 'react';
import { usePage } from './usePage';
import { usePageStyles } from './usePageStyles';
import { renderPage } from './renderPage';
import { PageProps } from './Page.types';
import { ForwardRefComponent } from '@eevee/react-utilities';

export const Page: ForwardRefComponent<PageProps> = React.forwardRef(
  (props: PageProps, ref: React.Ref<HTMLDivElement>) => {
    const state = usePage(props, ref);

    usePageStyles(state);

    return renderPage(state);
  },
) as ForwardRefComponent<PageProps>;

Page.displayName = 'Page';
