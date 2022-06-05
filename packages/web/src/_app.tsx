import * as React from 'react';
// Because we use @types/react v16
// And react-client v17 support
// We will add global.d.ts in future
import * as client from 'react-dom/client';

import { EeveeProvider } from '@eevee/react-provider';
import { Button } from '@eevee/react-button';
import { darkTheme } from '@eevee/react-theme';

import './asset/css/index.css';

const Index = () => {
  return (
    <EeveeProvider theme={darkTheme}>
      <Button type="button" appearance="transparent">
        2
      </Button>
    </EeveeProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
