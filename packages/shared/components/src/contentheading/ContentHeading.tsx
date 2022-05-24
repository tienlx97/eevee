/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import { LinkIcon } from '../icons';

import { slugify } from '@vaporeon/utils';

import { Heading } from '../heading';
import { VisuallyHidden } from '../button';
import { IContentHeading } from './ContentHeading.types';

// import './ContentHeading.css';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },

  anchor: {
    display: 'none',
    pointerEvents: 'none',

    '&:focus': {
      ...shorthands.outline('none'),
    },

    '@media (min-width: 769px)': {
      color: 'inherit',
      display: 'block',
      position: 'absolute',
      left: '0',
      transform: 'translateX(-150%)',
      // transition: 'opacity 250ms',
      transitionProperty: 'opacity',
      transitionDuration: '250ms',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      opacity: '0',
      scrollMarginTop: '128px',

      '&:focus': {
        opacity: 0.75,
      },
    },
  },

  iconElement: {
    pointerEvents: 'auto',
  },
});

const ContentHeading = ({
  children,
  showIcon,
  ...delegated
}: IContentHeading) => {
  const styles = useStyles();

  const anchorId = slugify(children as string);

  React.useEffect(() => {
    const numOfAnchorsWithThisId = document.querySelectorAll(
      `#${anchorId}`
    ).length;

    if (numOfAnchorsWithThisId > 1) {
      console.error(
        'Found multiple anchors on the page with this ID:',
        anchorId,
        '\n\n',
        'Please add an explicit unique "anchorId" to this Heading'
      );
    }
  }, [anchorId]);

  return (
    <div className={mergeClasses(styles.wrapper, 'ch__wrapper')}>
      <Heading {...delegated}>
        <a
          className={mergeClasses(styles.anchor, 'ch__wrapper--anchor')}
          // name={anchorId}
          id={anchorId}
          href={`#${anchorId}`}
        >
          <LinkIcon
            className={mergeClasses(
              styles.iconElement,
              'ch__wrapper--anchor--linkicon'
            )}
            style={{ opacity: showIcon ? 1 : 0 }}
            size={24}
          />
          <VisuallyHidden>Link to this heading</VisuallyHidden>
        </a>

        {children}
      </Heading>
    </div>
  );
};

export default ContentHeading;

const r = {
  h1: (props: IContentHeading) => (
    <ContentHeading type="major-heading" {...props} />
  ),
  h2: (props: IContentHeading) => (
    <ContentHeading type="normal-heading" {...props} />
  ),
  h3: (props: IContentHeading) => (
    <ContentHeading type="minor-heading" {...props} />
  ),
};

export { r };
