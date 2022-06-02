// YourComponent.stories.ts|tsx

import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@eevee/react-button';

import type { EeveeIconsProps } from '@eevee/react-icons';
import { bundleIcon, wrapIcon } from '@eevee/react-icons';

const CalendarMonthRegularIcon = (iconProps: EeveeIconsProps) => {
  const { className, primaryFill } = iconProps;
  return React.createElement(
    'svg',
    {
      width: '1em',
      height: '1em',
      viewBox: '0 0 20 20',
      xmlns: 'http://www.w3.org/2000/svg',
      className: className,
    },
    React.createElement('path', {
      d: 'M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z',
      fill: primaryFill,
    }),
  );
};

const CalendarMonthFilledIcon = (iconProps: EeveeIconsProps) => {
  const { className, primaryFill } = iconProps;
  return React.createElement(
    'svg',
    {
      width: '1em',
      height: '1em',
      viewBox: '0 0 20 20',
      xmlns: 'http://www.w3.org/2000/svg',
      className: className,
    },
    React.createElement('path', {
      d: 'M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zM7 11a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zM7 7a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2zm3 0a1 1 0 100 2 1 1 0 000-2z',
      fill: primaryFill,
    }),
  );
};

const CalendarMonthFilled = wrapIcon(CalendarMonthFilledIcon({}), 'CalendarMonthFilled');
const CalendarMonthRegular = wrapIcon(CalendarMonthRegularIcon({}), 'CalendarMonthRegular');

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'eevee/react-button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />;
};

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  appearance: 'transparent',
  icon: <CalendarMonth />,
};
