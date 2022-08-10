import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { RightBarSlots, RightBarState } from './RightBar.types';
import { Link } from 'react-router-dom';

/**
 * Render the final JSX of Right
 */
export const renderRightBar = (state: RightBarState) => {
  const { styles } = state;
  const { slots, slotProps } = getSlots<RightBarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={styles[0]}>
        <div style={{ opacity: 0 }}>Love Gnart</div>
        {slotProps.root.children}
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          paddingTop: '5px',
          paddingBottom: '5px',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: 'var(--bg1)',
          width: '100%',
        }}
      >
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="help">
            Help
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="privacy">
            Privacy
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/term">
            Term
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/about">
            About
          </Link>
        </div>
        <div style={{ marginRight: '6px' }}>
          <Link style={{ color: 'inherit', fontSize: '11px' }} to="/carrers">
            Carrers
          </Link>
        </div>
      </div>
    </slots.root>
  );
};
