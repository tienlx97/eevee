// My css.d.ts file
import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    '--margin-bottom': string | undefined,
    // ...or allow any other property
    [index: string]: any;
  }
}
