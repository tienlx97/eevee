import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { Heading } from '@eevee/react-mdx-comp';
import { getStylesForDepth, useActiveHeading, useBlogAPISWR } from '@feature/blog/index';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  tocHeading: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  tocList: {
    overflowY: 'scroll',
    maxHeight: '45vh',
    width: '100%',
    paddingRight: '16px',
    boxSizing: 'content-box',
    scrollbarTrackColor: tokens.bg6,
    scrollbarColor: tokens.bg6,
  },

  contentLinkHeading: {
    display: 'block',
    color: tokens.f1,
    textDecorationLine: 'none',
    opacity: 0.8,
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',

    fontSize: 'calc(var(--font-size-px) / 16 * 1rem)',
    '&:hover, &:focus': {
      opacity: 1,
      // color: tokens.f8,
      transitionProperty: 'opacity',
      transitionDuration: '0ms',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
    },
  },

  // TODO add additional classes for different states and/or slots
});

const useTocSkeleton = makeStyles({
  root: {
    // TODO Add default styles for the root element
    backgroundColor: tokens.bg6,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth('1px'),
  },

  tocHeading: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: '12px',
    lineHeight: '24px',
  },

  tocList: {
    height: '300px',
    width: '100%',
  },
});

type TocProps = {
  slug?: string;
};

export const Toc = ({ slug }: TocProps) => {
  const styles = useStyles();
  const blog = useBlogAPISWR(slug);

  const largeEnoughHeadings = blog?.toc.filter(h => h.depth <= 2);
  const activeHeading = useActiveHeading(largeEnoughHeadings);

  return largeEnoughHeadings ? (
    <div className={styles.root}>
      <Heading as="h2" type="section-title" className={styles.tocHeading}>
        Table of Contents
      </Heading>
      <div className={styles.tocList}>
        <a href="#introduction" className={styles.contentLinkHeading} style={getStylesForDepth(1, !activeHeading)}>
          Introduction
        </a>
        {largeEnoughHeadings &&
          largeEnoughHeadings.map((heading, index) => (
            <a
              key={index}
              href={heading.url}
              className={styles.contentLinkHeading}
              style={getStylesForDepth(heading.depth, activeHeading === heading.url)}
            >
              {heading.value}
            </a>
          ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export const TocSkeleton = () => {
  const styles = useTocSkeleton();

  return (
    <div className={styles.root}>
      <Heading as="h2" type="section-title" className={styles.tocHeading}>
        Table of Contents
      </Heading>
      <div className={styles.tocList} />
    </div>
  );
};
