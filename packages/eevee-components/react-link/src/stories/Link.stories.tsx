import * as React from 'react';
import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Linkr } from '../index';

const withReactRouterDom6: DecoratorFn = Story => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

//👇 This default export determines where your story goes in the story list
export default {
  title: 'eevee/react-link',
  component: Linkr,
  decorators: [withReactRouterDom6],
} as ComponentMeta<typeof Linkr>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Linkr> = args => {
  return <Linkr {...args} />;
};

Template.args = {
  appearance: 'josh-comeau',
};

export const Appearance = Template.bind({});

Appearance.args = {
  /*👇 The args you need here will depend on your component */
  children: 'This is josh-comeau ',
  href: 'https://www.joshwcomeau.com/',
};
