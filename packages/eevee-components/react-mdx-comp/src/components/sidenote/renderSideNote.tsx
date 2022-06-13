import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { SideNoteSlots, SideNoteState } from './SideNote.types';
import { animated } from '@react-spring/web';
import { Info } from './Info';
import { Success } from './Success';
import { Warning } from './Warning';
import { ChevronDown } from './ChevronDown';

export const renderSideNote = (state: SideNoteState) => {
  const {
    type,
    title,
    iconWrapClasses,
    titleClasses,
    previewChildren,
    isExpanded,
    expandedChildren,
    showMoreStyle,
    expandedClasses,
  } = state;
  const { slots, slotProps } = getSlots<SideNoteSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={iconWrapClasses}>
        {type === 'info' && <Info size={32} />}
        {type === 'success' && <Success size={32} />}
        {type === 'warning' && <Warning size={32} />}
      </div>
      {title && <strong className={titleClasses}>{title}</strong>}
      <slots.content {...slotProps.content}>
        {previewChildren}
        {isExpanded ? (
          expandedChildren && <div className={expandedClasses}>{expandedChildren}</div>
        ) : (
          <slots.showMore {...slotProps.showMore}>
            Show more{' '}
            <animated.span style={showMoreStyle}>
              <ChevronDown size={20} />
            </animated.span>
          </slots.showMore>
        )}
      </slots.content>
    </slots.root>
  );
};
