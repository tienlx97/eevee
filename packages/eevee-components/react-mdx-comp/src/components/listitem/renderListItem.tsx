import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ListItemSlots, ListItemState } from './ListItem.types';
import { animated as Animated } from '@react-spring/web';
import { ArrowRight } from './ArrowRight';
import { Star } from './Star';

export const renderListItem = (state: ListItemState) => {
  const { type, iconSpring, iconWrap, bullet } = state;
  const { slots, slotProps } = getSlots<ListItemSlots>(state);

  if (type === 'original') {
    return <li>{slotProps.root.children}</li>;
  }

  if (type === 'ordered') {
    return (
      <slots.root {...slotProps.root}>
        <slots.content {...slotProps.content}>{slotProps.root.children}</slots.content>
      </slots.root>
    );
  }

  return (
    <slots.root {...slotProps.root}>
      <Animated.span className={iconWrap} style={iconSpring}>
        {bullet === 'default' && <ArrowRight size={20} />}
        {bullet === 'fullStar' && <Star size={20} />}
      </Animated.span>
      {/*This interaction is purely decorative, and is not required for
        folks using the keyboard or a screen-reader.
      */}
      <slots.content {...slotProps.content}>{slotProps.root.children}</slots.content>
    </slots.root>
  );
};
