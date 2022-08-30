import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    ...shorthands.borderColor(tokens.b2),
    backgroundPositionW: '0px',
    backgroundPositionY: 'center',
    ...shorthands.padding('4px', '12px', '6px'),
    textDecorationLine: 'none',
    display: 'inline-block',
    boxSizing: 'border-box',
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderRadius('99em'),
    color: tokens.f1,
    lineHeight: '20px',
    width: '100%',
    fontWeight: 400,
    fontFamily: tokens.fontFamily,

    ':hover': {
      ...shorthands.borderColor(tokens.f2),
    },
  },
});

type TextButtonProps = {
  to: string;
};

export const TextButton: React.FC<TextButtonProps> = ({ children, to }) => {
  const styles = useStyles();

  return (
    <Link to={to} className={styles.root}>
      <div style={{ textAlign: 'center' }}>{children}</div>
    </Link>
  );
};
