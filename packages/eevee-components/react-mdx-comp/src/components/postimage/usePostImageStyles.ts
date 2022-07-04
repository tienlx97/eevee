import { SlotClassNames } from '@eevee/react-utilities';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { PostImageSlots, PostImageState } from './PostImage.types';

export const postImageClassname: SlotClassNames<PostImageSlots> = {
  root: 'eve-PostImage',
  wrap: 'eve-PostImage__wrap',
  caption: 'eve-PostImage__caption',
};

const useWrapStyles = makeStyles({
  root: {
    ...shorthands.margin('32px', 'auto', 'var(--margin-bottom, 48px)'),
    boxSizing: 'content-box',
    /*
      HACK: Next-image does some trickery which undoes the auto-margins.
      I'll need to target it here directly.
    */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [`@media ${breakPoints.xsAndSmaller}`]: {
      ...shorthands.padding('0'),
      ...shorthands.border('none'),
    },
  },
});

const useCaptionStyles = makeStyles({
  root: {
    display: 'block',
    paddingTop: '12px',
    fontSize: '14px',
    textAlign: 'center',
    color: tokens.f1,
  },
});

const useNextImgStyles = makeStyles({
  imgWrapper: {
    boxSizing: 'border-box',
    display: 'inline-block',
    ...shorthands.overflow('hidden'),
    // overflow: 'hidden',
    width: 'initial',
    height: 'initial',
    backgroundImage: 'none',
    // background: 'none',
    opacity: '1',
    ...shorthands.border('0'),
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    position: 'relative',
    maxWidth: '100%',
  },

  svgWrapper: {
    boxSizing: 'border-box',
    display: 'block',
    width: 'initial',
    height: 'initial',
    backgroundImage: 'none',
    opacity: '1',
    ...shorthands.border('0'),
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    maxWidth: '100%',
  },

  svgImg: {
    display: 'block',
    maxWidth: '100%',
    width: 'initial',
    height: 'initial',
    backgroundImage: 'none',
    opacity: '1',
    ...shorthands.border('0'),
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
  },

  img: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    boxSizing: 'border-box',
    ...shorthands.border('none'),
    ...shorthands.margin('auto'),
    ...shorthands.padding('0'),
    display: 'block',
    width: '0',
    height: '0',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  },
});

export const usePostImageStyles = (state: PostImageState): PostImageSlots => {
  const wrapStyles = useWrapStyles();
  const captionStyles = useCaptionStyles();
  const nextImgStyles = useNextImgStyles();

  state.root.className = mergeClasses(
    //
    postImageClassname.root,
    nextImgStyles.img,
  );

  state.wrap.className = mergeClasses(
    //
    postImageClassname.wrap,
    wrapStyles.root,
    state.wrap.className,
  );

  state.nextImgWrapClasses = nextImgStyles.imgWrapper;
  state.nextImgSvgWrapClasses = nextImgStyles.svgWrapper;
  state.nextImgSvgImgClasses = nextImgStyles.svgImg;

  state.caption.className = mergeClasses(
    //
    postImageClassname.caption,
    captionStyles.root,
    state.caption.className,
  );

  return state;
};
