import { bundleMDX } from 'mdx-bundler';

// import {
//   r.a,
//   r.blockquote,
//   r.em,
//   r.strike,
//   r.h1,
//   r.h2,
//   r.h3,
//   r.hr,
//   r.i,
// } from '@jolteon/mdx-comps';

// const test = () => {
//   return (
//     <>
//       <r.a href="facebook.com">This is a tag</r.a>
//       <r.blockquote>This is blockquote tag</r.blockquote>
//       <r.em>This is em tag</r.em>
//       <r.strike>This is strike tag</r.strike>
//       <r.h1>This is h1</r.h1>
//       <r.h2>This is h2</r.h2>
//       <r.h3>This is h3</r.h3>
//       <r.i>this is is tag</r.i>
//       <r.hr />
//     </>
//   );
// };

// https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

import r from '@jolteon/mdx-comps';

<r.a href="facebook.com">This is a tag</r.a>
<r.blockquote>This is blockquote tag</r.blockquote>
<r.em>This is em tag</r.em>
<r.strike>This is strike tag</r.strike>
<r.h1>This is h1</r.h1>
<r.h2>This is h2</r.h2>
<r.h3>This is h3</r.h3>
<r.i>this is is tag</r.i>
<r.hr />

`.trim();

const result = await bundleMDX({
  source: mdxSource,
  globals: {
    '@jolteon/mdx-comps': 'MdxComps',
  },
});

const { code, frontmatter } = result;

console.log(code);
console.log(frontmatter);
