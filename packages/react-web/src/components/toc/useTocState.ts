import * as React from 'react';
import type { TocState, TocType } from './Toc.types';
import { throttle } from './utils';

export const useTocState = (state: TocState): TocState => {
  // const { toc } = state;

  const toc = [
    { value: 'Layers and groups', url: '#layers-and-groups', depth: 1 },
    { value: 'Fixing our example', url: '#fixing-our-example', depth: 1 },
    { value: 'Creating stacking contexts', url: '#creating-stacking-contexts', depth: 1 },
    { value: 'A common misconception about z-index', url: '#a-common-misconception-about-z-index', depth: 1 },
    { value: 'Hold on a minute…', url: '#hold-on-a-minute', depth: 1 },
  ] as TocType[];

  const largeEnoughHeadings = toc.filter(h => h.depth <= 2);
  state.headingsWithIds = largeEnoughHeadings;
  state.activeHeadingId = useActiveHeading(largeEnoughHeadings);
  return state;
};

const useActiveHeading = (headings: TocType[]) => {
  const [activeHeadingId, setActiveHeading] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
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
        const elem = document.querySelector(`#${url}`);

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
