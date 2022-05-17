/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CodeSnippet from '../CodeSnippet';

const basicShapesCode = `// I'm editable!

const rectangle = (
  <rect
    x={40} y={15}
    width={30} height={65}
    fill="hotpink"
  />
);
const circle = (
  <ellipse
    cx={30} cy={60}
    rx={20} ry={20}
    fill="lightsalmon"
  />
);
const triangle = (
  <polygon
    points="15,80 30,55 45,80"
    fill="turquoise"
  />
);

render(
  <svg
    style={{
      background: '#333',
      width: 240,
    }}
    viewBox="0 0 80 80"
  >
    {rectangle}
    {circle}
    {triangle}
  </svg>
);
`;

const code1Static = `
const element = document.querySelector('.tooltip');
console.log(element.offsetParent); // <main>`;

const code2Static = `import { animated, useSpring } from 'react-spring';

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

const CodeSnippetDebug = () => {
  return (
    <>
      <pre>
        <CodeSnippet code={code1Static} language="javascript" />
      </pre>
      <pre>
        <CodeSnippet
          code={code2Static}
          language="jsx"
          highlight="[[0,0],[5,11],[22,24]]"
          clampMaxHeight={false}
          lessBottomMargin={true}
        />
      </pre>

      <pre>
        <CodeSnippet language="jsx" live={true} code={basicShapesCode} />
      </pre>
    </>
  );
};

export default CodeSnippetDebug;
