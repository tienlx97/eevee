import * as React from 'react';
import { useId } from '@eevee/react-utilities';
import { useEevee } from '@eevee/react-shared-contexts';

export const useToastPortal = () => {
  const [loaded, setLoaded] = React.useState(false);
  const portalID = useId('eve-toast-portal-');
  const { targetDocument } = useEevee();

  React.useEffect(() => {
    if (!targetDocument) {
      return;
    }
    const div = targetDocument.createElement('div');
    div.id = portalID;
    div.setAttribute('style', 'position: fixed; top: 10px; right: 10px; z-index: 1000001');
    targetDocument.getElementsByTagName('body')[0].prepend(div);
    setLoaded(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return () => targetDocument.getElementsByTagName('body')[0].removeChild(div) as any;
  }, [portalID, targetDocument]);

  return { loaded, portalID };
};
