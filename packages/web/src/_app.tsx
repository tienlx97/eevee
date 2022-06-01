// import {} from '@eevee/react-button';
import * as React from 'react';
const client = require('react-dom/client');
import { Button } from '@eevee/react-button';

const Index = () => {
  return (
    <div>
      <div>This is test 3</div>
      <Button onClick={() => alert('click')}>2</Button>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
