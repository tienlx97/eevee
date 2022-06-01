import * as React from 'react';
// Because we use @types/react v16
// And react-client v17 support
// We will add global.d.ts in future
const client = require('react-dom/client');

import { EeveeProvider } from '@eevee/react-provider';
import { Button } from '@eevee/react-button';
import { teamsDarkTheme, tokens } from '@eevee/react-theme';

const Index = () => {
  return (
    <EeveeProvider theme={teamsDarkTheme}>
      <div>This is test 3</div>
      <Button style={{ backgroundColor: tokens.colorForeground1 }} onClick={() => alert('click')}>
        2
      </Button>
    </EeveeProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
