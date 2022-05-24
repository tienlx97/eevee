import React from 'react';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import TutorialLayout from './TutorialLayout';
import { makeStaticStyles, makeStyles, shorthands } from '@griffel/react';

import {
  ContentFooter,
  ContentProvider,
  Heading,
  TableOfContents,
} from '@jolteon/components';
import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { getFormattedName } from '@vaporeon/helpers';
import { useOverscrollBackground } from '@vaporeon/hooks';
import { getMdxContent } from '../../api';
import type { IHeading } from '@jolteon/components/types';

const useStyles = makeStyles({
  main: {
    paddingTop: '48px',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1100px',
  },

  article: {
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '686px',
    /*
    Certain blog posts, like the Spring Physics intro,
    cause overflows. We want to clamp this to 100%,
    at the largest.

    IF YOU CHANGE THIS, check:
    http://localhost:8040/animation/a-friendly-introduction-to-spring-physics/
  */
    maxWidth: 'min(686px, 100%)',
  },

  hero: {
    paddingTop: '48px',
    paddingBottom: '36px',
    backgroundColor: 'var(--color-muted)',
    transitionProperty: 'background',
    transitionDuration: `${COLOR_SWAP_TRANSITION_DURATION}ms`,
  },

  title: {
    marginBottom: '16px',
    fontWeight: 'var(--font-weight-medium)',
  },

  subtitle: {
    marginTop: '-12px',
    marginBottom: '16px',
    fontWeight: 'var(--font-weight-book)',
    color: 'var(--color-gray-700)',
  },

  sidebar: {
    flexGrow: '0',
    flexShrink: '100000',
    flexBasis: '250px',
    display: 'none',
    position: 'sticky',
    top: '148px',
    maxHeight: 'calc(100vh - 148px)',
    ...shorthands.overflow('auto'),
    paddingBottom: '16px',
    marginLeft: 'auto',
    marginTop: '4px',

    '@media (min-width: 1084px)': {
      display: 'block',
    },

    '@media (orientation: landscape)': {
      '&::-webkit-scrollbar': {
        width: '4px',
        backgroundColor: 'transparent',
      },

      '&::-webkit-scrollbar-track': {
        ...shorthands.borderRadius('3px'),
        backgroundColor: 'transparent',
      },

      '&::-webkit-scrollbar-thumb': {
        ...shorthands.borderRadius('5px'),
        backgroundColor: 'var(--color-gray-300)',
        transitionProperty: 'background-color',
        transitionDuration: '400ms',
      },
    },
  },

  likeWrapper: {
    '@media (min-width: 1080px)': {
      paddingLeft: '32px',
    },
  },
});

const useSmoothScrollStyles = makeStaticStyles({
  html: {
    scrollBehavior: 'smooth',
  },
});

const Tutorial = () => {
  const styles = useStyles();

  const headings = [
    {
      text: 'Layers and groups',
      level: 1,
    },
    {
      text: 'Fixing our example',
      level: 2,
    },
    {
      text: 'Creating stacking contexts',
      level: 1,
    },
    {
      text: 'A common misconception about z-index',
      level: 2,
    },
    {
      text: 'Hold on a minute…',
      level: 1,
    },
    {
      text: 'Airtight abstractions with “isolation”',
      level: 1,
    },
    {
      text: 'Debugging stacking context issues',
      level: 1,
    },
    {
      text: 'Going deeper',
      level: 1,
    },
  ];

  const frontmatter = getMdxContent();

  const {
    slug,
    categorySlug,
    title,
    subtitle,
    // seoTitle,
    // abstract,
    // noNewsletter,
    isPublished,
    humanReadableDate,
  } = frontmatter;

  const formattedCategory = getFormattedName(categorySlug);

  const heroRef = React.useRef<HTMLDivElement>(null);

  useOverscrollBackground('var(--color-muted)', heroRef);

  const hasSubtitle = !!subtitle;

  React.useEffect(() => {
    const timeoutId = window.setTimeout(useSmoothScrollStyles, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ContentProvider
      contentType="tutorial"
      slug={slug}
      title={title}
      subtitle={subtitle}
      category={categorySlug}
      formattedCategory={formattedCategory}
      isPublished={isPublished}
      location={typeof window !== 'undefined' ? window.location : undefined}
    >
      <TutorialLayout
        hero={
          <div className={styles.hero} ref={heroRef}>
            <MaxWidthWrapper>
              <Heading
                className={styles.title}
                style={{ marginTop: `${!hasSubtitle ? 8 : 24}px` }}
                type="large-title"
              >
                {title}
              </Heading>

              {subtitle && (
                <Heading type="small-title" className={styles.subtitle}>
                  {subtitle}
                </Heading>
              )}
            </MaxWidthWrapper>
          </div>
        }
      >
        <MaxWidthWrapper className={styles.main}>
          <aside className={styles.sidebar}>
            <TableOfContents headings={headings as IHeading[]} />
            <div className={styles.likeWrapper}></div>
          </aside>
          <article className={styles.article}>
            {/* TUTORIAL CONTENTS */}
            <ContentFooter publishedOn={humanReadableDate} />
          </article>
        </MaxWidthWrapper>
      </TutorialLayout>
    </ContentProvider>
  );
};

export default Tutorial;
