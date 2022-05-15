var h = Object.defineProperty,
  c = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var l = (t, n, i) =>
    n in t
      ? h(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[n] = i),
  e = (t, n) => {
    for (var i in n || (n = {})) s.call(n, i) && l(t, i, n[i]);
    if (o) for (var i of o(n)) r.call(n, i) && l(t, i, n[i]);
    return t;
  },
  p = (t, n) => c(t, m(n));
var d = (t, n) => {
  var i = {};
  for (var a in t) s.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && o)
    for (var a of o(t)) n.indexOf(a) < 0 && r.call(t, a) && (i[a] = t[a]);
  return i;
};
const makeShortcode = (t) =>
    function (i) {
      return (
        console.warn(
          'Component ' +
            t +
            ' was not imported, exported, or provided by MDXProvider as global scope'
        ),
        mdx('div', e({}, i))
      );
    },
  Playground = makeShortcode('Playground'),
  Sidenote = makeShortcode('Sidenote'),
  Asterisk = makeShortcode('Asterisk'),
  Spacer = makeShortcode('Spacer'),
  EnvelopeDemo = makeShortcode('EnvelopeDemo'),
  EnvelopeLayers = makeShortcode('EnvelopeLayers'),
  VideoGif = makeShortcode('VideoGif'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(i) {
  var a = i,
    { components: t } = a,
    n = d(a, ['components']);
  return mdx(
    MDXLayout,
    p(e(e({}, layoutProps), n), { components: t, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      "In CSS, we're given a tool to explicitly control the stacking order of HTML elements: ",
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      '. Elements with a higher value will appear on top:'
    ),
    mdx(Playground, {
      id: 'z-index',
      splitRatio: 0.55,
      layoutMode: 'tabbed',
      layoutMode: 'tabbed',
      html: `
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
  `,
      cssCode: `
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
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'Because ',
      mdx('inlineCode', { parentName: 'p' }, '.first.box'),
      ' has a larger z-index than ',
      mdx('inlineCode', { parentName: 'p' }, '.second.box'),
      ', it stacks in front. If we remove that z-index declaration, it falls to the back. The code above is editable\u2014give it a shot!'
    ),
    mdx(
      'p',
      null,
      "Things aren't always so simple, however. Sometimes, the larger z-index value ",
      mdx('em', { type: 'original' }, "doesn't"),
      ' win.'
    ),
    mdx('p', null, "Check out what's going on here:"),
    mdx(Playground, {
      id: 'parent-child',
      splitRatio: 0.55,
      layoutMode: 'tabbed',
      html: `
<style>
  header {
    position: relative;
    z-index: 2;
  }
  .tooltip {
    position: absolute;
    z-index: 999999;
  }
  main {
    position: relative;
    z-index: 1;
  }
</style>

<header>
  My Cool Site
</header>
<main>
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
  `,
      cssCode: `
body {
  background: #eee;
}

header {
  height: 60px;
  line-height: 60px;
  background: pink;
  text-align: center;
}

main {
  padding: 32px;
}

.tooltip {
  top: -12px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 90px;
  text-align: center;
  padding: 8px;
  background: white;
  box-shadow: 1px 2px 8px hsla(0deg, 0%, 0%, 0.25);
  border-radius: 6px;
}
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, '.tooltip'),
      ' has a ',
      mdx('strong', { parentName: 'p' }, 'much'),
      ' larger z-index than ',
      mdx('inlineCode', { parentName: 'p' }, 'header'),
      '! So why on earth is the header on top?'
    ),
    mdx(
      'p',
      null,
      "To unravel this mystery, we'll need to learn about ",
      mdx('em', { parentName: 'p' }, 'stacking contexts'),
      ", an obscure-yet-fundamental CSS mechanism. In this article, we'll explore what they are, how they work, and how we can use them to our advantage."
    ),
    mdx(
      Sidenote,
      { title: 'Intended audience', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'This tutorial is written for front-end developers of all experience levels. Especially folks who have struggled with z-index issues before.'
      )
    ),
    mdx('h1', null, 'Layers and groups'),
    mdx(
      'p',
      null,
      "If you've ever used image-editing software like Photoshop or Figma, you're probably familiar with the concept of layers:"
    ),
    mdx('img', {
      alt: '3 layers in a Photoshop document: a cat photo (bottom), a moustache (mid), and a halo (top)',
      src: '/images/stacking-contexts/photoshop-layers.png',
      width: 576 / 2,
      height: 488 / 2,
    }),
    mdx(
      'p',
      null,
      'Our image has 3 separate canvases, stacked like pancakes. The bottom layer is a cat photo, with 2 layers on top that add silly details. By flattening these layers, we wind up with a final composition:'
    ),
    mdx('img', {
      alt: 'A cat photo with a poorly-drawn moustache and halo',
      src: '/images/stacking-contexts/cat-layers.jpg',
      width: 300,
      height: 300,
    }),
    mdx(
      'p',
      null,
      'In these programs, we can also ',
      mdx('em', { type: 'original' }, 'group layers'),
      ':'
    ),
    mdx('img', {
      alt: 'The 3 layers from the previous drawing are in a group, \u201CCat\u201D. Another group, \u201CDog\u201D, includes a top hat and a dog photo',
      src: '/images/stacking-contexts/photoshop-groups.png',
      width: 576 / 2,
      height: 762 / 2,
    }),
    mdx(
      'p',
      null,
      "Like files in a folder, a group allows us to segment our layers. In terms of stacking order, layers aren't allowed to \u201Cintermingle\u201D between groups: All of ",
      mdx('inlineCode', { parentName: 'p' }, 'dog'),
      "'s layers will appear on top of all of ",
      mdx('inlineCode', { parentName: 'p' }, 'cat'),
      "'s layers."
    ),
    mdx(
      'p',
      null,
      "When we export the composition, we don't see the cat at all, since it's behind the dog:"
    ),
    mdx('img', {
      alt: 'A dog photo with a poorly-drawn top hat',
      src: '/images/stacking-contexts/dog-layers.jpg',
      width: 300,
      height: 300,
    }),
    mdx(
      'p',
      null,
      'When it comes to CSS, things work in a similar way: elements are grouped into ',
      mdx('strong', { parentName: 'p' }, 'stacking contexts'),
      '. When we give an element a z-index, that value is only compared ',
      mdx(
        'em',
        { type: 'original' },
        'against other elements in the same context'
      ),
      '. z-index values are not global.'
    ),
    mdx(
      'p',
      null,
      'By default, a plain HTML document will have a single stacking context that encompasses all nodes. But we can create additional contexts!'
    ),
    mdx(
      'p',
      null,
      "There are many ways to create stacking contexts, but here's the most common:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `.some-element {
  position: relative;
  z-index: 1;
}
`
      )
    ),
    mdx(
      'p',
      null,
      'By combining these two declarations, a secret mechanism is triggered: a stacking context is created, forming a group around this element and all of its children.'
    ),
    mdx('p', null, "Let's take another look at our problem from above:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-html' }),
        `<style>
  header {
    position: relative;
    z-index: 2;
  }
  .tooltip {
    position: absolute;
    z-index: 999999;
  }
  main {
    position: relative;
    z-index: 1;
  }
</style>

<header>
  My Cool Site
</header>
<main>
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
`
      )
    ),
    mdx(
      'p',
      null,
      'We can map out the stacking contexts being created in this snippet:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'The root context',
        mdx(
          'ul',
          { parentName: 'li' },
          mdx(
            'li',
            { parentName: 'ul' },
            mdx('inlineCode', { parentName: 'li' }, '<header>')
          ),
          mdx(
            'li',
            { parentName: 'ul' },
            mdx('inlineCode', { parentName: 'li' }, '<main>'),
            mdx(
              'ul',
              { parentName: 'li' },
              mdx(
                'li',
                { parentName: 'ul' },
                mdx('inlineCode', { parentName: 'li' }, '<div class="tooltip">')
              )
            )
          )
        )
      )
    ),
    mdx(
      'p',
      null,
      'Our ',
      mdx('inlineCode', { parentName: 'p' }, '.tooltip'),
      ' element has a z-index of 999999, but that value is only relevant within the ',
      mdx('inlineCode', { parentName: 'p' }, '<main>'),
      ' stacking context. It controls whether the tooltip shows up above or below the adjacent ',
      mdx('inlineCode', { parentName: 'p' }, '<p>'),
      ' tag, nothing more.'
    ),
    mdx(
      'p',
      null,
      'Meanwhile, in the parent context, ',
      mdx('inlineCode', { parentName: 'p' }, '<header>'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, '<main>'),
      ' are compared. Because ',
      mdx('inlineCode', { parentName: 'p' }, '<main>'),
      ' has a smaller z-index, it shows up underneath ',
      mdx('inlineCode', { parentName: 'p' }, '<header>'),
      '. ',
      mdx(
        'strong',
        { parentName: 'p' },
        'All of its children come along for the ride.'
      )
    ),
    mdx(
      Sidenote,
      { title: "It's like semantic versioning", mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "I recognize that not everyone has experience with software like Photoshop / Figma / Sketch. If the analogy above didn't resonate, I have another one that you're more likely to be familiar with: ",
        mdx('em', { parentName: 'p' }, 'semantic versioning.')
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          `In semantic versioning, different "tiers" of versions are separated by dots. For example, version 2.0 of a package is a larger version than 1.0, but it's also a larger version than 1.999.`
        ),
        mdx(
          'p',
          null,
          'z-indexes are like version numbers, and stacking contexts are like tiers. Every time a stacking context is created, we add a dot to our version:'
        ),
        mdx(
          'pre',
          null,
          mdx(
            'code',
            e(
              { parentName: 'pre' },
              {
                className: 'language-html',
                metastring: 'lessBottomMargin',
                lessBottomMargin: !0,
              }
            ),
            `<header> <!-- 2.0 -->
  My Cool Site
</header>
<main> <!-- 1.0 -->
  <div class="tooltip"> <!-- 1.999999 -->
    A tooltip
  </div>
</main>
`
          )
        ),
        mdx(
          'p',
          null,
          'Our tooltip shows up underneath our ',
          mdx('inlineCode', { parentName: 'p' }, '<header>'),
          " because 1.999999 is a lower version than 2.0. It doesn't matter how many 9s we add to the minor version, it'll never eclipse a larger major version."
        )
      )
    ),
    mdx('h1', null, 'Fixing our example'),
    mdx(
      'p',
      null,
      "How do we solve our tooltip problem? Well, in this case, we don't actually need to create a stacking context on our ",
      mdx('inlineCode', { parentName: 'p' }, '<main>'),
      ':'
    ),
    mdx(Playground, {
      id: 'fixing-our-example',
      splitRatio: 0.65,
      layoutMode: 'tabbed',
      html: `
<style>
  header {
    position: relative;
    z-index: 2;
  }
  .tooltip {
    position: absolute;
    z-index: 999999;
  }
  main {
    position: relative;
    /* No more z-index here! */
  }
</style>

<header>
  My Cool Site
</header>
<main>
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
  `,
      cssCode: `
/* These styles are purely cosmetic */
body {
  background: #eee;
}

header {
  height: 60px;
  line-height: 60px;
  background: pink;
  text-align: center;
}

main {
  padding: 32px;
}

.tooltip {
  top: -12px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 90px;
  text-align: center;
  padding: 8px;
  background: white;
  box-shadow: 1px 2px 8px hsla(0deg, 0%, 0%, 0.25);
  border-radius: 6px;
}
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'Without a z-index, ',
      mdx('inlineCode', { parentName: 'p' }, '<main>'),
      " won't create a stacking context. Our hierarchy, then, looks like this:"
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'The root context',
        mdx(
          'ul',
          { parentName: 'li' },
          mdx(
            'li',
            { parentName: 'ul' },
            mdx('inlineCode', { parentName: 'li' }, '<header>')
          ),
          mdx(
            'li',
            { parentName: 'ul' },
            mdx('inlineCode', { parentName: 'li' }, '<div class="tooltip">')
          )
        )
      )
    ),
    mdx(
      'p',
      null,
      'Because the header and our tooltip are now in the same context, their z-index values face off, and the tooltip emerges as the victor.'
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'An important distinction:'),
      " we're not talking about parent/child relationships here. It doesn't matter that the tooltip is more deeply nested than the header. The browser only cares about stacking contexts."
    ),
    mdx(
      Sidenote,
      { title: 'Breaking the rules', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'In this contrived example, we can remove the z-index from ',
        mdx('inlineCode', { parentName: 'p' }, '<main>'),
        " because it wasn't really doing anything. But what if we actually did need ",
        mdx('inlineCode', { parentName: 'p' }, '<main>'),
        ' to use z-index / create a stacking context?'
      ),
      mdx(
        'p',
        null,
        'According to the rules of CSS, there is no way for us to "break free" of the stacking context. An element inside one stacking context can never be compared against elements in another.'
      ),
      mdx(
        'p',
        null,
        'We can still achieve the desired result, however, with a bit of out-of-the-box',
        mdx(Asterisk, {
          content: 'Pun intended \u{1F604}',
          mdxType: 'Asterisk',
        }),
        ' thinking.'
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          'We can render our tooltip outside of ',
          mdx('inlineCode', { parentName: 'p' }, '<main>'),
          ' by appending it to the ',
          mdx('inlineCode', { parentName: 'p' }, '<body>'),
          " tag. We can then use some CSS to position it accordingly, to make it seem as though it's a child of that element."
        ),
        mdx(
          'p',
          null,
          "This is an advanced technique, and it requires careful planning to make sure that we don't inadvertently break the experience for folks using a keyboard to navigate. Thankfully, libraries like ",
          mdx(
            'a',
            e({ parentName: 'p' }, { href: 'https://reach.tech/' }),
            'Reach UI'
          ),
          ' use this technique under-the-hood, and solve for all the accessibility and usability challenges.'
        ),
        mdx(
          'p',
          null,
          "It's beyond the scope of this tutorial, but if you're interested in learning more, research ",
          mdx(
            'a',
            e(
              { parentName: 'p' },
              { href: 'https://reactjs.org/docs/portals.html' }
            ),
            'how Portals work in React'
          ),
          ', and check out ',
          mdx(
            'a',
            e(
              { parentName: 'p' },
              { href: 'https://github.com/reach/reach-ui' }
            ),
            "Reach UI's source code"
          ),
          '.'
        )
      )
    ),
    mdx('h1', null, 'Creating stacking contexts'),
    mdx(
      'p',
      null,
      "We've seen how we can create a stacking context by combining relative or absolute positioning with ",
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      ", but it's not the only way! Here are some others:"
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'Setting ',
        mdx('inlineCode', { parentName: 'li' }, 'opacity'),
        ' to a value less than ',
        mdx('inlineCode', { parentName: 'li' }, '1')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Setting ',
        mdx('inlineCode', { parentName: 'li' }, 'position'),
        ' to ',
        mdx('inlineCode', { parentName: 'li' }, 'fixed'),
        ' or ',
        mdx('inlineCode', { parentName: 'li' }, 'sticky'),
        ' (No z-index needed for these values!)'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Applying a ',
        mdx('inlineCode', { parentName: 'li' }, 'mix-blend-mode'),
        ' other than ',
        mdx('inlineCode', { parentName: 'li' }, 'normal')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Adding a ',
        mdx('inlineCode', { parentName: 'li' }, 'z-index'),
        ' to a child inside a ',
        mdx('inlineCode', { parentName: 'li' }, 'display: flex'),
        ' or ',
        mdx('inlineCode', { parentName: 'li' }, 'display: grid'),
        ' container'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Using ',
        mdx('inlineCode', { parentName: 'li' }, 'transform'),
        ', ',
        mdx('inlineCode', { parentName: 'li' }, 'filter'),
        ', ',
        mdx('inlineCode', { parentName: 'li' }, 'clip-path'),
        ', or ',
        mdx('inlineCode', { parentName: 'li' }, 'perspective')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Using ',
        mdx('inlineCode', { parentName: 'li' }, 'will-change'),
        ' with a value like ',
        mdx('inlineCode', { parentName: 'li' }, 'opacity'),
        ' or ',
        mdx('inlineCode', { parentName: 'li' }, 'transform')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'Explicitly creating a context with ',
        mdx('inlineCode', { parentName: 'li' }, 'isolation: isolate'),
        ' (More on this soon!)'
      )
    ),
    mdx(
      'p',
      null,
      'There are a few other ways as well. You can find ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          {
            href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#the_stacking_context',
          }
        ),
        'the full list on MDN'
      ),
      '.'
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        'This can lead to some surprising situations.'
      ),
      " Check out what's happening here:"
    ),
    mdx(Playground, {
      id: 'broken-with-will-change',
      splitRatio: 0.65,
      layoutMode: 'tabbed',
      html: `
<style>
  header {
    position: relative;
    z-index: 2;
  }
  .tooltip {
    position: absolute;
    z-index: 999999;
  }
  main {
    position: relative;
    /*
      No more z-index\u2026
      but it's still broken??
    */
    will-change: transform;
  }
</style>

<header>
  My Cool Site
</header>
<main>
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
  `,
      cssCode: `
/* These styles are purely cosmetic */
body {
  background: #eee;
}

header {
  height: 60px;
  line-height: 60px;
  background: pink;
  text-align: center;
}

main {
  padding: 32px;
}

.tooltip {
  top: -12px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 90px;
  text-align: center;
  padding: 8px;
  background: white;
  box-shadow: 1px 2px 8px hsla(0deg, 0%, 0%, 0.25);
  border-radius: 6px;
}
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, 'main'),
      " doesn't set a z-index anymore, but it uses ",
      mdx('inlineCode', { parentName: 'p' }, 'will-change'),
      ', a property that can create a stacking context all on its own.'
    ),
    mdx('h1', null, 'A common misconception about z-index'),
    mdx(
      'p',
      null,
      'In order for z-index to work, we need to set ',
      mdx('inlineCode', { parentName: 'p' }, 'position'),
      ' to something like ',
      mdx('inlineCode', { parentName: 'p' }, 'relative'),
      ' or ',
      mdx('inlineCode', { parentName: 'p' }, 'absolute'),
      ', right?'
    ),
    mdx('p', null, "Not quite. Check out what's happening here:"),
    mdx(Playground, {
      splitRatio: 0.55,
      id: 'z-index-without-position',
      layoutMode: 'tabbed',
      html: `
<style>
  .wrapper {
    display: flex;
  }
  .second.box {
    z-index: 1;
    background: hotpink;
    margin-top: 20px;
    margin-left: -20px;
    margin-right: -20px;
  }
</style>

<div class="wrapper">
  <div class="first box"></div>
  <div class="second box"></div>
  <div class="third box"></div>
</div>
  `,
      cssCode: `
.box {
  width: 50px;
  height: 50px;
  border: 3px solid;
  background: silver;
}
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'The second box is lifted above its siblings using ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      '. There are no ',
      mdx('inlineCode', { parentName: 'p' }, 'position'),
      ' declarations anywhere in the snippet, though!'
    ),
    mdx(
      'p',
      null,
      'In general, ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      ' only works with "positioned" elements (elements that set ',
      mdx('inlineCode', { parentName: 'p' }, 'position'),
      ' to something other than the default \u201Cstatic\u201D). But the Flexbox specification adds an exception: flex children can use ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      " even if they're statically-positioned."
    ),
    mdx(
      'p',
      null,
      'An earlier version of this post said that all elements that create a stacking context can use ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      ', but that was incorrect. \u{1F62C}'
    ),
    mdx('h1', null, 'Hold on a minute\u2026'),
    mdx(
      'p',
      null,
      "There's a Weird Thing here, and I think it's worth pondering about for a minute or two."
    ),
    mdx(
      'p',
      null,
      'In our Photoshop analogy, there is a clear distinction between groups and layers. All of the visual elements are layers, and groups can be conjured as structural helpers to contain them. They are distinct ideas.'
    ),
    mdx(
      'p',
      null,
      'On the web, however, the distinction is a bit less clear. Every element that uses z-index must ',
      mdx('em', { type: 'original' }, 'also'),
      ' create a stacking context.'
    ),
    mdx(
      'p',
      null,
      'When we decide to give an element a z-index, our goal is typically to lift or lower that element above/below some other element in the parent stacking context. ',
      mdx(
        'em',
        { type: 'original' },
        "We aren't intending to produce a stacking context on that element!"
      ),
      " But it's important that we consider it."
    ),
    mdx(
      'p',
      null,
      "When a stacking context is created, it \u201Cflattens\u201D all of its descendants. Those children can still be rearranged internally, but we've essentially locked those children in."
    ),
    mdx('p', null, "Let's take another look at the markup from earlier:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-html' }),
        `<header>
  My Cool Site
</header>
<main>
  <div class="tooltip">
    A tooltip
  </div>
  <p>Some main content</p>
</main>
`
      )
    ),
    mdx(
      'p',
      null,
      'By default, HTML elements will be stacked according to their DOM order. Without any CSS interference, ',
      mdx('inlineCode', { parentName: 'p' }, 'main'),
      ' will render on top of ',
      mdx('inlineCode', { parentName: 'p' }, 'header'),
      '.'
    ),
    mdx(
      'p',
      null,
      'We can lift ',
      mdx('inlineCode', { parentName: 'p' }, 'header'),
      ' to the front by giving it a z-index, but not without flattening all of its children. This mechanism is what led to the bug we discussed earlier.'
    ),
    mdx(
      'p',
      null,
      "We shouldn't think of ",
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      " purely as a way to change an element's order. We should ",
      mdx('em', { parentName: 'p' }, 'also'),
      " think of it as a way to form a group around that element's children. z-index won't work unless a group is formed."
    ),
    mdx(
      Sidenote,
      { title: 'Believe it or not, this is a good thing', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "As we've seen in our tooltip demo, stacking contexts can cause subtle, hard-to-diagnose bugs. Wouldn't it be better if z-index values were compared globally instead?"
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          "I don't think so, and I can think of a few reasons why:"
        ),
        mdx(
          'ul',
          null,
          mdx(
            'li',
            { parentName: 'ul' },
            'As it stands, z-index inflation (the ever-creeping-upwards trend of huge z-index values) is an epidemic. Imagine how much worse it would be if ',
            mdx(
              'em',
              { type: 'original' },
              'every single element with a z-index'
            ),
            ' had to fit in the same scale?'
          ),
          mdx(
            'li',
            { parentName: 'ul' },
            "I'm not a browser engineer, but I'd guess that stacking contexts are good for performance. Without them, the browser would have to compare every item with a z-index against every other item with a z-index. Sounds like a lot more work."
          ),
          mdx(
            'li',
            { parentName: 'ul' },
            'Once we understand stacking contexts, we can use them to our advantage to "seal off" elements. This is an especially powerful pattern with component-driven frameworks like React.'
          )
        ),
        mdx(
          'p',
          null,
          "That last point is especially interesting. Let's dig deeper into it."
        )
      )
    ),
    mdx('h1', null, 'Airtight abstractions with \u201Cisolation\u201D'),
    mdx(
      'p',
      null,
      "One of my favourite CSS properties is also one of the most obscure. I'd like to introduce you to the ",
      mdx('inlineCode', { parentName: 'p' }, 'isolation'),
      ' property, a hidden gem in the language.'
    ),
    mdx('p', null, "Here's how you'd use it:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e(
          { parentName: 'pre' },
          {
            className: 'language-css',
            metastring: 'lessBottomMargin',
            lessBottomMargin: !0,
          }
        ),
        `.wrapper {
  isolation: isolate;
}
`
      )
    ),
    mdx(
      'p',
      null,
      'When we apply this declaration to an element, it does precisely 1 thing: it creates a new stacking context.'
    ),
    mdx(
      'p',
      null,
      'With so many different ways to create a stacking context, why do we need another one? Well, with every other method, stacking contexts are created implicitly, as the result of some other change. ',
      mdx('inlineCode', { parentName: 'p' }, 'isolation'),
      ' creates a stacking context in the purest way possible:'
    ),
    mdx(
      'ul',
      null,
      mdx('li', { parentName: 'ul' }, 'No need to prescribe a z-index value'),
      mdx(
        'li',
        { parentName: 'ul' },
        'Can be used on statically-positioned',
        mdx(Asterisk, {
          content:
            "A \u201Cstatic\u201D element is one that doesn't set 'position' to relative, absolute, fixed, or sticky.",
          mdxType: 'Asterisk',
        }),
        ' elements'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        "Doesn't affect the child's rendering in any way"
      )
    ),
    mdx(
      'p',
      null,
      'This is ',
      mdx('strong', { parentName: 'p' }, 'incredibly useful'),
      `, since it lets us "seal off" an element's children.`
    ),
    mdx(
      'p',
      null,
      "Let's look at an example. Recently, I built this neat envelope component. ",
      mdx('strong', { parentName: 'p' }, 'Hover or focus'),
      ' to see it open:'
    ),
    mdx(Spacer, { size: 32, mdxType: 'Spacer' }),
    mdx(
      EnvelopeDemo,
      { mdxType: 'EnvelopeDemo' },
      mdx('p', null, 'Hello World!')
    ),
    mdx(Spacer, { size: 32, mdxType: 'Spacer' }),
    mdx('p', null, 'It consists of several layers:'),
    mdx(EnvelopeLayers, { mdxType: 'EnvelopeLayers' }),
    mdx(Spacer, { size: 96, mdxType: 'Spacer' }),
    mdx(
      'p',
      null,
      'I packaged this effect up in a React component, ',
      mdx('inlineCode', { parentName: 'p' }, '<Envelope>'),
      '. It looks something like this (inline styles used for brevity):'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e(
          { parentName: 'pre' },
          {
            className: 'language-jsx',
            metastring: 'lessBottomMargin',
            lessBottomMargin: !0,
          }
        ),
        `function Envelope({ children }) {
  return (
    <div>
      <BackPane style={{ zIndex: 1 }} />
      <Letter style={{ zIndex: 3 }}>
        {children}
      </Letter>
      <Shell style={{ zIndex: 4 }} />
      <Flap style={{ zIndex: isOpen ? 2 : 5 }} />
    </div>
  )
}
`
      )
    ),
    mdx(
      'p',
      null,
      "(If you're wondering why ",
      mdx('inlineCode', { parentName: 'p' }, 'Flap'),
      " has a dynamic z-index, it's because it needs to shift behind the letter when the envelope is open.)"
    ),
    mdx(
      'p',
      null,
      'A good React component is sealed off from its environment, like a spacesuit. ',
      mdx('em', { type: 'original' }, 'This'),
      ' spacesuit, however, has sprung a leak. Check out what happens when I use it near a ',
      mdx('inlineCode', { parentName: 'p' }, '<header>'),
      ' with ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index: 3'),
      ':'
    ),
    mdx(VideoGif, {
      src: '/images/stacking-contexts/glitch-city.mp4',
      alt: 'An envelope opens, and intersects a header above, with the envelope flap behind, but the letter in front',
      maxWidth: 400,
      noBorder: !0,
      includeShadow: !0,
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      'Our ',
      mdx('inlineCode', { parentName: 'p' }, '<Envelope>'),
      " component wraps the 4 layers in a div, but it doesn't create a stacking context. As a result, those layers can become \u201Cintertwined\u201D with other components, like the world's most boring game of Twister",
      mdx(Asterisk, {
        content:
          'A party game involving coloured circles and tangled humans, from the pre-COVID era.',
        mdxType: 'Asterisk',
      }),
      '.'
    ),
    mdx(
      'p',
      null,
      'By using ',
      mdx('inlineCode', { parentName: 'p' }, 'isolation: isolate'),
      ' on the top-level element within ',
      mdx('inlineCode', { parentName: 'p' }, '<Envelope>'),
      ', ',
      mdx(
        'strong',
        { parentName: 'p' },
        "we guarantee that it'll be positioned as a group"
      ),
      ':'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e(
          { parentName: 'pre' },
          {
            className: 'language-jsx',
            metastring: 'highlight=[[2,2]]',
            highlight: '[[2,2]]',
          }
        ),
        `function Envelope({ children }) {
  return (
    <div style={{ isolation: 'isolate' }}>
      <BackPane style={{ zIndex: 1 }} />
      <Letter style={{ zIndex: 3 }}>
        {children}
      </Letter>
      <Shell style={{ zIndex: 4 }} />
      <Flap style={{ zIndex: isOpen ? 2 : 5 }} />
    </div>
  )
}
`
      )
    ),
    mdx(
      'p',
      null,
      'Why not create a stacking context the old-fashioned way, with ',
      mdx('inlineCode', { parentName: 'p' }, 'position: relative; z-index: 1'),
      '? Well, React components are meant to be reusable; is ',
      mdx('inlineCode', { parentName: 'p' }, '1'),
      ' really the right z-index value for this component in ',
      mdx('em', { type: 'original' }, 'all'),
      ' circumstances? The beauty of ',
      mdx('inlineCode', { parentName: 'p' }, 'isolation'),
      ' is that it keeps our components unopinionated and flexible.'
    ),
    mdx(
      'p',
      null,
      'More and more, ',
      mdx(
        'strong',
        { parentName: 'p' },
        "I'm starting to believe that z-index is an escape hatch"
      ),
      ', similar to ',
      mdx('inlineCode', { parentName: 'p' }, '!important'),
      '. This is one trick that allows us to control stacking order without pulling the big red z-index lever.'
    ),
    mdx(
      'p',
      null,
      "I'm working on a follow-up tutorial where we look at some other tricks to keep z-index inflation down. Watch this space!"
    ),
    mdx(
      Sidenote,
      { title: 'Browser support', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'The ',
        mdx('inlineCode', { parentName: 'p' }, 'isolation'),
        ' property is not new, and it has ',
        mdx(
          'a',
          e(
            { parentName: 'p' },
            { href: 'https://caniuse.com/?search=isolation' }
          ),
          'very good browser support'
        ),
        ': it works in every browser except Internet Explorer.'
      ),
      mdx(
        'p',
        null,
        'If I needed to support Internet Explorer, I would consider using ',
        mdx('inlineCode', { parentName: 'p' }, 'transform: translate(0px);'),
        " instead. I haven't tested it, but I believe it would achieve the same result: creating a stacking context without any meaningful side-effect."
      )
    ),
    mdx('h1', null, 'Debugging stacking context issues'),
    mdx(
      'p',
      null,
      "Unfortunately, I haven't found much tooling to help debug stacking-context issues."
    ),
    mdx(
      'p',
      null,
      'Microsoft Edge has an interesting \u201C',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          {
            href: 'https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/3d-view/',
          }
        ),
        '3D view'
      ),
      '\u201D that allows us to view stacking contexts:'
    ),
    mdx(VideoGif, {
      src: '/images/stacking-contexts/3d-view.mp4',
      alt: 'A bunch of boxes floating in space, while the camera pans around. Each box has a different background color and a label like \u201Cz-index: auto\u201D.',
      maxWidth: 760 / 2,
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "This is an ambitious idea, but honestly I find it pretty overwhelming. It's hard to locate a specific element in this view, and I don't really feel like it helps me understand the stacking contexts in my app."
    ),
    mdx(
      'p',
      null,
      "There's one other neat trick you can use sometimes: ",
      mdx('inlineCode', { parentName: 'p' }, 'offsetParent'),
      '.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-js' }),
        `const element = document.querySelector('.tooltip');

console.log(element.offsetParent); // <main>
`
      )
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, 'offsetParent'),
      ' returns the closest ancestor rendered with a ',
      mdx('inlineCode', { parentName: 'p' }, 'position'),
      ' value other than ',
      mdx('inlineCode', { parentName: 'p' }, 'static'),
      '. It crawls up the tree looking for relative / absolute / fixed / sticky ancestors.'
    ),
    mdx(
      'p',
      null,
      "This is not a perfect solution. Not all stacking contexts use positioned layout, and not all positioned elements create a stacking context! That said, in practice, there does tend to be a pretty strong correlation between these two things. At the very least, it's a starting point."
    ),
    mdx(
      'p',
      null,
      'If you know of any tooling that can help here (or if you create one!), ',
      mdx(
        'a',
        { href: 'https://twitter.com/JoshWComeau' },
        'let me know on Twitter'
      )
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Update:'),
      ' Felix Becker reached out to share a ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          {
            href: 'https://marketplace.visualstudio.com/items?itemName=felixfbecker.css-stacking-contexts',
          }
        ),
        'VSCode extension that highlights when stacking contexts are created'
      ),
      ':'
    ),
    mdx('img', {
      src: '/images/vscode-stacking-contexts.gif',
      alt: 'A CSS code snippet showing that z-index has no effect, and how to fix it',
    }),
    mdx(
      'p',
      null,
      'This extension works on .css and .scss files (no CSS-in-JS support).'
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Update 2:'),
      ' Giuseppe Gurgone reached out to let me know about this ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          {
            href: 'https://chrome.google.com/webstore/detail/z-context/jigamimbjojkdgnlldajknogfgncplbh',
          }
        ),
        'Chrome extension'
      ),
      ' which adds a new \u201Cz-index\u201D pane to the devtools.'
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Update 3:'),
      ' Andrea Dragotta created an ',
      mdx('em', { parentName: 'p' }, 'incredible'),
      ' browser extension that adds a bunch of super-important information about z-index and stacking contexts:'
    ),
    mdx('img', {
      src: '/images/chrome-stacking-context.png',
      alt: "Screenshot of the Chrome devtools with a new pane that shows info about the element's current stacking context",
      style: { maxWidth: 600 },
    }),
    mdx(
      'p',
      null,
      'This is an ',
      mdx('strong', { parentName: 'p' }, 'awesome'),
      " tool, and I've been using it regularly. Install CSS Stacking Context Inspector:"
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        mdx(
          'a',
          e(
            { parentName: 'li' },
            {
              href: 'https://chrome.google.com/webstore/detail/css-stacking-context-insp/apjeljpachdcjkgnamgppgfkmddadcki',
            }
          ),
          'For Chrome'
        )
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx(
          'a',
          e(
            { parentName: 'li' },
            {
              href: 'https://addons.mozilla.org/en-US/firefox/addon/css-stacking-context-inspector/',
            }
          ),
          'For Firefox'
        )
      )
    ),
    mdx(
      Sidenote,
      { title: 'Stacking contexts vs. layers', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'In the Chrome devtools, there is a \u201CLayers\u201D pane that shows individual element layers. Are layers the same thing as stacking contexts?'
      ),
      mdx(
        'p',
        null,
        "Unfortunately not. They're similar if you squint, but they're fundamentally different concepts."
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          "Stacking contexts are a \u201Cthing\u201D in the CSS specification. They're a fundamental part of how the language works, and browsers are meant to implement them according to the specification."
        ),
        mdx(
          'p',
          null,
          "Layers, on the other hand, aren't mentioned in the spec. Rather, they're an implementation detail that some browsers (like Chrome) use to optimize performance."
        ),
        mdx(
          'p',
          null,
          "For example: by promoting an element that will be animated to its own layer, the browser can defer that work to the GPU, leading to smoother transitions. If you're keen to learn more about this, I recently wrote an ",
          mdx(
            'a',
            e({ parentName: 'p' }, { href: '/animation/css-transitions' }),
            'article about CSS transitions'
          ),
          ', and we take a brief look at this concept.'
        ),
        mdx(
          'p',
          null,
          "At first blush, this concept sounds a lot like stacking contexts, but they're separate mechanisms. Whenever a layer is created, it must also define a stacking context, but the inverse is not necessarily true (multiple stacking contexts might be rendered on the same layer)."
        ),
        mdx(
          'p',
          null,
          'You can learn more about how the browser uses layers in ',
          mdx(
            'a',
            e(
              { parentName: 'p' },
              {
                href: 'https://developers.google.com/web/updates/2018/09/inside-browser-part3',
              }
            ),
            'this wonderful series by Mariko Kosako'
          ),
          ' on the Chrome Web blog.'
        )
      )
    ),
    mdx('h1', null, 'Going deeper'),
    mdx(
      'p',
      null,
      'Stacking contexts are a good example of how CSS is built on "hidden mechanisms". You can spend years building interfaces with CSS without knowing that they exist.'
    ),
    mdx(
      'p',
      null,
      'Unless you explicitly take the time to learn about these mechanisms, your mental model will always be missing pieces. And if your mental model is even ',
      mdx('em', { parentName: 'p' }, 'slightly'),
      " misaligned, it's only a matter of time until that discrepancy causes problems."
    ),
    mdx(
      'p',
      null,
      `CSS doesn't have warnings or error messages. When something surprising happens, there's no clear "next step" to figure out what went wrong. These disruptions take us out of flow state and shake our confidence. I think this is why so many front-end developers don't enjoy writing CSS.`
    ),
    mdx(
      'p',
      null,
      'Once you build up an intuition for the language, though, CSS becomes an absolute joy. I ',
      mdx('em', { parentName: 'p' }, 'love'),
      ' writing CSS nowadays.'
    ),
    mdx(
      'p',
      null,
      "I want to help other developers discover this joy. I've created a comprehensive self-paced online course that explains how CSS works at a deeper level, and teaches the practical skills I use every day to build all kinds of user interfaces."
    ),
    mdx(
      'p',
      null,
      "It's called ",
      mdx(
        'a',
        e({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }),
        '\u201CCSS for JavaScript Developers\u201D'
      ),
      ", and it's available now. \u{1F604}"
    )
  );
}
MDXContent.isMDXComponent = !0;
