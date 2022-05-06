import React from 'react';
import stylex from '@ladifire-opensource/stylex';
import { VisuallyHiddenProps } from './types';

const styles = stylex.create({
  wrapper: {
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: 0,
    border: 0,
  },
});

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Alt') {
        setForceShow(true);
      }
    };

    const handleKeyUp = () => {
      setForceShow(false);
    };

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

  return <div className={stylex(styles.wrapper)}>{children}</div>;
};

export { VisuallyHidden };
