import React from 'react';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import TutorialLayout from './TutorialLayout';
import { makeStyles } from '@griffel/react';

import { ContentFooter, ContentProvider } from '@jolteon/components';

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
});

const Tutorial = () => {
  const styles = useStyles();

  return (
    <ContentProvider contentType="tutorial">
      <TutorialLayout>
        <MaxWidthWrapper className={styles.main}>
          <article className={styles.article}>
            {/* TUTORIAL CONTENTS */}
            <ContentFooter publishedOn={`humanReadableDate`} />
          </article>
        </MaxWidthWrapper>
      </TutorialLayout>
    </ContentProvider>
  );
};

export default Tutorial;
