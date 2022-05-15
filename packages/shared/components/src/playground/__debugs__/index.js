var d = Object.defineProperty,
  c = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable;
var l = (e, o, i) =>
    o in e
      ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[o] = i),
  t = (e, o) => {
    for (var i in o || (o = {})) r.call(o, i) && l(e, i, o[i]);
    if (a) for (var i of a(o)) s.call(o, i) && l(e, i, o[i]);
    return e;
  },
  p = (e, o) => c(e, m(o));
var h = (e, o) => {
  var i = {};
  for (var n in e) r.call(e, n) && o.indexOf(n) < 0 && (i[n] = e[n]);
  if (e != null && a)
    for (var n of a(e)) o.indexOf(n) < 0 && s.call(e, n) && (i[n] = e[n]);
  return i;
};
const makeShortcode = (e) =>
    function (i) {
      return (
        console.warn(
          'Component ' +
            e +
            ' was not imported, exported, or provided by MDXProvider as global scope'
        ),
        mdx('div', t({}, i))
      );
    },
  Em = makeShortcode('Em'),
  IntroFileViewerDemo = makeShortcode('IntroFileViewerDemo'),
  DesktopOnly = makeShortcode('DesktopOnly'),
  MobileOnly = makeShortcode('MobileOnly'),
  Sidenote = makeShortcode('Sidenote'),
  HooksFileViewerDemo = makeShortcode('HooksFileViewerDemo'),
  NewsletterSignup = makeShortcode('NewsletterSignup'),
  Spacer = makeShortcode('Spacer'),
  MetaFileViewerDemo = makeShortcode('MetaFileViewerDemo'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(i) {
  var n = i,
    { components: e } = n,
    o = h(n, ['components']);
  return mdx(
    MDXLayout,
    p(t(t({}, layoutProps), o), { components: e, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      'React is famously unopinionated when it comes to file/directory structure. How should you structure the files and directories in your applications?'
    ),
    mdx(
      'p',
      null,
      "Well, there is no one \u201Cright\u201D way, but I've tried ",
      mdx('em', { parentName: 'p' }, 'lots'),
      " of different approaches in the 7+ years I've been using React, and I've iterated my way to a solution I'm ",
      mdx('em', { parentName: 'p' }, 'really'),
      ' happy with.'
    ),
    mdx(
      'p',
      null,
      "In this blog post, I'll share the structure I use across all my current projects, including this blog and my custom course platform."
    ),
    mdx('h1', null, 'Interactive file explorer'),
    mdx(
      'p',
      null,
      "Alright, so I'll explain everything in depth, but I thought it'd be fun to let you take a self-guided tour first."
    ),
    mdx(
      'p',
      null,
      "Here's an ",
      mdx(
        Em,
        { color: 'var(--color-secondary)', mdxType: 'Em' },
        'interactive'
      ),
      ' file explorer. Feel free to poke around and see how things are structured!'
    ),
    mdx(IntroFileViewerDemo, { mdxType: 'IntroFileViewerDemo' }),
    mdx(
      'p',
      null,
      'The files in this demo are JavaScript, but this structure works just as well for TypeScript projects!'
    ),
    mdx('h1', null, 'My priorities'),
    mdx(
      'p',
      null,
      "Let's start by talking about my priorities, the things I've optimized for."
    ),
    mdx(
      'p',
      null,
      'First, I want to make it easy to import components. I want to be able to write this:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `import Button from '../Button';

// Or, using Webpack aliases:
// (We'll talk about this further down!)
import Button from '@components/Button';
`
      )
    ),
    mdx(
      'p',
      null,
      "Next: when I'm working in my IDE, I don't want to be flooded with ",
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      " files. I've worked in projects where the top bar looked like this:"
    ),
    mdx('img', {
      alt: 'A bunch of files open, all called \u201Cindex.js\u201D',
      src: '/images/file-structure/index.png',
      style: { maxWidth: 610 },
    }),
    mdx(
      'p',
      null,
      'To be fair, most editors will now include the parent directory when multiple ',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      ' files are open at once, but then each tab takes up way more space:'
    ),
    mdx(
      DesktopOnly,
      { breakpoint: 'small', mdxType: 'DesktopOnly' },
      mdx('img', {
        alt: 'A bunch of files open, formatted like \u201Cindex.js - /RainbowButton\u201D',
        src: '/images/file-structure/index-slightly-better.png',
      })
    ),
    mdx(
      MobileOnly,
      { breakpoint: 'small', mdxType: 'MobileOnly' },
      mdx('img', {
        alt: 'A bunch of files open, formatted like \u201Cindex.js - /RainbowButton\u201D',
        src: '/images/file-structure/index-slightly-better-mobile.png',
      })
    ),
    mdx(
      'p',
      null,
      'My goal is to have nice, clean component file names, like this:'
    ),
    mdx(
      DesktopOnly,
      { breakpoint: 'small', mdxType: 'DesktopOnly' },
      mdx('img', {
        alt: 'A bunch of files open, with proper names like \u201CRainbowButton.js\u201D',
        src: '/images/file-structure/index-fixed.png',
      })
    ),
    mdx(
      MobileOnly,
      { breakpoint: 'small', mdxType: 'MobileOnly' },
      mdx('img', {
        alt: 'A bunch of files open, with proper names like \u201CRainbowButton.js\u201D',
        src: '/images/file-structure/index-fixed-mobile.png',
      })
    ),
    mdx(
      'p',
      null,
      'Finally, in terms of organization, I want things to be organized by function, not by feature. I want a \u201Ccomponents\u201D directory, a \u201Chooks\u201D directory, a \u201Chelpers\u201D directory, and so on.'
    ),
    mdx(
      'p',
      null,
      'Sometimes, a complex component will have a bunch of associated files. These include:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        '"Sub-components", smaller components used exclusively by the main component'
      ),
      mdx('li', { parentName: 'ul' }, 'Helper functions'),
      mdx('li', { parentName: 'ul' }, 'Custom hooks'),
      mdx(
        'li',
        { parentName: 'ul' },
        'Constants or data shared between the component and its associated files'
      )
    ),
    mdx(
      'p',
      null,
      "As a real example, let's talk about the ",
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      ' component, used in this blog post for the \u201Cinteractive file explorer\u201D demo. Here are the files created specifically for this component:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'FileViewer.js'),
        ' \u2014 the main component'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'FileContent.js'),
        ' \u2014 the component that renders the contents of a file, with syntax highlighting'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'Sidebar.js'),
        ' \u2014 The list of files and directories that can be explored'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'Directory.js'),
        ' \u2014 the collapsible directory, to be used in the sidebar'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'File.js'),
        ' \u2014 An individual file, to be used in the sidebar'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('inlineCode', { parentName: 'li' }, 'FileViewer.helpers.js'),
        ' \u2014 helper functions to traverse the tree and help manage the expanding/collapsing functionality'
      )
    ),
    mdx(
      'p',
      null,
      "Ideally, all of these files should be tucked away, out of sight. They're only needed when I'm working on the ",
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      " component, and so I should only see them when I'm working on ",
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      '.'
    ),
    mdx(
      Sidenote,
      { title: 'One component per file?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'For a while, a popular ESLint rule warned against defining more than one component per file.'
      ),
      mdx(
        'p',
        null,
        "I think that this is a silly rule. Files can contain as many components as you'd like!"
      ),
      mdx(
        'p',
        null,
        'That said, I do generally find myself pulling non-trivial components into their own files, once I have the basic functionality working. It helps keep things organized, and makes it very clear which imports/styles/whatever are used by which components.'
      )
    ),
    mdx('h1', null, 'The implementation'),
    mdx(
      'p',
      null,
      "Alright, so let's talk about how my implementation addresses these priorities."
    ),
    mdx('h2', null, 'Components'),
    mdx(
      'p',
      null,
      "Here's an example component, with all the files and directories required to accomplish my goals:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, {}),
        `src/
\u2514\u2500\u2500 components/
    \u2514\u2500\u2500 FileViewer/
        \u251C\u2500\u2500 Directory.js
        \u251C\u2500\u2500 File.js
        \u251C\u2500\u2500 FileContent.js
        \u251C\u2500\u2500 FileViewer.helpers.js
        \u251C\u2500\u2500 FileViewer.js
        \u251C\u2500\u2500 index.js
        \u2514\u2500\u2500 Sidebar.js
`
      )
    ),
    mdx(
      'p',
      null,
      'Most of these files are the ones mentioned earlier, the files needed for the ',
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      ' component. The exception is ',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      ". That's new."
    ),
    mdx('p', null, 'If we open it up, we see something a bit curious:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `export * from './FileViewer';
export { default } from './FileViewer';
`
      )
    ),
    mdx(
      'p',
      null,
      "This is essentially a redirection. When we try to import this file, we'll be forwarded to the ",
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer.js'),
      ' file in the same directory. ',
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer.js'),
      ' holds the ',
      mdx('em', { parentName: 'p' }, 'actual'),
      ' code for this component.'
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        'Why not keep the code in ',
        mdx('inlineCode', { parentName: 'strong' }, 'index.js'),
        ' directly?'
      ),
      ' Well, then our editor will fill up with ',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      " files! I don't want that."
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Why have this file at all?'),
      " It simplifies imports. Otherwise, we'd have to drill into the component directory and select the file manually, like this:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `import FileViewer from '../FileViewer/FileViewer';
`
      )
    ),
    mdx(
      'p',
      null,
      'With our ',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      ' forwarding, we can shorten it to just:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `import FileViewer from '../FileViewer';
`
      )
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Why does this work?'),
      ' Well, ',
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      ' is a directory, and when we try to import a directory, the bundler will seek out an index file (',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      ', ',
      mdx('inlineCode', { parentName: 'p' }, 'index.ts'),
      ', etc). This is a convention carried over from web servers: ',
      mdx('inlineCode', { parentName: 'p' }, 'my-website.com'),
      ' will automatically try to load ',
      mdx('inlineCode', { parentName: 'p' }, 'index.html'),
      ", so that the user doesn't have to write ",
      mdx('inlineCode', { parentName: 'p' }, 'my-website.com/index.html'),
      '.'
    ),
    mdx(
      'p',
      null,
      'In fact, I think it helps to think of this in terms of an HTTP request. When we import ',
      mdx('inlineCode', { parentName: 'p' }, 'src/components/FileViewer'),
      ", the bundler will see that we're importing a directory and automatically load ",
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      '. The ',
      mdx('inlineCode', { parentName: 'p' }, 'index.js'),
      ' does a metaphorical ',
      mdx('i', null, '301 REDIRECT'),
      ' to ',
      mdx(
        'inlineCode',
        { parentName: 'p' },
        'src/components/FileViewer/FileViewer.js'
      ),
      '.'
    ),
    mdx(
      'p',
      null,
      'It may seem over-engineered, but this structure ticks all of my boxes, and I love it.'
    ),
    mdx('h2', null, 'Hooks'),
    mdx(
      'p',
      null,
      "If a hook is specific to a component, I'll keep it alongside that component. But what if the hook is generic, and meant to be used by lots of components?"
    ),
    mdx(
      'p',
      null,
      "In this blog, I have about 50 generalized, reusable hooks. They're collected in the ",
      mdx('inlineCode', { parentName: 'p' }, 'src/hooks'),
      ' directory. Here are some examples:'
    ),
    mdx(HooksFileViewerDemo, { mdxType: 'HooksFileViewerDemo' }),
    mdx(
      'p',
      null,
      "(This code is real! it's provided here as an example, but feel free to copy the hooks you're interested in.)"
    ),
    mdx(
      Sidenote,
      { title: 'Naming convention YOLO policy', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "Alright, so you'll notice I choose to do two things here:"
      ),
      mdx(
        'ol',
        null,
        mdx(
          'li',
          { parentName: 'ol' },
          'I use kebab-case instead of camelCase.'
        ),
        mdx(
          'li',
          { parentName: 'ol' },
          'I add ',
          mdx('inlineCode', { parentName: 'li' }, '.hook'),
          ' to the end of each file name.'
        )
      ),
      mdx(
        'p',
        null,
        "I'll be honest: I don't have a good reason for making these decisions. I just like the way it looks. \u{1F604}"
      ),
      mdx(
        'p',
        null,
        'You might prefer to name your hooks ',
        mdx('inlineCode', { parentName: 'p' }, 'useThing.js'),
        ' instead of ',
        mdx('inlineCode', { parentName: 'p' }, 'use-thing.hook.js'),
        ", and that's totally fine! It doesn't really matter which convention you use for your file names."
      )
    ),
    mdx('h2', null, 'Helpers'),
    mdx(
      'p',
      null,
      'What if I have a function that will help me accomplish some goal for the project, not directly tied to a specific component?'
    ),
    mdx(
      'p',
      null,
      'For example: this blog has multiple blog post categories, like React, CSS, and Animations. I have some functions that help me sort the categories by the number of posts, or get the formatted / "pretty" name for them. All that stuff lives in a ',
      mdx('inlineCode', { parentName: 'p' }, 'category.helpers.js'),
      ' file, inside ',
      mdx('inlineCode', { parentName: 'p' }, 'src/helpers'),
      '.'
    ),
    mdx(
      'p',
      null,
      'Sometimes, a function will start in a component-specific file (eg. ',
      mdx(
        'inlineCode',
        { parentName: 'p' },
        'FileViewer/FileViewer.helpers.js'
      ),
      "), but I'll realize that I need it in multiple spots. It'll get moved over to ",
      mdx('inlineCode', { parentName: 'p' }, 'src/helpers'),
      '.'
    ),
    mdx('h2', null, 'Utils'),
    mdx('p', null, 'Alright, so this one requires some explanation.'),
    mdx(
      'p',
      null,
      'A lot of devs treat "helpers" and "utils" as synonyms, but I make a distinction between them.'
    ),
    mdx(
      'p',
      null,
      "A helper is something specific to a given project. It wouldn't generally make sense to share helpers between projects; the ",
      mdx('inlineCode', { parentName: 'p' }, 'category.helpers.js'),
      ' functions really only make sense for this blog.'
    ),
    mdx(
      'p',
      null,
      'A utility is a generic function that accomplishes an abstract task. Pretty much every function in the ',
      mdx('inlineCode', { parentName: 'p' }, 'lodash'),
      ' library is a utility, according to my definition.'
    ),
    mdx(
      'p',
      null,
      "For example, here's a utility I use a lot. It plucks a random item from an array:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `export const sampleOne = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
`
      )
    ),
    mdx(
      'p',
      null,
      'I have a ',
      mdx('inlineCode', { parentName: 'p' }, 'utils.js'),
      ' file full of these sorts of utility functions.'
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        'Why not use an established utility library, like lodash?'
      ),
      " Sometimes I do, if it's not something I can easily build myself. But no utility library will have all of the utilities I need."
    ),
    mdx(
      'p',
      null,
      "For example, this one moves the user's cursor within a text input:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `export function moveCursorWithinInput(input, position) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(position, position);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', position);
    range.moveStart('character', position);
    range.select();
  }
}
`
      )
    ),
    mdx(
      'p',
      null,
      'And this utility gets the distance between two points on a cartesian plane (something that comes up surprisingly often in projects with non-trivial animations):'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `export const getDistanceBetweenPoints = (p1, p2) => {
  const deltaX = Math.abs(p2.x - p1.x);
  const deltaY = Math.abs(p2.y - p1.y);

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
};
`
      )
    ),
    mdx(
      'p',
      null,
      'These utilities live in ',
      mdx('inlineCode', { parentName: 'p' }, 'src/utils.js'),
      ', and they come with me from project to project. I copy/paste the file when I create a new project. I ',
      mdx('em', { parentName: 'p' }, 'could'),
      " publish it through NPM to ensure consistency between projects, but that would add a significant amount of friction, and it's not a trade-off that has been worth it to me. Maybe at some point, but not yet."
    ),
    mdx('h2', null, 'Constants'),
    mdx(
      'p',
      null,
      'Finally, I also have a ',
      mdx('inlineCode', { parentName: 'p' }, 'constants.js'),
      ' file. This file holds app-wide constants. Most of them are style-related (eg. colors, font sizes, breakpoints), but I also store public keys and other \u201Capp data\u201D here.'
    ),
    mdx('h2', null, 'Pages'),
    mdx(
      'p',
      null,
      'One thing not shown here is the idea of \u201Cpages\u201D.'
    ),
    mdx(
      'p',
      null,
      "I've omitted this section because it depends what tools you use. When I use something like create-react-app, I don't have pages, and everything is components. But when I use Next.js, I do have ",
      mdx('inlineCode', { parentName: 'p' }, '/src/pages'),
      ', with top-level components that define the rough structure for each route.'
    ),
    mdx('h1', null, 'Tradeoffs'),
    mdx(
      'p',
      null,
      "Every strategy has trade-offs. let's talk about some of the downsides to the file structure approach outlined in this blog post."
    ),
    mdx('h2', null, 'More boilerplate'),
    mdx(
      'p',
      null,
      'Whenever I want to create a new component, I need to generate:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'A new directory, ',
        mdx('inlineCode', { parentName: 'li' }, 'Widget/')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'A new file, ',
        mdx('inlineCode', { parentName: 'li' }, 'Widget/Widget.js')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'The index forwarder, ',
        mdx('inlineCode', { parentName: 'li' }, 'Widget/index.js')
      )
    ),
    mdx('p', null, "That's a lot of work to do upfront!"),
    mdx(
      'p',
      null,
      'Fortunately, ',
      mdx(
        'strong',
        { parentName: 'p' },
        "I don't have to do any of that manually."
      ),
      ' I created an NPM package, ',
      mdx(
        'a',
        t(
          { parentName: 'p' },
          { href: 'https://www.npmjs.com/package/new-component' }
        ),
        'new-component'
      ),
      ', which does all of this for me automatically.'
    ),
    mdx('p', null, 'In my terminal, I type:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t(
          { parentName: 'pre' },
          {
            className: 'language-null',
            metastring: 'lessBottomMargin=true',
            lessBottomMargin: 'true',
          }
        ),
        `nc Widget
`
      )
    ),
    mdx(
      'p',
      null,
      "When I execute this command, all of the boilerplate is created for me, including the basic component structure I'd otherwise have to type out! It's an incredible time-saver, and in my opinion, it totally nullifies this drawback."
    ),
    mdx(
      'p',
      null,
      "You're welcome to use my package if you'd like! You might want to fork it, to match your preferred conventions."
    ),
    mdx('h2', null, 'Organized by function'),
    mdx('p', null, 'In general, there are two broad ways to organize things:'),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'By function (components, hooks, helpers\u2026)'
      ),
      mdx('li', { parentName: 'ul' }, 'By feature (search, users, admin\u2026)')
    ),
    mdx('p', null, "Here's an example of how to structure code by feature:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, {}),
        `src/
\u251C\u2500\u2500 base/
\u2502   \u2514\u2500\u2500 components/
\u2502       \u251C\u2500\u2500 Button.js
\u2502       \u251C\u2500\u2500 Dropdown.js
\u2502       \u251C\u2500\u2500 Heading.js
\u2502       \u2514\u2500\u2500 Input.js
\u251C\u2500\u2500 search/
\u2502   \u251C\u2500\u2500 components/
\u2502   \u2502   \u251C\u2500\u2500 SearchInput.js
\u2502   \u2502   \u2514\u2500\u2500 SearchResults.js
\u2502   \u2514\u2500\u2500 search.helpers.js
\u2514\u2500\u2500 users/
    \u251C\u2500\u2500 components/
    \u2502   \u251C\u2500\u2500 AuthPage.js
    \u2502   \u251C\u2500\u2500 ForgotPasswordForm.js
    \u2502   \u2514\u2500\u2500 LoginForm.js
    \u2514\u2500\u2500 use-user.hook.js
`
      )
    ),
    mdx(
      'p',
      null,
      'There are things I really like about this. It makes it possible to separate low-level reusable \u201Ccomponent library\u201D type components from high-level template-style views and pages. And it makes it easier to quickly get a sense of how the app is structured.'
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, "But here's the problem:"),
      " real life isn't nicely segmented like this, and categorization is actually ",
      mdx('em', { parentName: 'p' }, 'really hard'),
      '.'
    ),
    mdx(
      'p',
      null,
      "I've worked with a few projects that took this sort of structure, and every time, there have been a few ",
      mdx('em', { parentName: 'p' }, 'significant'),
      ' sources of friction.'
    ),
    mdx(
      'p',
      null,
      'Every time you create a component, you have to decide where that component belongs. If we create a component to search for a specific user, is that part of the \u201Csearch\u201D concern, or the \u201Cusers\u201D concern?'
    ),
    mdx(
      'p',
      null,
      'Often, the boundaries are blurry, and different developers will make different decisions around what should go where.'
    ),
    mdx(
      'p',
      null,
      "When I start work on a new feature, I have to find the files, and they might not be where I expect them to be. Every developer on the project will have their own conceptual model for what should go where, and I'll need to spend time acclimating to their view."
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        "And then there's the really big issue:"
      ),
      ' ',
      mdx('em', { parentName: 'p' }, 'refactoring'),
      '.'
    ),
    mdx(
      'p',
      null,
      'Products are always evolving and changing, and the boundaries we draw around features today might not make sense tomorrow. When the product changes, it will require ',
      mdx('strong', { parentName: 'p' }, 'a ton'),
      " of work to move and rename all the files, to recategorize everything so that it's in harmony with the next version of the product."
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        "Realistically, that work won't actually get done."
      ),
      " It's too much trouble; the team is already working on stuff, and they have a bunch of half-finished PRs, where they're all editing files that will no longer exist if we move all the files around. It's possible to manage these conflicts, but it's a big pain."
    ),
    mdx(
      'p',
      null,
      'And so, the distance between ',
      mdx('i', null, 'product'),
      ' features and the ',
      mdx('i', null, 'code'),
      ' features will drift further and further apart. Eventually, the features in the codebase will be conceptually organized around a product that no longer exists, and so everyone will just have to memorize where everything goes. Instead of being intuitive, the boundaries become totally arbitrary at best, and misleading at worst.'
    ),
    mdx(
      'p',
      null,
      'To be fair, it ',
      mdx('em', { parentName: 'p' }, 'is'),
      " possible to avoid this worst-case scenario, but it's a lot of extra work for relatively little benefit, in my opinion."
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        "But isn't the alternative too chaotic?"
      ),
      " It's not uncommon for large projects to have ",
      mdx('i', null, 'thousands'),
      " of React components. If you follow my function-based approach, it means you'll have an enormous set of unorganized components sitting side-by-side in ",
      mdx('inlineCode', { parentName: 'p' }, 'src/components'),
      '.'
    ),
    mdx(
      'p',
      null,
      "This might sound like a big deal, but honestly, I feel like it's a small price to pay. At least you know exactly where to look! You don't have to hunt around through dozens of features to find the file you're after. And it takes 0 seconds to figure out where to place each new file you create."
    ),
    mdx('h1', null, 'Webpack aliases'),
    mdx(
      'p',
      null,
      'Webpack is the bundler used to package up our code before deployment. There are other bundlers, but most common tools (eg. create-react-app, Next.js, Gatsby) will use Webpack internally.'
    ),
    mdx(
      'p',
      null,
      'A popular Webpack feature lets us create ',
      mdx('em', { parentName: 'p' }, 'aliases'),
      ', global names that point to a specific file or directory. For example:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-js' }),
        `// This:
import { sortCategories } from '../../helpers/category.helpers';

// \u2026turns into this:
import { sortCategories } from '@helpers/category.helpers';
`
      )
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, "Here's how it works:"),
      ' I create an alias called ',
      mdx('inlineCode', { parentName: 'p' }, '@helpers'),
      ' which will point to the ',
      mdx('inlineCode', { parentName: 'p' }, '/src/helpers'),
      ' directory. Whenever the bundler sees ',
      mdx('inlineCode', { parentName: 'p' }, '@helpers'),
      ', it replaces that string with a relative path for that directory.'
    ),
    mdx(
      'p',
      null,
      'The main benefit is that it turns a relative path (',
      mdx('inlineCode', { parentName: 'p' }, '../../helpers'),
      ') into an absolute path (',
      mdx('inlineCode', { parentName: 'p' }, '@helpers'),
      '). I never have to think about how many levels of ',
      mdx('inlineCode', { parentName: 'p' }, '../'),
      " are needed. And when I move files, I don't have to fix/update any import paths."
    ),
    mdx(
      'p',
      null,
      'Implementing Webpack aliases is beyond the scope of this blog post, and will vary depending on the meta-framework used, but you can learn more in ',
      mdx(
        'a',
        t(
          { parentName: 'p' },
          { href: 'https://webpack.js.org/configuration/resolve/' }
        ),
        'the Webpack documentation'
      ),
      '.'
    ),
    mdx(
      Sidenote,
      { type: 'warning', title: 'Alias tradeoffs', mdxType: 'Sidenote' },
      mdx('p', null, 'Like all nice things, Webpack aliases have trade-offs.'),
      mdx(
        'p',
        null,
        "The biggest issue is that Webpack aliases are non-standard. You're moving away from native JavaScript imports and doing something custom. This locks you in."
      ),
      mdx(
        'p',
        null,
        'It can also make it more difficult to use your code with third-party services. If you want to build a component library with Storybook, or create unit tests with Jest, these tools will need to be configured to understand your Webpack aliases. In most cases, this is possible, but it can be tricky to figure out. Definitely an extra source of friction.'
      ),
      mdx(
        'p',
        null,
        'Also, some editors will struggle with auto-completion, though this too can generally be configured. For VS Code, we can add our aliases in ',
        mdx('inlineCode', { parentName: 'p' }, 'jsconfig.json'),
        ". Here's my file, as an example:"
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'pre',
          null,
          mdx(
            'code',
            t(
              { parentName: 'pre' },
              {
                className: 'language-json',
                metastring: 'lessBottomMargin',
                lessBottomMargin: !0,
              }
            ),
            `{
  "exclude": ["./node_modules"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["./src/components/*"],
      "@constants": ["./src/constants/index.js"],
      "@helpers/*": ["./src/helpers/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@utils": ["./src/utils/index.js"]
    }
  }
}
`
          )
        )
      )
    ),
    mdx('h1', null, 'Something on the horizon'),
    mdx('p', null, "So, that's how I structure my React applications!"),
    mdx(
      'p',
      null,
      "As I mentioned right at the top, there's no right/wrong way to manage file structure. Every approach prioritizes different things, makes different tradeoffs."
    ),
    mdx(
      'p',
      null,
      "Personally, though, I've found that this structure stays out of my way. I'm able to spend my time doing what I like: building quality user interfaces."
    ),
    mdx(
      'p',
      null,
      "React is so much fun. I've been using it since 2015, and I ",
      mdx('i', null, 'still'),
      ' feel excited when I get to work with React.'
    ),
    mdx(
      'p',
      null,
      "For a few years, I taught at a local coding bootcamp. I've worked one-on-one with ",
      mdx('em', { parentName: 'p' }, 'tons'),
      ' of developers, answering their questions and helping them get unstuck. I wound up developing the curriculum that this school uses, for all of its instructors.'
    ),
    mdx(
      'p',
      null,
      "I want to share the joy of React with more people, and so I'm working on something new. An online course that will teach you how to build complex, rich, whimsical, accessible applications with React."
    ),
    mdx(
      'p',
      null,
      "It's too early to share much yet, but if you'd like to follow along, the best way is through my newsletter. You'll be the first to hear about course updates, as well as any new blog posts I publish!"
    ),
    mdx(NewsletterSignup, {
      variant: 'minimal',
      tags: ['joy-of-react-updates'],
      mdxType: 'NewsletterSignup',
    }),
    mdx(Spacer, { size: 64, mdxType: 'Spacer' }),
    mdx(
      'p',
      null,
      "On average, I send about 1 issue a month. No spam, no nonsense. If you don't like it, you can unsubscribe in 1 click. ",
      mdx(
        'a',
        t(
          { parentName: 'p' },
          { href: 'https://www.joshwcomeau.com/newsletter-issues/020/' }
        ),
        'Check out a recent issue!'
      )
    ),
    mdx('h1', null, 'Bonus: Exploring the FileViewer component'),
    mdx(
      'p',
      null,
      'Are you curious how I built that ',
      mdx('inlineCode', { parentName: 'p' }, 'FileViewer'),
      ' component up there?'
    ),
    mdx(
      'p',
      null,
      "I'll be honest, it's not my ",
      mdx('em', { parentName: 'p' }, 'best'),
      ' work. But I did hit some interesting challenges, trying to render a recursive structure with React!'
    ),
    mdx(
      'p',
      null,
      "If you're curious how it works, you can use the FileViewer component to explore the FileViewer source code. Not all of the context is provided, but it should give you a pretty good idea about how it works!"
    ),
    mdx(MetaFileViewerDemo, { mdxType: 'MetaFileViewerDemo' })
  );
}
MDXContent.isMDXComponent = !0;
