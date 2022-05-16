/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CodeSnippet from '../CodeSnippet';

const CodeSnippetDebug = () => {
  const code1 = `
const element = document.querySelector('.tooltip');
console.log(element.offsetParent); // <main>`;

  const code2 = `import { animated, useSpring } from 'react-spring';

const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? \`rotate(\${rotation}deg)\`
      : \`rotate(0deg)\`,
  });

  React.useEffect(() => {
    // Unchanged
  }, [isBooped, timing]);

  const trigger = () => {
    // Unchanged
  };

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
`;

  return (
    <>
      <pre>
        <CodeSnippet code={code1} language="javascript" />
      </pre>
      <pre>
        <CodeSnippet
          code={code2}
          language="jsx"
          highlight="[[0,0],[5,11],[22,24]]"
          clampMaxHeight={false}
          lessBottomMargin={true}
        />
      </pre>
    </>
  );
};

export default CodeSnippetDebug;
