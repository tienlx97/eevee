var Component = (() => {
  var f = Object.create;
  var r = Object.defineProperty;
  var m = Object.getOwnPropertyDescriptor;
  var w = Object.getOwnPropertyNames;
  var y = Object.getPrototypeOf,
    g = Object.prototype.hasOwnProperty;
  var b = (n, t) => () => t || n((t = { exports: {} }).exports, t), t.exports,
    v = (n, t) => {
      for (var o in t) r(n, o, { get: t[o], enumerable: !0 });
    },
    c = (n, t, o, l) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let s of w(t))
          !g.call(n, s) && s !== o && r(n, s, { get: () => t[s], enumerable: !(l = m(t, s)) || l.enumerable });
      return n;
    };
  var j = (n, t, o) => (
      (o = n != null ? f(y(n)) : {}), c(t || !n || !n.__esModule ? r(o, 'default', { value: n, enumerable: !0 }) : o, n)
    ),
    k = n => c(r({}, '__esModule', { value: !0 }), n);
  var u = b((H, d) => {
    d.exports = _jsx_runtime;
  });
  var C = {};
  v(C, { default: () => S, frontmatter: () => x });
  var e = j(u());
  var {
    Paragraph: L,
    TextLink: A,
    Blockquote: E,
    Ul: h,
    Ol: J,
    Li: a,
    I: P,
    Em: M,
    PostImage: _,
    Strike: U,
    InlineCode: i,
    CH1: F,
    CH2: N,
    CH3: W,
    H1: q,
    H2: z,
    H3: B,
    ContentHeading: O,
    Heading: D,
    CodeSnippet: V,
    SandPack: X,
    HorizontalRule: Y,
    SideNote: G,
    Expanded: R,
    CodeBlock: K,
  } = reactMdxComp;
  var x = {
    postId: 3068985752182915e3,
    slugify: 'how-to-use-async-useeffect-1659666344212',
    language: 'en',
    title: 'How to use async useEffect',
    description: 'This is my first blog',
    date: '05/08/2022',
    author: {
      nickName: 'tienlx97',
      name: 'Le Xuan Tien',
      description: 'I&#x27;m fullstack developer and still FA. Plz contact me if you are girl',
      id: 0x2a969ec39c8f2400,
      url: 'https://facebook.com/tienlx97',
    },
    post: 'story',
    tags: ['react', 'async', 'typescript', 'useEffect'],
  };
  function p(n) {
    let t = Object.assign({ p: 'p', h1: 'h1', strong: 'strong', h2: 'h2', pre: 'pre', code: 'code' }, n.components);
    return (0, e.jsxs)(e.Fragment, {
      children: [
        (0, e.jsx)(t.p, {
          children:
            "Let's talk about modules. Being able to share code across multiple JavaScript files and even across multiple projects is an easy thing to do when you start to use modules in JavaScript.",
        }),
        `
`,
        (0, e.jsx)(t.h1, { children: 'What are Modules ?' }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            (0, e.jsx)(t.strong, { children: 'Modules' }),
            ' are a way to structure and organize your JavaScript, and it gives us the ability to share functionality and data across multiple files and projects.',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, { children: 'A few things you need to know about modules:' }),
        `
`,
        (0, e.jsxs)(h, {
          children: [
            (0, e.jsx)(a, { children: 'They have their own scope, similar to how a function has scope.' }),
            `
`,
            (0, e.jsx)(a, { children: 'They can hold anything (functionality, data, config)' }),
          ],
        }),
        `
`,
        (0, e.jsx)(t.h1, { children: 'Use Cases' }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'If you recall in the previous lesson where we built a currency converter, we had a variable ',
            (0, e.jsx)(i, { children: 'currencies' }),
            ' that was a giant object of all the currency codes and names. It would be nice if instead of having that object directly in our file, we could put it in a separate module and then import it into the file to use when we need it. That is what modules will allow us to do.',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, { children: 'Another use case for modules is utility functions.' }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'For example, in the Dad Jokes lesson, we had a method ',
            (0, e.jsx)(i, { children: 'randomItemFromArray' }),
            ". That method is not specific to that project, it's just a handy array utility. We could throw that off into a separate file that is used for utilities.",
          ],
        }),
        `
`,
        (0, e.jsx)(t.h2, { children: 'Modules in the Browser' }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            "Let's look at how modules work in the browser, and then we will look at some tooling that will help us work with them.",
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'You might hear modules referred to as ',
            (0, e.jsx)(t.strong, { children: 'ESM' }),
            ', ',
            (0, e.jsx)(t.strong, { children: 'EcmaScript modules' }),
            ', or ',
            (0, e.jsx)(t.strong, { children: 'ES6 modules' }),
            '. They were added to JavaScript a couple of years ago, and they are the best way to organize your JavaScript when you have multiple files.',
          ],
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            "Let's go into our playground and create a folder called ",
            (0, e.jsx)(i, { children: 'modules' }),
            ' (it might already be there for you).',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, { children: 'Inside that folder create the following files:' }),
        `
`,
        (0, e.jsxs)(h, {
          children: [
            (0, e.jsx)(a, { children: 'index.html' }),
            `
`,
            (0, e.jsx)(a, { children: 'utils.js' }),
            `
`,
            (0, e.jsx)(a, { children: 'handlers.js' }),
            `
`,
            (0, e.jsx)(a, { children: 'scripts.js' }),
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, { children: 'That gives us 3 separate JavaScript files.' }),
        `
`,
        (0, e.jsxs)(t.p, { children: ['Add the following code to ', (0, e.jsx)(i, { children: 'scripts.js' }), '.'] }),
        `
`,
        (0, e.jsxs)(t.p, { children: ['In ', (0, e.jsx)(i, { children: 'utils.js' }), ', add a simple function.'] }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            "Let's say we need to use the ",
            (0, e.jsx)(i, { children: 'returnHi' }),
            ' function in ',
            (0, e.jsx)(i, { children: 'scripts.js' }),
            '. Can we do that if the function is in a separate JavaScript file than the one using it?',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, { children: "Let's try. Modify the code like so." }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'Go into ',
            (0, e.jsx)(i, { children: 'index.html' }),
            ' and add the base HTML if it is not already there as well as a script src tag and link it to ',
            (0, e.jsx)(i, { children: 'scripts.js' }),
            '. Open the html page in the browser.',
          ],
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'When you do that, you should see an error that ',
            (0, e.jsx)(i, { children: 'returnHi' }),
            ' is not defined.',
          ],
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'That makes sense - because we have not yet put our ',
            (0, e.jsx)(i, { children: 'utils' }),
            ' on the page.',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'You might think we can just add another script source tag above the one we added and link it to utils.',
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'As you can see, now it works. All we had to do is put one script in front of the other one that needed it in.',
        }),
        `
`,
        (0, e.jsx)(t.h2, { children: 'In the Past' }),
        `
`,
        (0, e.jsx)(t.p, { children: 'In the past, this was how code was shared across multiple files.' }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'That got out of hand pretty quickly because you had all these files that had dependencies and the order of the script tags affected the execution because they all have to load in a waterfall, which means one after the other. Each file is assuming that the other one has access to it.',
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'If you look at our ',
            (0, e.jsx)(i, { children: 'scripts.js' }),
            ' file in VS Code, ESLint is complaining that returnHi is not defined. That is because that function does not exist within the file, so where did it come from?',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'The only reason it works is because we have globally scoped the function in another file and we are just assuming that it will be available to us on the page. That is a very brittle way to write JavaScript',
        }),
        `
`,
        (0, e.jsx)(t.h2, { children: 'In the Present' }),
        `
`,
        (0, e.jsx)(t.p, { children: 'The solution to that is to use modules!' }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'When you need a function like ',
            (0, e.jsx)(i, { children: 'returnHi' }),
            ', you can just import the function from the module, which is the same thing as saying from the file that actually contains that function.',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            "When you do that, you don't really have to worry about things loading before each other, because we will always import the values we need before hand.",
        }),
        `
`,
        (0, e.jsx)(t.p, { children: "Let's change this example to use a very sime module." }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'In ',
            (0, e.jsx)(i, { children: 'index.html' }),
            ', there is just have one script tag and that is going to be the entry point into the JavaScript.',
          ],
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'Add the type attribute on the script tag and set it to ',
            (0, e.jsx)(i, { children: 'module' }),
            ' like so \u{1F447}',
          ],
        }),
        `
`,
        (0, e.jsx)(t.pre, {
          filename: 'scripts.js',
          children: (0, e.jsx)(t.code, {
            className: 'language-js',
            children: `function App() {
  // scripts.js
  const name = "wes";
}
`,
          }),
        }),
        `
`,
        (0, e.jsx)(t.pre, {
          filename: 'App.js',
          highlight: '{8-9,11-12}',
          children: (0, e.jsx)(t.code, {
            className: 'language-js',
            children: `function App() {
  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState({ name: "Taylor" });

  // ...

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
`,
          }),
        }),
        `
`,
        (0, e.jsxs)(h, {
          children: [
            (0, e.jsx)(a, { children: 'index.html' }),
            `
`,
            (0, e.jsx)(a, { children: 'utils.js' }),
            `
`,
            (0, e.jsx)(a, { children: 'handlers.js' }),
            `
`,
            (0, e.jsx)(a, { children: 'scripts.js' }),
          ],
        }),
        `
`,
        (0, e.jsx)(t.h1, { children: 'Another' }),
        `
`,
        (0, e.jsx)(t.p, { children: 'In the past, this was how code was shared across multiple files.' }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'That got out of hand pretty quickly because you had all these files that had dependencies and the order of the script tags affected the execution because they all have to load in a waterfall, which means one after the other. Each file is assuming that the other one has access to it.',
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'If you look at our ',
            (0, e.jsx)(i, { children: 'scripts.js' }),
            ' file in VS Code, ESLint is complaining that returnHi is not defined. That is because that function does not exist within the file, so where did it come from?',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'The only reason it works is because we have globally scoped the function in another file and we are just assuming that it will be available to us on the page. That is a very brittle way to write JavaScript',
        }),
        `
`,
        (0, e.jsx)(t.p, { children: 'In the past, this was how code was shared across multiple files.' }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'That got out of hand pretty quickly because you had all these files that had dependencies and the order of the script tags affected the execution because they all have to load in a waterfall, which means one after the other. Each file is assuming that the other one has access to it.',
        }),
        `
`,
        (0, e.jsxs)(t.p, {
          children: [
            'If you look at our ',
            (0, e.jsx)(i, { children: 'scripts.js' }),
            ' file in VS Code, ESLint is complaining that returnHi is not defined. That is because that function does not exist within the file, so where did it come from?',
          ],
        }),
        `
`,
        (0, e.jsx)(t.p, {
          children:
            'The only reason it works is because we have globally scoped the function in another file and we are just assuming that it will be available to us on the page. That is a very brittle way to write JavaScript',
        }),
      ],
    });
  }
  function T(n = {}) {
    let { wrapper: t } = n.components || {};
    return t ? (0, e.jsx)(t, Object.assign({}, n, { children: (0, e.jsx)(p, n) })) : p(n);
  }
  var S = T;
  return k(C);
})();
return Component;
