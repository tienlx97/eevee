import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { HomeFill, HomeRegular } from '../../../icons/index';
import { Linka } from '@eevee/react-link';
import { bundleIcon } from '@eevee/react-icons';

const useRootStyles = makeStyles({
  base: {
    display: 'block',
  },
});

const Home = bundleIcon(HomeFill, HomeRegular);

export const Middle = () => {
  const styles = useRootStyles();
  return (
    <div className={styles.base}>
      <div style={{ paddingBottom: '35px', display: 'block' }}>
        <Linka href="https://react.fluentui.dev/?path=/docs/components-link--default">123</Linka>
      </div>
      <div style={{ paddingBottom: '35px', display: 'block' }}>
        <a
          style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignContent: 'center' }}
          href=""
          rel="noopener follow"
        >
          <Home />
        </a>
      </div>
    </div>
  );
};
