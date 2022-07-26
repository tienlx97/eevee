import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { Toc as TocType } from 'typings/my-mdx/index';
import { Heading } from '@eevee/react-mdx-comp';
import { getStylesForDepth, throttle } from './utils';
import { useBlogContext } from '../../context/BlogContext';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  toc: {
    color: tokens.f9,
    marginBottom: '16px',
    textTransform: 'uppercase',
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

export const Toc = () => {
  const styles = useStyles();
  const { content } = useBlogContext();

  const blog = content?.read();

  const largeEnoughHeadings = blog?.toc.filter(h => h.depth <= 2);

  const activeHeading = useActiveHeading(largeEnoughHeadings);

  React.useEffect(() => {
    if (!content) {
      return;
    }
  }, [content]);

  return largeEnoughHeadings ? (
    <div className={styles.root}>
      <div style={{ display: 'flex' }}>
        <Heading as="h2" type="section-title" className={styles.toc}>
          Table of Contents
        </Heading>
        <div
          style={{
            flexGrow: 1,
            alignSelf: 'center',
            marginLeft: '10px',
            height: '1px',
            backgroundColor: 'var(--f9)',
          }}
        />
      </div>
      <a
        //
        href="#introduction"
        className={styles.contentLinkHeading}
        style={getStylesForDepth(1, !activeHeading)}
      >
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
  ) : (
    <></>
  );
};

const useActiveHeading = (headings?: TocType[]) => {
  const [activeHeadingId, setActiveHeading] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (!headings) {
      return;
    }

    const handleScroll = throttle(() => {
      // If we're all the way at the top, there is no active heading.
      // This is done because "Introduction", the first link in the TOC, will
      // be active if `heading` is `null`.
      if (window.pageYOffset === 0) {
        return setActiveHeading(undefined);
      }

      // There HAS to be a better single-step algorithm for this, but I can't
      // think of it. So I'm doing this in 2 steps:
      //
      // 1. Are there any headings in the viewport right now? If so, pick the
      //    top one.
      // 2. If there are no headings in the viewport, are there any above
      //    the viewport? If so, pick the last one (most recently scrolled out
      //    of view)
      //
      // If neither condition is met, I'll assume I'm still in the intro,
      // although this would have to be a VERY long intro to ever be true.

      let headingBoxes = headings.map(({ url }) => {
        const elem = document.querySelector(url);

        if (!elem) {
          return null;
        }

        return { url, box: elem.getBoundingClientRect() };
      });

      headingBoxes = headingBoxes.filter(box => !!box);

      // The first heading within the viewport is the one we want to highlight.
      // Because our heading obscures the top ~100px of the window, I'm
      // considering that range out-of-viewport.
      const TOP_OFFSET = 120;
      let firstHeadingInViewport = headingBoxes.find(item => {
        return item!.box.bottom > TOP_OFFSET && item!.box.top < window.innerHeight;
      });

      // If there is no heading in the viewport, check and see if there are any
      // above the viewport.
      if (!firstHeadingInViewport) {
        const reversedBoxes = [...headingBoxes].reverse();

        firstHeadingInViewport = reversedBoxes.find(item => {
          return item!.box.bottom < TOP_OFFSET;
        });
      }

      if (!firstHeadingInViewport) {
        setActiveHeading(undefined);
      } else if (firstHeadingInViewport.url !== activeHeadingId) {
        setActiveHeading(firstHeadingInViewport.url);
      }
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeHeadingId, headings]);

  return activeHeadingId;
};
