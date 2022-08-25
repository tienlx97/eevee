import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import { useTocHighlight } from '@feature/blog/index';
import { Spinner } from '@components/spinner-2/index';
import { Heading } from '@eevee/react-mdx-comp';
import type { Toc } from 'typings/my-mdx/index';

const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundColor: tokens.bg6,
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalL),
    ...shorthands.borderRadius('14px'),
    ...shorthands.borderColor(tokens.bg6),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
  },

  tocHeading: {
    color: tokens.f9,
    fontWeight: 800,
    marginBottom: tokens.spacingVerticalM,
    lineHeight: tokens.lineHeightBase400,
  },

  tocList: {
    overflowY: 'scroll',
    maxHeight: '45vh',
    width: '100%',
    paddingRight: tokens.spacingHorizontalL,
    boxSizing: 'content-box',
    scrollbarTrackColor: tokens.bg6,
    scrollbarColor: tokens.bg6,
  },

  liHeading: {
    fontSize: tokens.fontSizeBase200,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    listStyleType: 'none',
  },

  ['1']: {
    '--font-size-px': 15,
    paddingLeft: '5px',
  },

  ['2']: {
    paddingLeft: '20px',
    marginTop: '3px',
    '--font-size-px': 14,
  },

  ['3']: {
    marginTop: '3px',
    '--font-size-px': 12,
    paddingLeft: '35px',
  },

  hidden: {
    visibility: 'hidden',
  },

  textNotSelected: {
    color: tokens.f1,
  },

  textSelected: {
    color: tokens.f3,
    fontWeight: 700,
  },

  text: {
    // 'block hover:text-link dark:hover:text-link-dark leading-normal py-2',
    display: 'block',
    fontSize: 'calc(var(--font-size-px) / 16 * 1rem)',
    opacity: 0.8,
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',

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
    height: '125px',
    width: '100%',
  },
});

export const TocSkeleton = () => {
  const styles = useTocSkeleton();

  return (
    <div className={styles.root}>
      <div className={styles.tocList}>
        <Spinner />
      </div>
    </div>
  );
};

type TocProps = {
  toc: Toc[];
};

export const TocBeta = ({ toc }: TocProps) => {
  const styles = useStyles();
  const { currentIndex } = useTocHighlight();

  const selectedIndex = Math.min(currentIndex, toc.length - 1);

  return (
    <div className={styles.root}>
      <Heading as="h2" type="section-title" className={styles.tocHeading}>
        Table of Contents
      </Heading>
      <div className={styles.tocList}>
        <li className={mergeClasses(styles.liHeading, styles[1])}>
          <a
            className={mergeClasses(selectedIndex === -1 ? styles.textSelected : styles.textNotSelected, styles.text)}
            href={'#'}
          >
            Overview
          </a>
        </li>
        {toc &&
          toc.length > 0 &&
          toc.map((h, i) => {
            return (
              <li
                key={`heading-${h.url}-${i}`}
                className={mergeClasses(
                  styles.liHeading,
                  h?.depth === 1 && styles[1],
                  h?.depth === 2 && styles[2],
                  h.depth > 3 && styles.hidden,
                )}
              >
                <a
                  className={mergeClasses(
                    selectedIndex === i ? styles.textSelected : styles.textNotSelected,
                    styles.text,
                  )}
                  href={h.url}
                >
                  {h.value}
                </a>
              </li>
            );
          })}
      </div>
    </div>
  );
};
