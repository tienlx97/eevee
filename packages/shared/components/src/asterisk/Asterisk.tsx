import React from 'react';
import { UnstyledButton } from '../button';
import { Tooltip } from '../tooltip';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  contentWrapper: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },

  wrapper: {
    display: 'inline-block',
    width: '9px',
    height: '1em',
    position: 'relative',
  },

  asteriskGlyph: {
    position: 'relative',
    fontSize: '21px',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-secondary)',
  },

  touchArea: {
    position: 'absolute',
    display: 'block',
    top: '-19px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    ...shorthands.padding('10px'),
    transform: 'translateY(5px)',
    cursor: 'pointer',
  },
});

const Asterisk = ({ content }: { content: React.ReactNode }) => {
  const styles = useStyles();

  return (
    <span className={styles.wrapper}>
      <Tooltip
        content={<div className={styles.contentWrapper}>{content}</div>}
        placement="top"
        animation="scale-subtle"
        theme="material"
        arrow={true}
        duration={200}
        delay={[250, 0]}
      >
        <UnstyledButton className={styles.touchArea}>
          <span className={styles.asteriskGlyph}>*</span>
        </UnstyledButton>
      </Tooltip>
    </span>
  );
};

export default Asterisk;
