import * as React from 'react';
import { Button } from '@eevee/react-button';
import { action } from '@storybook/addon-actions';

export const Demos = () => {
  return (
    <div>
      <section>
        <Button onClick={action('button clicked')}>Click me</Button>
      </section>
    </div>
  );
};

export default {
  title: 'Demos',
  components: Demos,
};
