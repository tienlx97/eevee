import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import R from '@jolteon/components';

const code =
  'var Component=(()=>{var h=Object.create;var a=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),j=(e,n)=>{for(var t in n)a(e,t,{get:n[t],enumerable:!0})},d=(e,n,t,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of f(n))!x.call(e,o)&&o!==t&&a(e,o,{get:()=>n[o],enumerable:!(s=l(n,o))||s.enumerable});return e};var _=(e,n,t)=>(t=e!=null?h(u(e)):{},d(n||!e||!e.__esModule?a(t,"default",{value:e,enumerable:!0}):t,e)),b=e=>d(a({},"__esModule",{value:!0}),e);var p=g((y,m)=>{m.exports=_jsx_runtime});var M={};j(M,{default:()=>w,frontmatter:()=>E});var i=_(p());var r=R;var E={title:"Example Post",published:new Date(16131744e5),description:"This is some description"};function C(e={}){let{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,{})})):t();function t(){let s=Object.assign({h1:"h1"},e.components);return r||c("R",!1),r.Em||c("R.Em",!0),r.InlineCode||c("R.InlineCode",!0),r.Paragraph||c("R.Paragraph",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"This is md"}),`\n`,`\n`,(0,i.jsx)(r.Em,{children:"this is em"}),`\n`,`\n`,`\n`,(0,i.jsx)(r.Paragraph,{children:"this is paragraph"}),`\n`,`\n`,`\n`,(0,i.jsx)(r.InlineCode,{children:"this is inline block"})]})}}var w=C;function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}return b(M);})();\n;return Component;';

export default function MdxTest() {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Component = React.useMemo(() => getMDXComponent(code, { R }), [code]);

  return (
    <>
      <Component />
    </>
  );
}
