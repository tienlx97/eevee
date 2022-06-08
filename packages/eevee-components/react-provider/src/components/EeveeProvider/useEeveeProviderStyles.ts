import { EeveeProviderContextValues } from './EeveeProvider.types';
import { tokens } from '@eevee/react-theme';
import { makeStyles, mergeClasses } from '@griffel/react';

export const eeveeProviderClassNames = {
  root: 'eve-EeveeProvider',
};

const useStyles = makeStyles({
  root: {
    color: tokens.colorForeground1Hover,
    backgroundColor: tokens.colorBackground1,
    fontFamily: tokens.fontFamily,
  },
});

export function useEeveeStyles(props: EeveeProviderContextValues) {
  const style = useStyles();

  props.className = mergeClasses(eeveeProviderClassNames.root, style.root, props.className);

  return props;
}
