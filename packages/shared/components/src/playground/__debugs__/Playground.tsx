import React from 'react';
import { Playground } from '../Playground';

export default function PlaygroundDebug() {
  const html = `
<div class="first box">This is playground</div>
  `;

  const cssCode = `

.first.box {
    z-index: 2;
    background-color: peachpuff;
  }

.box {
  width: 80%;
  height: 50px;
  border: 3px solid;
  background: silver;
}
  `;
  return (
    <Playground
      html={html}
      cssCode={cssCode}
      id="z-index"
      splitRatio="0.55"
      layoutMode="tabbed"
    />
  );
}
