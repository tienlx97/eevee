import * as React from 'react';
import { Block, Item } from './Common';
import { CodeBlock, InlineCode } from '@eevee/react-mdx-comp';

export const Code = () => {
  return (
    <Block heading="Code block">
      <Item from="`This is inline code`">
        <InlineCode>This is inline code</InlineCode>
      </Item>
      <Item
        from={
          <>
            <div>```js</div>
            <div>const r = 'This is code block';</div>
            <div>//...</div>
            <div>console.log(r);</div>
            <div>```</div>
          </>
        }
      >
        <CodeBlock>{`const r = 'This is code block';
//...
console.log(r);`}</CodeBlock>
      </Item>
    </Block>
  );
};
