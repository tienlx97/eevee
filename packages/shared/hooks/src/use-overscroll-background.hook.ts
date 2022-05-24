import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useOverscrollBackground(color: string, ref: any) {
  React.useEffect(() => {
    if (!color) {
      return;
    }

    const { current } = ref;

    const observer = new window.IntersectionObserver((entries) => {
      const isVisible = entries[0].intersectionRatio > 0;

      document.body.style.background = isVisible ? color : '';
    });

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [ref, color]);
}
