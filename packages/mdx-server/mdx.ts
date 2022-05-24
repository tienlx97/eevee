import { bundleMDX } from 'mdx-bundler';

const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# This is md

import R from '@jolteon/components';

<R.Em>this is em</R.Em>
<R.Paragraph>this is paragraph</R.Paragraph>
<R.InlineCode>this is inline block</R.InlineCode>

`.trim();

const result = await bundleMDX({
  source: mdxSource,
  globals: {
    '@jolteon/components': 'R',
  },
});

const { code, frontmatter } = result;

console.log(code);
console.log(frontmatter);
