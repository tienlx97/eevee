import { EeveeProvider } from '@eevee/react-provider';
import { darkTheme, lightTheme } from '@eevee/react-theme';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'dark',
    toolbar: {
      icon: 'lightning',
      items: ['dark'],
      showName: true,
    },
  },
};

/** @type {NonNullable<import('@storybook/react').Story['decorators']>} */
export const decorators = [
  (Story, context) => {
    // const theme = context.globals.theme === 'dark' ? darkTheme : {} as any;
    const styles = useStyles();
    return (
      <EeveeProvider className={styles.root} darkTheme={darkTheme} lightTheme={lightTheme}>
        <Story />
      </EeveeProvider>
    );
  },
];
