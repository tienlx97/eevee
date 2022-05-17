/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { CSSProperties } from 'react';

// import { ConfigContext } from '../config-context';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { IBaseImageProps, IImageElem, IPostImage } from './PostImage.types';

import './PostImage.css';

const useStyles = makeStyles({
  wrapper: {
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

    '@media (max-width:563px)': {
      ...shorthands.padding('0'),
      ...shorthands.border('none'),
    },

    // '.sidebyside_wrapper & ': {
    //   ...shorthands.padding('0'),
    //   ...shorthands.margin('0'),
    //   ...shorthands.border('none'),

    //   '&:not(:last-of-type)': {
    //     paddingRight: 0,
    //   },
    // },
  },

  caption: {
    display: 'block',
    paddingTop: '12px',
    fontSize: '14px',
    textAlign: 'center',
  },

  imageElem: {
    display: 'block',
    width: '100%',
    ...shorthands.margin('auto'),
    ...shorthands.borderRadius('3px'),
    // borderRadius: '3px',
    // margin: 'auto',
  },
});

const useImageElemStyles = makeStyles({
  wrapperStyle: {
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

  sizerStyle: {
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

  image1: {
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

  image2: {
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

function getInt(x: unknown): number | undefined {
  if (typeof x === 'number') {
    return x;
  }
  if (typeof x === 'string') {
    return parseInt(x, 10);
  }
  return undefined;
}

const ImageElem = ({
  asImage,
  className,
  width,
  height,
  src,
  ...delegated
}: IImageElem) => {
  if (!src) {
    throw new Error(
      `Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify(
        { width, height }
      )}`
    );
  }

  const styles = useImageElemStyles();

  if (asImage) {
    return (
      <img
        src={src}
        width={width}
        height={height}
        className={className}
        {...delegated}
      />
    );
  }
  const widthInt = getInt(width);
  const heightInt = getInt(height);

  const sizerSvgUrl = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${widthInt}%27%20height=%27${heightInt}%27/%3e`;
  return (
    <span className={styles.wrapperStyle}>
      <span className={styles.sizerStyle}>
        <img aria-hidden={true} className={styles.image1} src={sizerSvgUrl} />
      </span>
      <img
        decoding="async"
        data-nimg="intrinsic"
        className={mergeClasses(styles.image2, className)}
        width={width}
        height={height}
        src={src}
        {...delegated}
      />
    </span>
  );
};

const BaseImage = ({
  src,
  width,
  height,
  title,
  type,
  source,
  marginBottom,
  includeWhiteBackground,
  className,
  ...delegated
}: IBaseImageProps) => {
  const styles = useStyles();

  if (type === 'native') {
    return (
      <img
        className={className}
        src={src}
        width={width}
        height={height}
        {...delegated}
      />
    );
  }

  const as =
    typeof width !== 'undefined' && typeof height !== 'undefined'
      ? false
      : true;

  const wrapperStyle = {
    background: includeWhiteBackground && 'white',
    padding: includeWhiteBackground && '16px',
    borderRadius: includeWhiteBackground && '8px',
    '--margin-bottom':
      typeof marginBottom === 'number' ? `${marginBottom}px` : undefined,
  } as CSSProperties;

  if (source) {
    return (
      <span /*type={type}*/
        className={mergeClasses(styles.wrapper, 'postimage_wrapper')}
        style={wrapperStyle}
      >
        <a href={source} target="_blank" rel="noopener noreferrer">
          <ImageElem
            asImage={as}
            className={mergeClasses(styles.imageElem, className)}
            width={width}
            height={height}
            src={src}
            {...delegated}
          />
        </a>
        {title && <span className={styles.caption}>{title}</span>}
      </span>
    );
  }

  return (
    <span /*type={type}*/
      className={mergeClasses(styles.wrapper, 'postimage_wrapper')}
      style={wrapperStyle}
    >
      <ImageElem
        className={mergeClasses(styles.imageElem, className)}
        asImage={as}
        src={src}
        width={width}
        height={height}
        {...delegated}
      />
      {title && <span className={styles.caption}>{title}</span>}
    </span>
  );
};

const PostImage = ({
  src,
  fallback,
  darkSrc,
  darkFallback,
  lightSrc,
  lightFallback,
  alt = '',
  title = '',
  type = 'default',
  ...delegated
}: IPostImage) => {
  // if (darkSrc && lightSrc) {
  //   return (
  //     <DynamicPostImage
  //       darkSrc={darkSrc}
  //       lightSrc={lightSrc}
  //       darkFallback={darkFallback}
  //       lightFallback={lightFallback}
  //       alt={alt}
  //       title={title}
  //       type={type}
  //       {...delegated}
  //     />
  //   );
  // }

  return (
    <BaseImage
      src={src}
      fallback={fallback}
      alt={alt}
      title={title}
      type={type}
      {...delegated}
    />
  );
};

export default PostImage;
