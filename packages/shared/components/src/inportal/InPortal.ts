import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { InPortalProps } from './InPortal.types';

const InPortal = ({ id, children }: InPortalProps) => {
  const [hostElement, setHostElement] = useState<Element | null>(null);

  useEffect(() => {
    const elm = id
      ? document.querySelector(`#${id}`)
      : document.createElement('div');

    setHostElement(elm);

    if (!id) {
      document.body.appendChild(elm as Node);
    }

    return () => {
      if (!id) {
        document.body.removeChild(elm as Node);
      }
    };
  }, [id]);

  if (!hostElement) {
    return null;
  }

  return ReactDOM.createPortal(children, hostElement);
};

export default InPortal;
