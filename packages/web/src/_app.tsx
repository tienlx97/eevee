import * as React from 'react';
import * as client from 'react-dom/client';

const Index = () => {
  return (
    <>
      <div>sadasd</div>
    </>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
