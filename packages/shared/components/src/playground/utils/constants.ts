export const importGlobalStyles = (boxSizing: string) => `
  @font-face {
    font-family: 'Wotfard';
    src: url('https://raw.githubusercontent.com/lexuantien/eevee/2086fbd62a7affa3b863355a9eb516206f318930/packages/web/public/fonts/wotfard/wotfard-semibold-webfont.woff2')
      format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Wotfard';
    src: url('https://raw.githubusercontent.com/lexuantien/eevee/2086fbd62a7affa3b863355a9eb516206f318930/packages/web/public/fonts/wotfard/wotfard-medium-webfont.woff2')
      format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Wotfard';
    src: url('https://raw.githubusercontent.com/lexuantien/eevee/2086fbd62a7affa3b863355a9eb516206f318930/packages/web/public/fonts/wotfard/wotfard-regular-webfont.woff2')
      format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  body {
    margin: 0;
    padding: 8px;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: ${boxSizing};
    line-height: 1.5;
    line-height: calc(1em + 0.5rem);
    -webkit-font-smoothing: antialiased;
    font-family: Wotfard;
  }
`;

export const windowOnLoadFuncton = (id: string) => `
  window.onload = function() {
    if(typeof window !== 'undefined') {
      window.parent.postMessage({
        source: "frame-${id}",
        message: {
          type: "loaded"
        },
      }, "*");

      /*
      * Disable all link-clicks, since
      * they're meant for show.
      */
      const allLinks = [...document.querySelectorAll('a')];
      allLinks.forEach(a => {
        a.addEventListener('click', ev => {
          ev.preventDefault();
        });
      });
    }
  }
`;

export const windowOnErrorFunction = (id: string) => `
  window.onerror = function(message) {
    if(typeof window !== 'undefined') {
      window.parent.postMessage({
        source: "frame-${id}",
        message: {
          type: "error",
          data: message
        },
      }, "*");
    }
  }
`;

type Dependencies = {
  [key: string]: string;
};

export const REACT_EXTERNAL_DEPENDENCIES: Dependencies = {
  'react-feather': 'https://cdn.skypack.dev/react-feather',
  'styled-components': 'https://cdn.skypack.dev/styled-components',
  '@griffel/react': 'https://cdn.skypack.dev/@griffel/react',
};

export const REACT_INTERNAL_DENPENDENCIES: Dependencies = {
  react: 'https://cdn.skypack.dev/react',
  'react-dom': 'https://cdn.skypack.dev/react-dom',
};
