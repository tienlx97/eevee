import React from 'react';
import { Playground } from '../Playground';

export default function PlaygroundDebug() {
  const html = `
<style>
  .box {
    position: relative;
  }
  .first.box {
    z-index: 2;
    background-color: peachpuff;
  }
  .second.box {
    z-index: 1;
    margin-top: -20px;
    margin-left: 20px;
  }
</style>

<div class="first box"></div>
<div class="second box"></div>
  `;

  const cssCode = `
/*
  This tab includes cosmetic styles
  that aren't as relevant.
*/
.box {
  width: 50px;
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
