import {
  REACT_EXTERNAL_DEPENDENCIES,
  importGlobalStyles,
  windowOnErrorFunction,
  windowOnLoadFuncton,
  REACT_INTERNAL_DENPENDENCIES,
} from './constants';
import { CodeMap, ISnippetProps } from './constructSnippet.types';

const PACKAGE_VERSIONS = {};

export function wrapForReact(snippet: CodeMap, centered: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  let code = snippet.javascript!;
  const renderExpression = /render\((.*)\)/s;

  Object.keys(REACT_EXTERNAL_DEPENDENCIES).forEach((depName) => {
    code = code.replace(depName, REACT_EXTERNAL_DEPENDENCIES[depName]);
  });

  try {
    // const [, renderedContent] = code.match(renderExpression);
    const renderedContent = code.match(renderExpression);

    const renderlessCode = code.replace(renderExpression, '');

    // For some reason, the JSX gets transpiled to use `h()` instead
    // of `createElement`. I'll create an alias for it, because I
    // don't care enough to solve that problem right now.

    const wrappedCode = `
    import React, { createElement } from ${REACT_INTERNAL_DENPENDENCIES.react} 
    import ReactDOM from ${REACT_INTERNAL_DENPENDENCIES['react-dom']};

    ${renderlessCode}

    // Wait a frame so that 'window' reads as the correct width,
    // inside the React app
    window.setTimeout(() => {
      ReactDOM.render(${renderedContent}, document.querySelector('#root'));
    }, 0)
    `.trim();

    let wrapperStyles = '';
    if (centered) {
      wrapperStyles = `
        display: grid;
        place-content: center;
        height: calc(100vh - 16px);
      `;
    }

    return {
      ...snippet,
      javascript: wrappedCode,
      markup: `<div id="root" style="${wrapperStyles}"></div>`,
    };
  } catch (err) {
    // Since the code is user-editable, it's entirely possible
    // that they'll break it somehow. ignore errors and perform
    // the snippet as-written. This means nothing will render,
    // but nothing will explode.
    return snippet;
  }
}

export function applyCentering(snippet: CodeMap) {
  const { markup } = snippet;

  const wrapperStyles = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 16px);
  `;

  return {
    ...snippet,
    markup: `<div style="${wrapperStyles}">${markup}</div>`,
  };
}

function constructJavaScript(codeMap: CodeMap, mode: string) {
  const presets = mode === 'react' ? ['react'] : [];

  if (mode === 'react') {
    return `
      <script type="module">
        const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/

        function validUrl(url) {
          try {
            new URL(url);
            return true;
          } catch(err) {
            return false;
          }
        }

        const PACKAGE_VERSIONS = ${JSON.stringify(PACKAGE_VERSIONS)};

        function unpkg(dependencies = {}) {
          return {
            visitor: {
              "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {
                if (
                  !path.node.source || // Probably a variable declaration
                  validUrl(path.node.source.value) || // Valid URL
                  path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol
                  [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path
                )
                  return; // Leave it alone

                // A "bare" identifier
                const match = BareIdentifierFormat.exec(path.node.source.value);
                const packageName = match[1];
                const file = match[2] || "";

                let version = dependencies[packageName] || PACKAGE_VERSIONS[packageName];

                if (!version) {
                  console.warn(
                    'Missing version for package "%s" in dependencies; falling back to "latest"',
                    packageName
                  );

                  version = 'latest';
                }


                path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;
              }
            }
          };
        }

        Babel.registerPlugin('unpkg', unpkg);

        const code = Babel.transform(decodeURI(\`${encodeURI(
          codeMap.javascript || ''
        )}\`), {
          plugins: ['unpkg'],
          presets: ${JSON.stringify(presets)}
        }).code;
        const script = document.createElement("script");
        script.type = "module";
        script.innerHTML = code;
        document.body.appendChild(script);
      </script>
    `;
  } else {
    return `
      <script>
        ${codeMap.javascript || ''}
      </script>
    `;
  }
}

/**
 * Constructs snippet from individual html, css and js code.
 */
function constructSnippet({
  id,
  codeMap,
  mode,
  boxSizing,
  centered,
}: ISnippetProps) {
  let codeMapCopy = { ...codeMap };

  if (mode === 'react') {
    codeMapCopy = wrapForReact(codeMapCopy, centered as boolean);
  } else if (centered) {
    codeMapCopy = applyCentering(codeMapCopy);
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Poro iFrame playground</title>
      <!-- global styles -->      
      <style>${importGlobalStyles(boxSizing)}</style>
      <style>${codeMapCopy.css || ''}</style>
    </head>
    <body>
      ${codeMapCopy.markup || ''}
      <span></span>
      <script>
        ${windowOnLoadFuncton(id)}
        ${windowOnErrorFunction(id)}
      </script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      ${constructJavaScript(codeMapCopy, mode)}
    </body>
    </html>
  `;
}

export default constructSnippet;
