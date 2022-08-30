import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

const useStyles = makeStyles({
  root: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: tokens.f1,
    ...shorthands.overflow('hidden'),
    maxHeight: '20px',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    wordBreak: 'break-all',
  },

  mimimal: {
    fontSize: '13px',
    color: tokens.f2,
  },
});

type ParagraphProps = JSX.IntrinsicElements['p'] & {
  type?: 'minimal';
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, type, className, style }) => {
  const styles = useStyles();

  return (
    <p style={style} className={mergeClasses(styles.root, className, type === 'minimal' && styles.mimimal)}>
      {children}
    </p>
  );
};
