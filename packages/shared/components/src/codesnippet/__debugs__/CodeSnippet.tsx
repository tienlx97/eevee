/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CodeSnippet from '../CodeSnippet';

const CodeSnippetDebug = () => {
  const children = `
const element = document.querySelector('.tooltip');
console.log(element.offsetParent); // <main>`;

  return (
    <pre>
      <CodeSnippet children={children} className="language-js" />
    </pre>
  );
};

export default CodeSnippetDebug;
