import { useEevee } from '@eevee/react-shared-contexts';
import { EeveeProviderProps, EeveeProviderState } from './EeveeProvider.types';

/**
 * Create the state required to render EeveeProvider.
 *
 * The returned state can be modified with hooks such as useEeveeProviderStyles,
 * before being passed to renderEeveeProvider.
 *
 * @param props - props from this instance of EeveeProvider
 * @param ref - reference to root HTMLElement of EeveeProvider
 */
export const useEeveeProvider = (props: EeveeProviderProps): EeveeProviderState => {
  const parentContext = useEevee();

  const {
    className,
    dir = parentContext.dir,
    targetDocument = parentContext.targetDocument,
    darkTheme,
    lightTheme,
  } = props;

  return {
    dir,
    targetDocument,
    darkTheme,
    lightTheme,
    className,
  };
};
