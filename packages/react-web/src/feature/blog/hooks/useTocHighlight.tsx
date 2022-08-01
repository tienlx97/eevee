import * as React from 'react';

const TOP_OFFSET = 120;

export const getHeaderAnchors = (): HTMLAnchorElement[] => {
  return Array.prototype.filter.call(document.getElementsByClassName('mdx-header-anchor'), testElement => {
    return (
      testElement.parentNode.nodeName === 'H1' ||
      testElement.parentNode.nodeName === 'H2' ||
      testElement.parentNode.nodeName === 'H3'
    );
  });
};

export const useTocHighlight = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const updateActiveLink = () => {
      if (window.pageYOffset === 0) {
        setCurrentIndex(-1);
        return;
      }

      const pageHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      const headersAnchors = getHeaderAnchors();

      if (scrollPosition >= 0 && pageHeight - scrollPosition <= TOP_OFFSET) {
        // Scrolled to bottom of page.
        setCurrentIndex(headersAnchors.length - 1);
        return;
      }

      let index = -1;
      while (index < headersAnchors.length - 1) {
        const headerAnchor = headersAnchors[index + 1];
        const { top } = headerAnchor.getBoundingClientRect();

        if (top >= TOP_OFFSET) {
          break;
        }
        index += 1;
      }

      setCurrentIndex(Math.max(index, 0));
    };

    const throttledUpdateActiveLink = () => {
      if (timeoutRef.current === null) {
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null;
          updateActiveLink();
        }, 500);
      }
    };

    document.addEventListener('scroll', throttledUpdateActiveLink);
    document.addEventListener('resize', throttledUpdateActiveLink);

    updateActiveLink();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      document.removeEventListener('scroll', throttledUpdateActiveLink);
      document.removeEventListener('resize', throttledUpdateActiveLink);
    };
  }, []);

  return {
    currentIndex,
  };
};
