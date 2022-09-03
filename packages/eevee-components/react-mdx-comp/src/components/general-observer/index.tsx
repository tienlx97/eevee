import * as React from 'react';

interface IGeneralObserverProps {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
}

export const GeneralObserver: React.FunctionComponent<IGeneralObserverProps> = ({ children, onEnter, height = 0 }) => {
  const ref = React.useRef<HTMLElement>(null);
  const [isChildVisible, setIsChildVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true);
          onEnter && onEnter();
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0,
      },
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div
      style={{
        width: '-webkit-fill-available',
      }}
      ref={ref as React.RefObject<HTMLDivElement>}
      data-testid="general-observer"
      className="mdx-embed"
    >
      {isChildVisible ? children : <div style={{ height, width: '100%' }} />}
    </div>
  );
};
