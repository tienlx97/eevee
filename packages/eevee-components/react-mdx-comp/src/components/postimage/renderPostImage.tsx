import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { PostImageSlots, PostImageState } from './PostImage.types';

export const renderPostImage = (state: PostImageState) => {
  const {
    type,
    source,
    title,
    asBaseImg,
    sizerSvgUrl,
    nextImgWrapClasses,
    nextImgSvgWrapClasses,
    nextImgSvgImgClasses,
  } = state;
  const { slots, slotProps } = getSlots<PostImageSlots>(state);

  if (type === 'native') {
    return <slots.root {...slotProps.root} />;
  }

  const NextImg = () => {
    if (asBaseImg) {
      return <slots.root {...slotProps.root} />;
    } else {
      return (
        <span className={nextImgWrapClasses}>
          <span className={nextImgSvgWrapClasses}>
            <img className={nextImgSvgImgClasses} aria-hidden={true} src={sizerSvgUrl} />
          </span>
          <slots.root decoding="async" data-nimg="intrinsic" {...slotProps.root} />
        </span>
      );
    }
  };

  if (source) {
    return (
      <slots.wrap {...slotProps.wrap}>
        <a href={source} target="_blank" rel="noopener noreferrer">
          <NextImg />
        </a>
        {title && <slots.caption {...slotProps.caption}>{title}</slots.caption>}
      </slots.wrap>
    );
  }

  return (
    <slots.wrap {...slotProps.wrap}>
      <NextImg />
      {title && <slots.caption {...slotProps.caption}>{title}</slots.caption>}
    </slots.wrap>
  );
};
