import * as React from 'react';
import Giscus from '@giscus/react';
import { makeStyles, shorthands } from '@griffel/react';

const useRootStyles = makeStyles({
  blurAll: {
    width: '100%',
    position: 'fixed',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    zIndex: 510,
    //
    transitionProperty: 'opacity',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s',
  },
});

const useCommentStyles = makeStyles({
  root: {
    height: '100%',
    position: 'fixed',
    boxSizing: 'border-box',
    top: '0px',
    width: '40vw',
    ...shorthands.padding('16px'),
    zIndex: 520,
    backgroundColor: 'black',
    left: '100%',
    ...shorthands.overflow('auto'),
    boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 12px',
    //
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.6s, 0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s, 0s',
  },
});

type CommentSystemProps = {
  isOpen: boolean;
};

export const CommentSystem = ({ isOpen }: CommentSystemProps) => {
  const styles = useRootStyles();
  const commentStyles = useCommentStyles();

  const blurAllDynamicProps = {
    style: {
      pointerEvents: isOpen ? 'all' : 'none',
      opacity: isOpen ? 1 : 0,
    } as React.CSSProperties,
    role: 'presentation',
    'aria-hidden': isOpen ? 'false' : 'true',
  } as JSX.IntrinsicElements['div'];

  const commentWrapperDynamicProps = {
    style: {
      visibility: isOpen ? 'visible' : 'hidden',
      transform: isOpen ? 'translateX(-40vw)' : 'translateX(0px)',
    } as React.CSSProperties,
    'aria-hidden': isOpen ? 'false' : 'true',
  } as JSX.IntrinsicElements['div'];

  return (
    <div className="eve-CommentSystem" role="dialog" aria-modal="true" tabIndex={-1}>
      <div {...blurAllDynamicProps} className={styles.blurAll} />
      <div className={commentStyles.root} {...commentWrapperDynamicProps}>
        <Giscus
          repo="lexuantien/eevee-content"
          repoId="R_kgDOHjWrNg="
          category="Announcements"
          categoryId="DIC_kwDOHjWrNs4CQhRH"
          mapping="pathname"
          reactionsEnabled="1"
          strict="0"
          emitMetadata="1"
          inputPosition="top"
          theme="https://cycool29.github.io/assets/styles/comments.css"
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
};
