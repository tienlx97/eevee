import * as React from 'react';
import Giscus from '@giscus/react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Button, ButtonR } from '@eevee/react-button';
import { Close } from '@components/icons/index';
import { breakPoints, tokens } from '@eevee/react-theme';
import { useTheme } from '@eevee/react-shared-contexts';
import { THEME_MAPPING, COMMENT_WIDTH } from '@constants/index';

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

  closeButtonWrapper: {
    ...shorthands.padding('5px'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const useCommentStyles = makeStyles({
  root: {
    height: '100%',
    position: 'fixed',
    boxSizing: 'border-box',
    top: '0px',

    ...shorthands.padding('16px'),
    zIndex: 520,
    backgroundColor: tokens.bg1,
    left: '100%',
    ...shorthands.overflow('auto'),

    boxShadow: `${tokens.b2} 0px 4px 12px`,
    //
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.6s, 0.6s',
    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1)',
    transitionDelay: '0s, 0s',
  },

  queryNotShow: {
    visibility: 'hidden',
    [`@media ${breakPoints.lgAndLarger}`]: {
      width: `${COMMENT_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.lg}`]: {
      width: `${COMMENT_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.md}`]: {
      width: `${COMMENT_WIDTH}`,
      transform: 'translateX(0px)',
    },

    [`@media ${breakPoints.sm}`]: {
      width: '100%',
      left: '0px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      transform: 'translateY(100%)',
    },

    [`@media ${breakPoints.xs}`]: {
      width: '100%',
      left: '0px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      transform: 'translateY(100%)',
    },
  },

  queryShow: {
    visibility: 'visible',

    [`@media ${breakPoints.lgAndLarger}`]: {
      transform: `translateX(-${COMMENT_WIDTH})`,
    },

    [`@media ${breakPoints.lg}`]: {
      transform: `translateX(-${COMMENT_WIDTH})`,
    },

    [`@media ${breakPoints.md}`]: {
      transform: `translateX(-${COMMENT_WIDTH})`,
    },

    [`@media ${breakPoints.sm}`]: {
      transform: 'translateY(30px)',
    },

    [`@media ${breakPoints.xs}`]: {
      transform: 'translateY(30px)',
    },
  },
});

type CommentSystemProps = {
  show: boolean;
  onClose: () => void;
};

export const CommentSystem = ({ show, onClose }: CommentSystemProps) => {
  const styles = useRootStyles();
  const commentStyles = useCommentStyles();

  const { colorMode } = useTheme();
  const theme = THEME_MAPPING[colorMode as keyof typeof THEME_MAPPING];

  const blurAllDynamicProps = {
    style: {
      pointerEvents: show ? 'all' : 'none',
      opacity: show ? 1 : 0,
    } as React.CSSProperties,
    role: 'presentation',
    'aria-hidden': show ? 'false' : 'true',
  } as JSX.IntrinsicElements['div'];

  const commentWrapperDynamicProps = {
    'aria-hidden': show ? 'false' : 'true',
  } as JSX.IntrinsicElements['div'];

  return (
    <div className="eve-CommentSystem" role="dialog" aria-modal="true" tabIndex={-1}>
      <div {...blurAllDynamicProps} className={styles.blurAll} onClick={onClose} />
      <div
        className={mergeClasses(commentStyles.root, commentStyles.queryNotShow, show && commentStyles.queryShow)}
        {...commentWrapperDynamicProps}
      >
        <div className={styles.closeButtonWrapper}>
          <ButtonR onClick={onClose} icon={<Close />} />
        </div>
        <Giscus
          repo="lexuantien/eevee-content"
          repoId="R_kgDOHjWrNg"
          category="Announcements"
          categoryId="DIC_kwDOHjWrNs4CQhRH"
          mapping="pathname"
          strict="0"
          emitMetadata="1"
          inputPosition="top"
          theme={theme}
          lang="en"
          loading="lazy"
          reactionsEnabled="0"
        />
      </div>
    </div>
  );
};
