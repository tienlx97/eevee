import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { LinkR } from '@eevee/react-link';

const useRootStyles = makeStyles({
  base: {
    ...shorthands.padding('20px', '5px'),
    textAlign: 'center',
  },
});

export const Top = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.base}>
      <LinkR
        icon={<img src="https://raw.githubusercontent.com/lexuantien/eevee/dev/resource/image/icon-512x512.png" />}
        href="/"
      />
    </div>
  );
};
