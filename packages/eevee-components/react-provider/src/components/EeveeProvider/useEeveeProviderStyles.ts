import { EeveeProviderContextValues } from './EeveeProvider.types';
import { tokens } from '@eevee/react-theme';
import { makeStyles, mergeClasses } from '@griffel/react';

export const eeveeProviderClassNames = {
  root: 'eve-EeveeProvider',
};

const useStyles = makeStyles({
  root: {
    color: tokens.f1,
    backgroundColor: tokens.bg1,
    fontFamily: tokens.fontFamily,
  },
});

export function useEeveeStyles(props: EeveeProviderContextValues) {
  const style = useStyles();

  props.className = mergeClasses(eeveeProviderClassNames.root, style.root, props.className);

  return props;
}
