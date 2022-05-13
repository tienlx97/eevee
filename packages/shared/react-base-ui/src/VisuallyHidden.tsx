import React, { useEffect, useState } from 'react';
import { makeStyles, shorthands, mergeClasses } from '@griffel/react';
import { IVisuallyHiddenProps } from './VisuallyHidden.types';

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    ...shorthands.overflow('hidden'),
    clip: 'rect(0 0 0 0)',
    height: '1px',
    width: '1px',
    ...shorthands.margin('-1px'),
    ...shorthands.padding(0),
    ...shorthands.border(0),
  },
});

const VisuallyHidden = ({
  children,
  className,
  ...delegated
}: IVisuallyHiddenProps) => {
  const [forceShow, setForceShow] = useState(false);

  const styles = useStyles();

  const classes = mergeClasses(styles.wrapper, className && className);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Alt') {
        setForceShow(true);
      }
    };

    const handleKeyUp = () => setForceShow(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <div {...delegated} className={classes}>
      {children}
    </div>
  );
};

export { VisuallyHidden };
export default VisuallyHidden;
