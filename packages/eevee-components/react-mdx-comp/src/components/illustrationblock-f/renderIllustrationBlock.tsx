/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { IllustrationBlockSlots, IllustrationBlockState } from './IllustrationBlock.types';
import { AuthorCredit } from './authorcredit/AuthorCredit';

export const renderIllustrationBlock = (state: IllustrationBlockState) => {
  const { title, sequential, author, authorLink } = state;

  const { slots, slotProps } = getSlots<IllustrationBlockSlots>(state);

  const imageInfos = React.Children.toArray(state.root.children).map((child: any) => child.props);

  const images = imageInfos.map((info, index) => (
    <figure key={index}>
      <slots.imgWrap {...slotProps.imgWrap}>
        <img src={info.src} alt={info.alt} height={info.height} />
      </slots.imgWrap>
      {info.caption ? <slots.captionWrap {...slotProps.captionWrap}>{info.caption}</slots.captionWrap> : null}
    </figure>
  ));

  return (
    <slots.root {...slotProps.root}>
      {title && <slots.titleWrap {...slotProps.titleWrap}>{title}</slots.titleWrap>}
      {sequential ? (
        <slots.contentWrap {...slotProps.contentWrap}>
          {images.map((x: any, i: number) => (
            <li key={i}>{x}</li>
          ))}
        </slots.contentWrap>
      ) : (
        <div>{images}</div>
      )}
      {author && <AuthorCredit author={author} authorLink={authorLink} />}
    </slots.root>
  );
};
