import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CommentSystemSlots, CommentSystemState } from './CommentSystem.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints, tokens } from '@eevee/react-theme';
import { COMMENT_WIDTH } from '@constants/index';

export const ClassName = 'eve-CommentSystem';
export const ClassNames: SlotClassNames<CommentSystemSlots> = {
  root: 'eve-CommentSystem',
  // TODO: add class names for all slots on CommentSystemSlots.
  // Should be of the form `<slotName>: 'eve-CommentSystem__<slotName>`
  blur: 'eve-CommentSystem__blur',
  commentWrapper: 'eve-CommentSystem__commentWrapper',
  closeButton: 'eve-CommentSystem__closeButton',
};

const useStyles = makeStyles({
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

  buttonGroupWrapper: {
    ...shorthands.padding(tokens.spacingVerticalXXL, '0px'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  responseTitle: {
    fontWeight: tokens.fontWeightMedium,
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.fontSizeBase600,
    letterSpacing: 0,
  },

  queryNotShow: {
    pointerEvents: 'none',
    opacity: 0,
  },

  queryShow: {
    pointerEvents: 'all',
    opacity: 1,
  },
});

const useCommentStyles = makeStyles({
  root: {
    height: '100%',
    position: 'fixed',
    boxSizing: 'border-box',
    top: '0px',

    ...shorthands.padding('0px', tokens.spacingHorizontalXXL, tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
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
      boxShadow: `${tokens.b2} 5px 0px 12px`,
      transform: 'translateY(30px)',
    },

    [`@media ${breakPoints.xs}`]: {
      boxShadow: `${tokens.b2} 5px 0px 12px`,
      transform: 'translateY(30px)',
    },
  },
});

/**
 * Apply styling to the CommentSystem slots based on the state
 */
export const useCommentSystemStyles = (state: CommentSystemState): CommentSystemState => {
  const { show } = state;

  const styles = useStyles();
  const commentStyles = useCommentStyles();

  state.root.className = mergeClasses(ClassName);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.blur.className = mergeClasses(
    ClassNames.blur,
    styles.blurAll,
    styles.queryNotShow,
    show && styles.queryShow,
    state.blur.className,
  );

  state.commentWrapper.className = mergeClasses(
    ClassNames.commentWrapper,
    commentStyles.root,
    commentStyles.queryNotShow,
    show && commentStyles.queryShow,
    state.commentWrapper.className,
  );

  state.buttonWrapperClassName = mergeClasses('eve-CommentSystem__buttonWrapper', styles.buttonGroupWrapper);
  state.responseTitleClassName = mergeClasses('eve-CommentSystem__responseTitle', styles.responseTitle);

  return state;
};
