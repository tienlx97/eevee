var h = Object.defineProperty,
  m = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var l = (e, n, t) => (n in e ? h(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[n] = t)),
  i = (e, n) => {
    for (var t in n || (n = {})) s.call(n, t) && l(e, t, n[t]);
    if (o) for (var t of o(n)) r.call(n, t) && l(e, t, n[t]);
    return e;
  },
  p = (e, n) => m(e, c(n));
var d = (e, n) => {
  var t = {};
  for (var a in e) s.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && o) for (var a of o(e)) n.indexOf(a) < 0 && r.call(e, a) && (t[a] = e[a]);
  return t;
};
const makeShortcode = e =>
    function (t) {
      return (
        console.warn('Component ' + e + ' was not imported, exported, or provided by MDXProvider as global scope'),
        mdx('div', i({}, t))
      );
    },
  Sidenote = makeShortcode('Sidenote'),
  Asterisk = makeShortcode('Asterisk'),
  RenderWhenOnscreen = makeShortcode('RenderWhenOnscreen'),
  Playground = makeShortcode('Playground'),
  RefreshCw = makeShortcode('RefreshCw'),
  Term = makeShortcode('Term'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(t) {
  var a = t,
    { components: e } = a,
    n = d(a, ['components']);
  return mdx(
    MDXLayout,
    p(i(i({}, layoutProps), n), { components: e, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      'CSS keyframe animations are ',
      mdx('em', { parentName: 'p' }, 'awesome'),
      ". They're one of the most powerful, versatile tools in CSS, and we can use them for all sorts of nifty things.",
    ),
    mdx(
      'p',
      null,
      "But they're also often misunderstood. They're a bit quirky, and if you don't understand those quirks, using them can be quite frustrating.",
    ),
    mdx(
      'p',
      null,
      "In this tutorial, we're diving deep into CSS keyframes. We'll figure out how they work, and see how to build some pretty swanky animations with them. \u2728",
    ),
    mdx(
      Sidenote,
      { title: 'Intended audience', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'This tutorial is written for JavaScript developers trying to become more comfortable with CSS. But it should be suitable for all developers comfortable with the basics of HTML/CSS.',
      ),
      mdx(
        'p',
        null,
        "If you're pretty advanced with CSS, you'll probably know most of what we cover, but I do share some pretty cool and obscure stuff near the end of this post. \u{1F604}",
      ),
      mdx(
        'p',
        null,
        'In this tutorial, we build on the knowledge shared in \u201C',
        mdx(
          'a',
          i({ parentName: 'p' }, { href: '/animation/css-transitions/' }),
          'An Interactive Guide to CSS Transitions',
        ),
        '\u201D.',
      ),
    ),
    mdx('h1', null, 'Syntax'),
    mdx(
      'p',
      null,
      "The main idea with a CSS keyframe animation is that it'll interpolate between different chunks of CSS.",
    ),
    mdx(
      'p',
      null,
      "For example, here we define a keyframe animation that will smoothly ramp an element's horizontal position from ",
      mdx('inlineCode', { parentName: 'p' }, '-100%'),
      ' to ',
      mdx('inlineCode', { parentName: 'p' }, '0%'),
      ':',
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        i({ parentName: 'pre' }, { className: 'language-css' }),
        `@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      'Each ',
      mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
      " statement needs a name! In this case, we've chosen to name it ",
      mdx('inlineCode', { parentName: 'p' }, 'slide-in'),
      '. You can think of this like a global variable.',
      mdx(Asterisk, {
        content:
          "If you're using vanilla CSS, you'll need to take care that you don't reuse the same name! Thankfully, modern tooling can auto-generate unique names for us to solve this problem.",
        mdxType: 'Asterisk',
      }),
    ),
    mdx(
      'p',
      null,
      'Keyframe animations are meant to be general and reusable. We can apply them to specific selectors with the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation'),
      ' property:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 575px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'keyframes-intro',
        layoutMode: 'tabbed',
        splitRatio: 0.6,
        cssCode: `
body {
  padding: 32px 0;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  /* Create the animation... */
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  /* ...and then apply it: */
  .box {
    animation: slide-in 1000ms;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      '(To re-run the animation, refresh the \u201CResult\u201D pane by clicking the ',
      '\xA0',
      mdx(RefreshCw, { size: 16, style: { display: 'inline' }, mdxType: 'RefreshCw' }),
      '\xA0',
      ' icon.)',
    ),
    mdx(
      'p',
      null,
      'As with the ',
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ' property, ',
      mdx('inlineCode', { parentName: 'p' }, 'animation'),
      " requires a duration. Here we've said that the animation should last 1 second (1000ms).",
    ),
    mdx(
      'p',
      null,
      'The browser will ',
      mdx('i', null, 'interpolate'),
      ' the declarations within our ',
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' blocks, over the duration specified. This happens immediately, as soon as the property is set.',
    ),
    mdx(
      'p',
      null,
      "We can animate multiple properties in the same animation declaration. Here's a fancier example that changes multiple properties:",
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 620px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'multiple-props',
        layoutMode: 'tabbed',
        splitRatio: 0.6,
        cssCode: `
body {
  padding: 32px;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes drop-in {
    from {
      transform:
        rotate(-30deg) translateY(-100%);
      opacity: 0;
    }
    to {
      transform:
        rotate(0deg) translateY(0%);
      opacity: 1;
    }
  }

  .box {
    animation: drop-in 1000ms;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx('h1', null, 'Timing functions'),
    mdx(
      'p',
      null,
      'In \u201C',
      mdx(
        'a',
        i({ parentName: 'p' }, { href: '/animation/css-transitions/#timing-functions' }),
        'An Interactive Guide to CSS Transitions',
      ),
      '\u201D, we learned all about the different timing functions built into CSS.',
    ),
    mdx(
      'p',
      null,
      'We have access to the same library of timing functions for our keyframe animations. And, like with ',
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ', the default value is ',
      mdx('inlineCode', { parentName: 'p' }, 'ease'),
      '.',
    ),
    mdx(
      'p',
      null,
      'We can override it with the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-timing-function'),
      ' property:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 553px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'multiple-props',
        layoutMode: 'tabbed',
        splitRatio: 0.6,
        cssCode: `
body {
  padding: 32px 0;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .box {
    animation: slide-in 1000ms;
    animation-timing-function: linear;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx('h1', null, 'Looped animations'),
    mdx(
      'p',
      null,
      'By default, keyframe animations will only run once, but we can control this with the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-iteration-count'),
      ' property:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 597px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'three-times',
        layoutMode: 'tabbed',
        splitRatio: 0.6,
        cssCode: `
body {
  padding: 32px 0;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0.25;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .box {
    animation: slide-in 1000ms;
    animation-iteration-count: 3;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      "It's somewhat rare to specify an integer like this, but there is one special value that comes in handy: ",
      mdx('inlineCode', { parentName: 'p' }, 'infinite'),
      '.',
    ),
    mdx('p', null, 'For example, we can use it to create a loading spinner:'),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 597px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'infinite',
        splitRatio: 0.65,
        layoutMode: 'tabbed',
        cssCode: `
.spinner {
  display: block;
  width: 32px;
  height: 32px;
}
  `,
        html: `
<style>
  @keyframes spin {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }

  .spinner {
    animation: spin 1000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>

<img
  class="spinner"
  alt="Loading\u2026"
  src="/images/keyframe-animations/loader.svg"
/>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'Note that for spinners, we generally want to use a ',
      mdx('inlineCode', { parentName: 'p' }, 'linear'),
      ' timing function so that the motion is constant (though this is somewhat subjective\u2014try changing it and see what you think!).',
    ),
    mdx('h1', null, 'Multi-step animations'),
    mdx(
      'p',
      null,
      'In addition to the ',
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' keywords, we can also use percentages. This allows us to add more than 2 steps:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 643px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'multi-step',
        splitRatio: 0.65,
        layoutMode: 'tabbed',
        cssCode: `
.spinner {
  display: block;
  width: 32px;
  height: 32px;
}
  `,
        html: `
<style>
  @keyframes fancy-spin {
    0% {
      transform: rotate(0turn) scale(1);
    }
    25% {
      transform: rotate(1turn) scale(1);
    }
    50% {
      transform: rotate(1turn) scale(1.5);
    }
    75% {
      transform: rotate(0turn) scale(1.5);
    }
    100% {
      transform: rotate(0turn) scale(1);
    }
  }

  .spinner {
    animation: fancy-spin 2000ms;
    animation-iteration-count: infinite;
  }
</style>

<img
  class="spinner"
  alt="Loading\u2026"
  src="/images/keyframe-animations/loader.svg"
/>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'The percentages refer to the progress through the animation. ',
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      ' is really just ',
      mdx(Term, { preset: 'syntacticSugar', mdxType: 'Term' }, 'syntactic sugar'),
      ' for ',
      mdx('inlineCode', { parentName: 'p' }, '0%'),
      '. And ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' is sugar for ',
      mdx('inlineCode', { parentName: 'p' }, '100%'),
      '.',
    ),
    mdx(
      'p',
      null,
      'Importantly, ',
      mdx('em', { parentName: 'p' }, 'the timing function applies to each step'),
      ". We don't get a single ease for the entire animation.",
    ),
    mdx(
      'p',
      null,
      'In this playground, both spinners complete 1 full rotation in 2 seconds. But ',
      mdx('inlineCode', { parentName: 'p' }, 'multi-step-spin'),
      ' breaks it into 4 distinct steps, and each step has the timing function applied:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 643px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'multi-step',
        splitRatio: 0.65,
        layoutMode: 'tabbed',
        cssCode: `
.spinner, .multi-step-spinner {
  display: block;
  width: 32px;
  height: 32px;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: calc(100vh - 16px);
}
  `,
        html: `
<style>
  @keyframes spin {
    0% {
      transform: rotate(0turn);
    }
    100% {
      transform: rotate(1turn)
    }
  }

  @keyframes multi-step-spin {
    0% {
      transform: rotate(0turn);
    }
    25% {
      transform: rotate(0.25turn);
    }
    50% {
      transform: rotate(0.5turn);
    }
    75% {
      transform: rotate(0.75turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }

  .spinner {
    animation: spin 2000ms;
    animation-iteration-count: infinite;
  }
  .multi-step-spinner {
    animation: multi-step-spin 2000ms;
    animation-iteration-count: infinite;
  }
</style>

<img
  class="spinner"
  alt="Loading\u2026"
  src="/images/keyframe-animations/loader.svg"
/>
<img
  class="multi-step-spinner"
  alt="Loading\u2026"
  src="/images/keyframe-animations/loader.svg"
/>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      "Unfortunately, we can't control this behaviour using CSS keyframe animations, though it ",
      mdx('em', { parentName: 'p' }, 'is'),
      " configurable using the Web Animations API. If you find yourself in a situation where the step-by-step easing is problematic, I'd suggest ",
      mdx(
        'a',
        i(
          { parentName: 'p' },
          { href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API' },
        ),
        'checking it out',
      ),
      '!',
    ),
    mdx('h1', null, 'Alternating animations'),
    mdx('p', null, `Let's suppose that we want an element to "breathe", inflating and deflating.`),
    mdx('p', null, 'We could set it up as a 3-step animation:'),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 597px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'three-step',
        splitRatio: 0.65,
        layoutMode: 'tabbed',
        cssCode: `
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
}
  `,
        html: `
<style>
  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .box {
    animation: grow-and-shrink 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
</style>

<div class="box"></div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'It spends the first half of the duration growing to be 1.5x its default size. Once it reaches that peak, it spends the second half shrinking back down to 1x.',
    ),
    mdx(
      'p',
      null,
      "This works, but there's a more-elegant way to accomplish the same effect. We can use the ",
      mdx('inlineCode', { parentName: 'p' }, 'animation-direction'),
      ' property:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 555px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'direction',
        splitRatio: 0.65,
        layoutMode: 'tabbed',
        cssCode: `
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
}
  `,
        html: `
<style>
  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }

  .box {
    animation: grow-and-shrink 2000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>

<div class="box"></div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, 'animation-direction'),
      ' controls the order of the sequence. The default value is ',
      mdx('inlineCode', { parentName: 'p' }, 'normal'),
      ', going from 0% to 100% over the course of the specified duration.',
    ),
    mdx(
      'p',
      null,
      'We can also set it to ',
      mdx('inlineCode', { parentName: 'p' }, 'reverse'),
      '. This will play the animation backwards, going from 100% to 0%.',
    ),
    mdx(
      'p',
      null,
      'The interesting part, though, is that we can set it to ',
      mdx('inlineCode', { parentName: 'p' }, 'alternate'),
      ', which ping-pongs between ',
      mdx('inlineCode', { parentName: 'p' }, 'normal'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'reverse'),
      ' on subsequent iterations.',
    ),
    mdx(
      'p',
      null,
      'Instead of having 1 big animation that grows and shrinks, we set our animation to grow, and then reverse it on the next iteration, causing it to shrink.',
    ),
    mdx(
      Sidenote,
      { title: 'Half the duration', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'Originally, our "breathe" animation lasted 4 seconds. When we switched to the alternate strategy, however, we cut the duration in half, down to 2 seconds.',
      ),
      mdx(
        'p',
        null,
        'This is because ',
        mdx('i', null, 'each iteration only performs half the work'),
        '. It always took 2 seconds to grow, and 2 seconds to shrink. Before, we had a single 4-second-long animation. Now, we have a 2-second-long animation that requires 2 iterations to complete a full cycle.',
      ),
    ),
    mdx('h1', null, 'Shorthand values'),
    mdx('p', null, "We've picked up a lot of animation properties in this lesson, and it's been a lot of typing!"),
    mdx(
      'p',
      null,
      'Fortunately, as with ',
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ', we can use the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation'),
      ' shorthand to combine all of these properties.',
    ),
    mdx('p', null, 'The above animation can be rewritten:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        i({ parentName: 'pre' }, { className: 'language-css' }),
        `.box {
  /*
  From this:
    animation: grow-and-shrink 2000ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;

  ...to this:
  */
  animation: grow-and-shrink 2000ms ease-in-out infinite alternate;
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      "Here's a piece of good news, as well: ",
      mdx('strong', { parentName: 'p' }, "the order doesn't matter."),
      " For the most part, you can toss these properties in any order you want. You don't need to memorize a specific sequence.",
    ),
    mdx(
      'p',
      null,
      'There is an exception: ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-delay'),
      ", a property we'll talk more about shortly, needs to come after the duration, since both properties take the same value type (milliseconds/seconds).",
    ),
    mdx('p', null, 'For this reason, I prefer to exclude delay from the shorthand:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        i({ parentName: 'pre' }, { className: 'language-css' }),
        `.box {
  animation: grow-and-shrink 2000ms ease-in-out infinite alternate;
  animation-delay: 500ms;
}
`,
      ),
    ),
    mdx('h1', null, 'Fill Modes'),
    mdx(
      'p',
      null,
      'Probably the most confusing aspect of keyframe animations is ',
      mdx('em', { parentName: 'p' }, 'fill modes'),
      ". They're the biggest obstacle on our path towards keyframe confidence.",
    ),
    mdx('p', null, "Let's start with a problem."),
    mdx(
      'p',
      null,
      "We want our element to fade out. The animation itself works fine, but when it's over, the element pops back into existence:",
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 531px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'fade-out-bug',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .box {
    animation: fade-out 1000ms;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx('p', null, "If we were to graph the element's opacity over time, it would look something like this:"),
    mdx('img', {
      includeWhiteBackground: !0,
      alt: 'graph showing how the opacity goes from 1 to 0 over the first second, and then jumps to 1, its default value, forever',
      src: '/images/keyframe-animations/fill-mode-bug.svg',
      width: 561,
      height: 284,
    }),
    mdx(
      'p',
      null,
      'Why does the element jump back to full visibility? Well, the declarations in the ',
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' blocks only apply ',
      mdx('i', null, 'while the animation is running'),
      '.',
    ),
    mdx(
      'p',
      null,
      'After 1000ms has elapsed, the animation packs itself up and hits the road. The declarations in the ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      " block dissipate, leaving our element with whatever CSS declarations have been defined elsewhere. Since we haven't set ",
      mdx('inlineCode', { parentName: 'p' }, 'opacity'),
      ' for this element anywhere else, it snaps back to its default value (',
      mdx('inlineCode', { parentName: 'p' }, '1'),
      ').',
    ),
    mdx(
      'p',
      null,
      'One way to solve this is to add an ',
      mdx('inlineCode', { parentName: 'p' }, 'opacity'),
      ' declaration to the ',
      mdx('inlineCode', { parentName: 'p' }, '.box'),
      ' selector:',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 643px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'fade-out-with-opacity',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .box {
    animation: fade-out 1000ms;
    /*
      Change the "default" value for opacity,
      so that it reverts to 0 when the
      animation completes.
    */
    opacity: 0;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'While the animation is running, the declarations in the ',
      mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
      ' statement overrule the opacity declaration in the ',
      mdx('inlineCode', { parentName: 'p' }, '.box'),
      ' selector. Once the animation wraps up, though, that declaration kicks in and keeps the box hidden.',
    ),
    mdx(
      Sidenote,
      { title: 'Specificity?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'In CSS, conflicts are resolved based on the \u201Cspecificity\u201D of a selector. An ID selector (',
        mdx('inlineCode', { parentName: 'p' }, '#login-form'),
        ') will win the battle against a class one (',
        mdx('inlineCode', { parentName: 'p' }, '.thing'),
        ').',
      ),
      mdx('p', null, 'But what about keyframe animations? What is their specificity?'),
      mdx(
        'p',
        null,
        "It turns out that specificity isn't really the right way to think about this; instead, we need to think about ",
        mdx('strong', { parentName: 'p' }, 'cascade origins.'),
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          "A \u201Ccascade origin\u201D is a source of selectors. For example, browsers come with a bunch of built-in styles\u2014that's why anchor tags are blue and underlined by default. These styles are part of the ",
          mdx('em', { parentName: 'p' }, 'User-Agent Origin'),
          '.',
        ),
        mdx(
          'p',
          null,
          mdx('i', null, 'The specificity rules only apply when comparing selectors in the same origin.'),
          ' The styles we write normally are part of the \u201CAuthor Origin\u201D, and Author Origin styles win out over ones written in the User-Agent Origin.',
        ),
        mdx(
          'p',
          null,
          "Here's why this is relevant: keyframe animations are their own special origin, and its styles are applied later.",
        ),
        mdx(
          'p',
          null,
          "Think of it in terms of a fighting video game. In Round One, all of the default browser styles are applied, following standard specificity rules. In Round Two, the selectors we've provided battle it out. In Round Three, ",
          mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
          " declarations are applied. It doesn't matter how specific a selector is if it's applied in Round Two; our ",
          mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
          ' declaration will overwrite it.',
        ),
        mdx(
          'p',
          null,
          mdx(
            'a',
            i({ parentName: 'p' }, { href: 'https://www.w3.org/TR/css-cascade-3/#cascade-sort' }),
            'According to the specification',
          ),
          ', there are actually 8 rounds, not 3. Interestingly, declarations with ',
          mdx('inlineCode', { parentName: 'p' }, '!important'),
          ' are considered part of a different origin! At least, in theory.',
          mdx(Asterisk, {
            content:
              "Unfortunately, most browsers don't implement the specification properly. Only Firefox prioritizes \u201C!important\u201D declarations over ones inside a keyframe animation.",
            mdxType: 'Asterisk',
          }),
        ),
        mdx('p', null, 'This is why our keyframe animations will apply, regardless of specificity.'),
      ),
    ),
    mdx(
      'p',
      null,
      "So, we can update our CSS so that the element's properties match the ",
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' block, but is that really the best way?',
    ),
    mdx('h2', null, 'Filling forwards'),
    mdx(
      'p',
      null,
      "Instead of relying on fallback declarations, let's consider another approach, using ",
      mdx('inlineCode', { parentName: 'p' }, 'animation-fill-mode'),
      ':',
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 553px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        centered: !0,
        id: 'fill-mode',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .box {
    animation: fade-out 1000ms;
    animation-fill-mode: forwards;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, 'animation-fill-mode'),
      ' lets us persist the final value from the animation, ',
      mdx('em', { parentName: 'p' }, 'forwards in time'),
      '.',
    ),
    mdx('img', {
      includeWhiteBackground: !0,
      includeWhiteBackground: !0,
      alt: 'graph showing how the opacity goes from 1 to 0 over the first second, and then stays at 0, forward in time',
      src: '/images/keyframe-animations/fill-mode-forwards.svg',
      width: 561,
      height: 284,
    }),
    mdx(
      'p',
      null,
      '"forwards" is a very confusing name, but hopefully seeing it on this graph makes it a bit clearer!',
    ),
    mdx(
      'p',
      null,
      'When the animation ends, ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-fill-mode: forwards'),
      ' will copy/paste the declarations in the final block, persisting them forwards in time.',
    ),
    mdx('h2', null, 'Filling backwards'),
    mdx(
      'p',
      null,
      "We don't always want our animations to start immediately! As with ",
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ', we can specify a delay, with the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-delay'),
      ' property.',
    ),
    mdx('p', null, 'Unfortunately, we run into a similar issue:'),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 597px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'delay-intro',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
body {
  padding: 32px 0;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0.25;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .box {
    animation: slide-in 1000ms;
    animation-delay: 500ms;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx('p', null, 'For that first half-second, the element is fully visible!'),
    mdx('img', {
      includeWhiteBackground: !0,
      alt: 'graph showing how the opacity starts at 1, before jumping down to 0 when the animation starts',
      src: '/images/keyframe-animations/fill-mode-delay.svg',
      width: 561,
      height: 284,
    }),
    mdx(
      'p',
      null,
      'The CSS in the ',
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'to'),
      ' blocks is only applied while the animation is running. Frustratingly, the ',
      mdx('inlineCode', { parentName: 'p' }, 'animation-delay'),
      " period doesn't count. So for that first half-second, it's as if the CSS in the ",
      mdx('inlineCode', { parentName: 'p' }, 'from'),
      " block doesn't exist.",
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, 'animation-fill-mode'),
      ' has another value that can help us here: ',
      mdx('inlineCode', { parentName: 'p' }, 'backwards'),
      '. This will apply the CSS from the first block ',
      mdx('em', { parentName: 'p' }, 'backwards in time'),
      '.',
    ),
    mdx('img', {
      includeWhiteBackground: !0,
      alt: 'The same graph as above, but fixed so that opacity is 0 until the animation starts',
      src: '/images/keyframe-animations/fill-mode-backwards.svg',
      width: 561,
      height: 284,
    }),
    mdx(
      'p',
      null,
      "\u201CForwards\u201D and \u201Cbackwards\u201D are confusing values, but here's an analogy that might help: imagine if we had recorded the user's session from the moment the page loaded. We could scrub forwards and backwards in the video. We can scrub backwards, before the animation has started, or forwards, after the animation has ended.",
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 619px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'delay-intro',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
body {
  padding: 32px 0;
}
.box {
  width: 100px;
  height: 100px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
}
  `,
        html: `
<style>
  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0.25;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .box {
    animation: slide-in 1000ms;
    animation-delay: 500ms;
    animation-fill-mode: backwards;
  }
</style>

<div class="box">
  Hello World
</div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'What if we want to persist the animation forwards ',
      mdx('em', { parentName: 'p' }, 'and'),
      ' backwards? We can use a third value, ',
      mdx('inlineCode', { parentName: 'p' }, 'both'),
      ', which persists in both directions:',
    ),
    mdx('img', {
      includeWhiteBackground: !0,
      alt: 'The same graph as above, but fixed so that opacity is 0 until the animation starts',
      src: '/images/keyframe-animations/fill-mode-both.svg',
      width: 561,
      height: 284,
    }),
    mdx(
      'p',
      null,
      'Personally, I wish that ',
      mdx('inlineCode', { parentName: 'p' }, 'both'),
      " was the default value. It's so much more intuitive! Though it ",
      mdx('i', null, 'can'),
      ' make it a bit harder to understand where a particular CSS value has been set.',
    ),
    mdx(
      'p',
      null,
      "Like all of the animation properties we're discussing, it can be tossed into the ",
      mdx('inlineCode', { parentName: 'p' }, 'animation'),
      ' shorthand salad:',
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        i({ parentName: 'pre' }, { className: 'language-css' }),
        `.box {
  animation: slide-in 1000ms ease-out both;
  animation-delay: 500ms;
}
`,
      ),
    ),
    mdx('h1', null, 'Dynamic animations with CSS variables'),
    mdx(
      'p',
      null,
      'Keyframe animations are cool enough on their own, but when we mix them with CSS variables (AKA CSS custom properties), things get  \u26A1\uFE0F next-level \u26A1\uFE0F.',
    ),
    mdx(
      'p',
      null,
      "Let's suppose that we want to create a bouncing-ball animation, using everything we've learned in this lesson:",
    ),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 619px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'vars-intro',
        layoutMode: 'tabbed',
        splitRatio: 0.65,
        cssCode: `
html {
  height: 100%;
}
body {
  padding: 32px 0;
  height: 100%;
  /* Center box */
  display: grid;
  place-content: center;
}
.box {
  width: 75px;
  height: 75px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
  border-radius: 50%;
}
  `,
        html: `
<style>
  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-20px);
    }
  }

  .box {
    animation:
      bounce 300ms
      alternate infinite
      cubic-bezier(.2, .65, .6, 1);
  }
</style>

<div class="box"></div>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      Sidenote,
      { title: 'Cubic bezier?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "To make the bounce animation a bit more realistic, I'm using a custom timing function, using ",
        mdx('inlineCode', { parentName: 'p' }, 'cubic-bezier'),
        '.',
      ),
      mdx(
        'p',
        null,
        "I'll be publishing a blog post all about the magic of B\xE9zier curves soon \u2014 ",
        mdx('a', i({ parentName: 'p' }, { href: '/subscribe' }), 'subscribe to my newsletter'),
        " if you'd like to be notified when it's published! \u{1F604}",
      ),
    ),
    mdx(
      'p',
      null,
      `CSS animations are meant to be generic and reusable, but this animation will always cause an element to bounce by 20px. Wouldn't it be neat if different elements could supply different "bounce heights"?`,
    ),
    mdx('p', null, 'With CSS variables, we can do exactly that:'),
    mdx(
      RenderWhenOnscreen,
      { keepOnceShown: !0, height: 'min(50vh, 619px)', mdxType: 'RenderWhenOnscreen' },
      mdx(Playground, {
        id: 'different-bounce-values',
        layoutMode: 'tabbed',
        cssCode: `
html {
  height: 100%;
}
body {
  padding: 32px 0;
  height: 100%;
  /* Center box */
  display: grid;
  place-content: center;
}
section {
  display: flex;
  gap: 16px;
}
.box {
  width: 75px;
  height: 75px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
  border-radius: 50%;
}
  `,
        html: `
<style>
  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(
        var(--bounce-offset)
      );
    }
  }

  .box {
    animation:
      bounce alternate infinite
      cubic-bezier(.2, .65, .6, 1);
  }
  .box.one {
    --bounce-offset: -20px;
    animation-duration: 200ms;
  }
  .box.two {
    --bounce-offset: -30px;
    animation-duration: 300ms;
  }
  .box.three {
    --bounce-offset: -40px;
    animation-duration: 400ms;
  }
</style>

<section>
  <div class="box one"></div>
  <div class="box two"></div>
  <div class="box three"></div>
</section>
  `,
        mdxType: 'Playground',
      }),
    ),
    mdx(
      'p',
      null,
      'Our ',
      mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
      ' animation has been updated so that instead of bouncing to ',
      mdx('inlineCode', { parentName: 'p' }, '-20px'),
      ', it accesses the value of the ',
      mdx('inlineCode', { parentName: 'p' }, '--bounce-offset'),
      ' property. And since that property has a different value in each box, they each bounce to different amounts.',
    ),
    mdx(
      'p',
      null,
      'This strategy allows us to create reusable, customizable keyframe animations. Think of it like props to a React component!',
    ),
    mdx(
      Sidenote,
      { type: 'success', title: 'Derived values with calc', mdxType: 'Sidenote' },
      mdx('p', null, 'So, something bothers me about the example above.'),
      mdx(
        'p',
        null,
        'With the ',
        mdx('inlineCode', { parentName: 'p' }, 'translateY'),
        ' function, positive values move the element down, negative values move the element up. We want to move the element up, so we have to use a negative value.',
      ),
      mdx(
        'p',
        null,
        'But this is an ',
        mdx('em', { parentName: 'p' }, 'implementation detail'),
        ". When I want to apply this animation, it's weird that I need to use a negative value.",
      ),
      mdx(
        'p',
        null,
        "CSS variables work best when they're semantic. Instead of setting ",
        mdx('inlineCode', { parentName: 'p' }, '--bounce-offset'),
        " to a negative value, I'd much rather do this:",
      ),
      mdx(
        'pre',
        null,
        mdx(
          'code',
          i({ parentName: 'pre' }, { className: 'language-css' }),
          `.box.one {
  --bounce-height: 20px;
}
`,
        ),
      ),
      mdx(
        'p',
        null,
        'Using ',
        mdx('inlineCode', { parentName: 'p' }, 'calc'),
        ', we can ',
        mdx('i', null, 'derive the true value'),
        ' from the provided value, within our ',
        mdx('inlineCode', { parentName: 'p' }, '@keyframes'),
        ' at-rule:',
      ),
      mdx(
        'pre',
        null,
        mdx(
          'code',
          i(
            { parentName: 'pre' },
            {
              className: 'language-css',
              metastring: 'highlight=[[6,6]] lessBottomMargin',
              highlight: '[[6,6]]',
              lessBottomMargin: !0,
            },
          ),
          `@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(
      calc(var(--bounce-height) * -1)
    );
  }
}
`,
        ),
      ),
      mdx(
        'p',
        null,
        `We only define this keyframe animation once, but we'll likely use it many times. It's worth optimizing for the "consumer" side of things, to make it as pleasant to use as possible, even if it complicates the definition a bit.`,
      ),
      mdx(
        'p',
        null,
        mdx('inlineCode', { parentName: 'p' }, 'calc'),
        ' lets us craft the perfect APIs for our keyframe animations. \u{1F4AF}',
      ),
    ),
    mdx('h1', null, 'Just the beginning'),
    mdx(
      'p',
      null,
      'As I was building the last couple demos, I realized just how much CSS has evolved in the past few years!',
    ),
    mdx(
      'p',
      null,
      "It's become an ",
      mdx('em', { parentName: 'p' }, 'incredible language'),
      ', expressive and flexible and powerful. I love writing CSS.',
    ),
    mdx(
      'p',
      null,
      'And yet, so many front-end developers have a ',
      mdx('i', null, 'very'),
      " different relationship with the language. I've spoken to hundreds of JavaScript developers who find CSS frustrating and confusing. Sometimes, the exact same CSS will behave totally differently! It feels so inconsistent.",
    ),
    mdx(
      'p',
      null,
      'I have a theory about this: unlike with JS, so much of CSS is ',
      mdx('em', { parentName: 'p' }, 'implicit'),
      " and behind-the-scenes. It's not enough to know the ",
      mdx('i', null, 'properties'),
      '; you need to know the ',
      mdx('i', null, 'principles'),
      ' driving them.',
    ),
    mdx(
      'p',
      null,
      "I've spent the last year working full-time on a course that will help teach CSS at a deeper, more fundamental level. If you found this blog post helpful, you'll ",
      mdx('i', null, 'love'),
      ' the course.',
    ),
    mdx(
      'p',
      null,
      "It's called ",
      mdx('a', i({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }), 'CSS for JavaScript Developers'),
      ", and it's just been released to the public. You can learn more at ",
      mdx('a', i({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }), 'css-for-js.dev'),
      '.',
    ),
  );
}
MDXContent.isMDXComponent = !0;
