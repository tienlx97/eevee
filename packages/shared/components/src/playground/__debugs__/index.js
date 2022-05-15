var h = Object.defineProperty,
  u = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var l = (e, o, n) =>
    o in e
      ? h(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[o] = n),
  t = (e, o) => {
    for (var n in o || (o = {})) s.call(o, n) && l(e, n, o[n]);
    if (i) for (var n of i(o)) r.call(o, n) && l(e, n, o[n]);
    return e;
  },
  p = (e, o) => u(e, c(o));
var d = (e, o) => {
  var n = {};
  for (var a in e) s.call(e, a) && o.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && i)
    for (var a of i(e)) o.indexOf(a) < 0 && r.call(e, a) && (n[a] = e[a]);
  return n;
};
const makeShortcode = (e) =>
    function (n) {
      return (
        console.warn(
          'Component ' +
            e +
            ' was not imported, exported, or provided by MDXProvider as global scope'
        ),
        mdx('div', t({}, n))
      );
    },
  Spacer = makeShortcode('Spacer'),
  IntroDemo = makeShortcode('IntroDemo'),
  Sidenote = makeShortcode('Sidenote'),
  ButtonLayers = makeShortcode('ButtonLayers'),
  Playground = makeShortcode('Playground'),
  VideoGif = makeShortcode('VideoGif'),
  Asterisk = makeShortcode('Asterisk'),
  Sparkles = makeShortcode('Sparkles'),
  BoxAnimation = makeShortcode('BoxAnimation'),
  ButtonLayersWithShadow = makeShortcode('ButtonLayersWithShadow'),
  SoftShadow = makeShortcode('SoftShadow'),
  ButtonGradient = makeShortcode('ButtonGradient'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(n) {
  var a = n,
    { components: e } = a,
    o = d(a, ['components']);
  return mdx(
    MDXLayout,
    p(t(t({}, layoutProps), o), { components: e, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      'I had a neat realization recently: Buttons are the \u201Ckiller feature\u201D of the web.'
    ),
    mdx(
      'p',
      null,
      'Every significant thing we do online, from ordering food to scheduling an appointment to playing a video, involves pressing a button. Buttons (and the forms they submit) make the web dynamic and interactive and powerful.'
    ),
    mdx(
      'p',
      null,
      "But so many of those buttons are lackluster. They can trigger enormous changes in the real world, but they don't feel tangible at all. The feel like dull everyday pixels."
    ),
    mdx('p', null, "In this tutorial, we'll build a whimsical 3D button:"),
    mdx(Spacer, { size: 32, mdxType: 'Spacer' }),
    mdx(IntroDemo, { mdxType: 'IntroDemo' }),
    mdx(
      Sidenote,
      { title: 'Intended audience', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "This is an intermediate-level tutorial for front-end developers. It's focused on HTML/CSS, no JavaScript knowledge required."
      ),
      mdx(
        'p',
        null,
        "If you're relatively new to CSS transitions, I'd recommend reading ",
        mdx(
          'a',
          t({ parentName: 'p' }, { href: '/animation/css-transitions/' }),
          '\u201CAn Interactive Guide to CSS Transitions\u201D'
        ),
        ' first.'
      )
    ),
    mdx('h1', null, 'Our strategy'),
    mdx(
      'p',
      null,
      "There's one main trick we'll use a couple times in this tutorial to create the ",
      mdx('em', { parentName: 'p' }, 'illusion'),
      ' of a 3D button.'
    ),
    mdx(
      'p',
      null,
      "Here's how it works: when the user interacts with our button, we'll slide a foreground layer up and down, in front of a stationary background:"
    ),
    mdx(ButtonLayers, { mdxType: 'ButtonLayers' }),
    mdx(
      'p',
      null,
      '(Try sliding the "Reveal" slider, and then interacting with the button!)'
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        'Why not use ',
        mdx('inlineCode', { parentName: 'strong' }, 'box-shadow'),
        ' or ',
        mdx('inlineCode', { parentName: 'strong' }, 'border'),
        '?'
      ),
      ' Those properties are ',
      mdx('i', null, 'super'),
      " expensive to animate. If we want a buttery-smooth transition on the button, we'll have way more success with this strategy."
    ),
    mdx('p', null, "Here's our MVP button in code:"),
    mdx(Playground, {
      id: 'button-mvp',
      centered: !0,
      splitRatio: 0.62,
      html: `
<style>
  .pushable {
    background: hsl(340deg 100% 32%);
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
  }
  .front {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
  }

  .pushable:active .front {
    transform: translateY(-2px);
  }
</style>

<button class="pushable">
  <span class="front">
    Push me
  </span>
</button>
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'Our ',
      mdx('inlineCode', { parentName: 'p' }, 'button'),
      ' element provides the burgundy background color that simulates the bottom edge of our button. We also strip away the default border/padding that comes with ',
      mdx('inlineCode', { parentName: 'p' }, 'button'),
      ' elements.'
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, '.front'),
      ' is our foreground layer. it gets a bright pink-crimson background color, as well as some text styles.'
    ),
    mdx(
      'p',
      null,
      "We'll slide the foreground layer around with ",
      mdx('inlineCode', { parentName: 'p' }, 'transform: translate'),
      '. This is the best way to accomplish this effect, since transforms can be hardware-accelerated.'
    ),
    mdx(
      'p',
      null,
      'While the mouse is held down on the button, the ',
      mdx('inlineCode', { parentName: 'p' }, ':active'),
      " styles will apply. We'll shift the front layer down so that it sits 2px above the bottom. We could drop it to 0px, but I want to keep the 3D illusion going at all times."
    ),
    mdx('h1', null, 'The details'),
    mdx(
      'p',
      null,
      "We've created a solid foundation, and now it's time to build some cool stuff on top of it!"
    ),
    mdx('h2', null, 'Focus outlines'),
    mdx(
      'p',
      null,
      "Most browsers will add an outline to a button when it's clicked, to indicate that the element has captured focus."
    ),
    mdx(
      'p',
      null,
      "Here's what this looks like by default, on Chrome / MacOS:"
    ),
    mdx(VideoGif, {
      fillEdges: !0,
      noBorder: !0,
      src: '/images/3d-button/3d-button-outline.mp4',
      maxWidth: 530 / 2,
      alt: 'A 3D button is clicked, causing a blue outline to wrap around it, somewhat spoiling the effect',
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      'In the MVP above, I took the liberty of adding an ',
      mdx('inlineCode', { parentName: 'p' }, 'outline-offset'),
      ' declaration. This property gives our button a bit of a buffer:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.pushable {
  outline-offset: 4px;
}
`
      )
    ),
    mdx(VideoGif, {
      fillEdges: !0,
      noBorder: !0,
      src: '/images/3d-button/3d-button-outline-offset.mp4',
      maxWidth: 530 / 2,
      alt: "A 3D button is clicked, causing a blue outline to appear, but this time it's further out, adding a buffer around the button",
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "This is a dramatic improvement, but it's still a bit of an eyesore. Plus, it doesn't work consistently: on Firefox, ",
      mdx('inlineCode', { parentName: 'p' }, 'outline-offset'),
      ` doesn't work for the default "focus" outlines.`
    ),
    mdx(
      'p',
      null,
      "We can't simply remove it, though\u2014that outline is ",
      mdx('em', { parentName: 'p' }, 'super'),
      ' important for folks who navigate using their keyboard. They rely on it to let them know which element is focused.'
    ),
    mdx(
      'p',
      null,
      'Fortunately, we can use a swanky CSS pseudo-class to help us out: ',
      mdx('inlineCode', { parentName: 'p' }, ':focus-visible')
    ),
    mdx(Playground, {
      id: 'button-focus',
      centered: !0,
      splitRatio: 0.65,
      layoutMode: 'tabbed',
      cssCode: `
.pushable {
  background: hsl(340deg 100% 32%);
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-6px);
}

.pushable:active .front {
  transform: translateY(-2px);
}
  `,
      html: `
<style>
  /* The CSS we saw earlier is still
   * being applied. It's tucked into
   * the "CSS" tab above.
   */

  .pushable:focus:not(:focus-visible) {
    outline: none;
  }
</style>

<button class="pushable">
  <span class="front">
    Push me
  </span>
</button>
  `,
      mdxType: 'Playground',
    }),
    mdx('p', null, "That's one heck of a selector, so let's break it down."),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, ':focus'),
      ' pseudo-class will apply its declarations when an element is focused. This works regardless of whether the element is focused by tabbing to it on the keyboard, or by clicking it with a mouse.'
    ),
    mdx(
      'p',
      null,
      mdx('inlineCode', { parentName: 'p' }, ':focus-visible'),
      ' is similar, but it only applies when the element is focused ',
      mdx('em', { parentName: 'p' }, 'and'),
      " the user would benefit from seeing a visual focus indicator (because they're using a keyboard to navigate, for example)."
    ),
    mdx(
      'p',
      null,
      'Finally, ',
      mdx('inlineCode', { parentName: 'p' }, ':not'),
      ' allows us to mix in some logic. The styles will apply when the element matches the ',
      mdx('inlineCode', { parentName: 'p' }, ':focus'),
      ' selector, but ',
      mdx('i', null, 'not'),
      ' the ',
      mdx('inlineCode', { parentName: 'p' }, ':focus-visible'),
      " selector. In practical terms, this means that we'll hide the outline when the button is focused and the user is using a pointer device (eg. a mouse, a trackpad, a finger on a touchscreen)."
    ),
    mdx(
      Sidenote,
      { title: 'Browser support and accessibility', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "I'll be honest about it: the rule above is pretty confusing!"
      ),
      mdx(
        'p',
        null,
        'Is there a clearer way we could accomplish the same effect? What if we wrote it like this instead?'
      ),
      mdx(
        'pre',
        null,
        mdx(
          'code',
          t(
            { parentName: 'pre' },
            {
              className: 'language-css',
              metastring: 'lessBottomMargin',
              lessBottomMargin: !0,
            }
          ),
          `button {
  outline: none;
}

button:focus-visible {
  outline: revert;
}
`
        )
      ),
      mdx(
        'p',
        null,
        mdx('inlineCode', { parentName: 'p' }, 'revert'),
        " is a special keyword that will revert back to whatever the value ought to be, based on the browser's defaults",
        mdx(Asterisk, {
          content: mdx(
            React.Fragment,
            null,
            "I'm oversimplifying a little bit here\u2014for properties that can be inherited from the parent, like ",
            mdx(
              'span',
              {
                style: {
                  fontSize: '0.85em',
                  fontFamily: 'var(--font-family-mono)',
                },
              },
              'font-size'
            ),
            ' or ',
            mdx(
              'span',
              {
                style: {
                  fontSize: '0.85em',
                  fontFamily: 'var(--font-family-mono)',
                },
              },
              'color'
            ),
            ', it will revert to ',
            mdx('i', null, 'that'),
            ' value instead. But ',
            mdx(
              'span',
              {
                style: {
                  fontSize: '0.85em',
                  fontFamily: 'var(--font-family-mono)',
                },
              },
              'outline'
            ),
            " isn't inheritable, so we can ignore that here."
          ),
          mdxType: 'Asterisk',
        }),
        '. In Chrome on MacOS, this equates to a solid blue line.'
      ),
      mdx(
        'p',
        null,
        "It's simpler, right? We're saying \u201CHide the outline, except when visibly focused\u201D."
      ),
      mdx(
        'p',
        null,
        'Unfortunately, however, this alternative method has a problem: ',
        mdx('strong', { parentName: 'p' }, "it doesn't work in older browsers"),
        '.'
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          mdx('inlineCode', { parentName: 'p' }, ':focus-visible'),
          ' is a relatively new pseudo-class; at the time of writing, ',
          mdx(
            'a',
            t(
              { parentName: 'p' },
              { href: 'https://caniuse.com/?search=focus-visible' }
            ),
            'about 30% of folks worldwide'
          ),
          " use browsers that don't support it."
        ),
        mdx(
          'p',
          null,
          "Let's take a moment to consider what happens if ",
          mdx('inlineCode', { parentName: 'p' }, ':focus-visible'),
          " isn't supported, with this new snippet."
        ),
        mdx(
          'p',
          null,
          'The ',
          mdx('inlineCode', { parentName: 'p' }, 'button:focus-visible'),
          ' selector will be declared invalid, and that entire rule will be ignored:'
        ),
        mdx('img', {
          src: '/images/3d-button/bad-invalid.png',
          alt: 'A screenshot of the code snippet above, showing a red X through the second rule',
          style: { maxWidth: 666 / 2 },
        }),
        mdx(
          'p',
          null,
          'This is a problem, because it means that we will ',
          mdx('strong', { parentName: 'p' }, 'always'),
          ' be hiding the outline for these folks, ',
          mdx('i', null, 'even the one who really need it to navigate!')
        ),
        mdx(
          'p',
          null,
          'What about with the longer, more-complicated alternative?'
        ),
        mdx('img', {
          src: '/images/3d-button/good-invalid.png',
          alt: 'A screenshot of the code snippet above, showing a red X through the second rule',
          style: { maxWidth: 922 / 2 },
        }),
        mdx(
          'p',
          null,
          'In this version, our outline-hiding mechanism is removed instead. There will always be a focus outline when the button is focused.'
        ),
        mdx(
          'p',
          null,
          'This is better. We should always prioritize usability over aesthetics or developer ergonomics.'
        )
      )
    ),
    mdx(
      Sidenote,
      { type: 'warning', title: 'Clicking and focus', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'In most browsers, clicking a button will focus it. Depending on your browser and operating system, however, this might not be true for you!'
      ),
      mdx(
        'p',
        null,
        'MDN has a ',
        mdx(
          'a',
          t(
            { parentName: 'p' },
            {
              href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus',
            }
          ),
          'great writeup'
        ),
        ' that covers how different browsers behave when clicking buttons.'
      ),
      mdx(
        'p',
        null,
        'Additionally, in Safari, buttons can be focused via \u201COption + Tab\u201D. In other browsers, the \u201CTab\u201D key alone is sufficient.'
      )
    ),
    mdx('h2', null, 'A hover state'),
    mdx(
      'p',
      null,
      "So, in real life, buttons don't rise up to meet your finger before you press on it."
    ),
    mdx('p', null, "But wouldn't it be cool if they did?"),
    mdx(
      'p',
      null,
      "Let's shift the button up by a few pixels when they hover. Also, let's slap a ",
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ' on the front layer. This will animate the state changes, producing a more fluid interaction.'
    ),
    mdx(Playground, {
      id: 'button-transition',
      centered: !0,
      splitRatio: 0.62,
      layoutMode: 'tabbed',
      cssCode: `
.pushable {
  background: hsl(340deg 100% 32%);
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-4px);
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}
  `,
      html: `
<style>
  .front {
    will-change: transform;
    transition: transform 250ms;
  }

  .pushable:hover .front {
    transform: translateY(-6px);
  }
  
  .pushable:active .front {
    transform: translateY(-2px);
  }
</style>

<button class="pushable">
  <span class="front">
    Push me
  </span>
</button>
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'I add the ',
      mdx('inlineCode', { parentName: 'p' }, 'will-change: transform'),
      ' declaration so that this animation can be hardware-accelerated. This topic is covered in my ',
      mdx(
        'a',
        t({ parentName: 'p' }, { href: '/animation/css-transitions/' }),
        'Introduction to CSS Transitions'
      ),
      '.'
    ),
    mdx('h2', null, 'Injecting personality'),
    mdx(
      'p',
      null,
      'With a blanket ',
      mdx('inlineCode', { parentName: 'p' }, 'transition: transform 250ms'),
      ", we've given our button an animation, but it still doesn't have much in the way of ",
      mdx(Sparkles, { mdxType: 'Sparkles' }, 'personality'),
      '.'
    ),
    mdx(
      'p',
      null,
      "Let's consider the different actions that can be performed on this button:"
    ),
    mdx(
      'ul',
      null,
      mdx('li', { parentName: 'ul' }, 'It can be pressed'),
      mdx('li', { parentName: 'ul' }, 'It can be released'),
      mdx('li', { parentName: 'ul' }, 'It can be hovered'),
      mdx(
        'li',
        { parentName: 'ul' },
        'It can be departed from (when the user mouses away)'
      )
    ),
    mdx(
      'p',
      null,
      "Should each of these actions share the same characteristics? I don't think so. I want the button to snap down quickly when clicked, and I want it to bounce back when released. When the cursor wanders away, I want it to sink back to its natural position at a glacial pace."
    ),
    mdx(
      'p',
      null,
      "Here's what that looks like. Try interacting with the button to see the difference:"
    ),
    mdx(Playground, {
      id: 'button-transition-optimized',
      centered: !0,
      splitRatio: 0.62,
      layoutMode: 'tabbed',
      cssCode: `
.pushable {
  background: hsl(340deg 100% 32%);
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-4px);
}

.pushable:active .front {
  transform: translateY(-2px);
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}
  `,
      html: `
<style>
  .front {
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
</style>

<button class="pushable">
  <span class="front">
    Push me
  </span>
</button>
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'We can set overrides for each state, to change how the animation behaves. In addition to picking different speeds, we can ',
      mdx('i', null, 'also'),
      ' change the timing functions!'
    ),
    mdx(
      'p',
      null,
      'Our default transition, inside ',
      mdx('inlineCode', { parentName: 'p' }, '.front'),
      `, is applied when the mouse leaves the button. It's our "return to equilibrium" transition. I've given it a leisurely duration of 600ms\u2014an eternity when it comes to micro-interactions. I've also given it a custom easing curve, via `,
      mdx('inlineCode', { parentName: 'p' }, 'cubic-bezier'),
      '.'
    ),
    mdx(
      'p',
      null,
      "I'll be writing more about cubic B\xE9zier curves soon. In essence, they let us create our own timing curve. This is a lower-level tool that gives us ",
      mdx('i', null, 'a ton'),
      ' of control.'
    ),
    mdx(
      'p',
      null,
      "In the case of our \u201Cequilibrium\u201D curve, it's essentially a more-aggressive ",
      mdx('inlineCode', { parentName: 'p' }, 'ease-out'),
      ':'
    ),
    mdx(BoxAnimation, {
      initialTimingFunction: '3d-button-equilibrium',
      mdxType: 'BoxAnimation',
    }),
    mdx(
      'p',
      null,
      'When we press down on the button, we switch to our ',
      mdx('inlineCode', { parentName: 'p' }, ':active'),
      " transition. I've chosen a lightning-quick transition time of 34ms\u2014roughly 2 frames at 60fps. I want this one to be speedy, since this is how people tend to press buttons in real life!"
    ),
    mdx(
      'p',
      null,
      'Finally, our ',
      mdx('inlineCode', { parentName: 'p' }, ':hover'),
      ' transition. This state tackles two separate actions:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'The rise-up when mousing over the button'
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'The snap-back after releasing the button'
      )
    ),
    mdx(
      'p',
      null,
      "Ideally, I would pick different transitions for each of these actions, but it isn't possible in pure CSS. If I ",
      mdx('i', null, 'really'),
      " wanted to go the extra mile, I'd need to write some JS to disambiguate between these states."
    ),
    mdx(
      'p',
      null,
      `I've crafted a "springy" B\xE9zier curve that overshoots a little bit. This gives the button a ton more personality. Here's what this curve looks like:`
    ),
    mdx(BoxAnimation, {
      initialTimingFunction: '3d-button-springy',
      mdxType: 'BoxAnimation',
    }),
    mdx(
      'p',
      null,
      'Ultimately, B\xE9zier curves will never look ',
      mdx('em', { parentName: 'p' }, 'quite'),
      ' as lush as ',
      mdx(
        'a',
        t(
          { parentName: 'p' },
          { href: '/animation/a-friendly-introduction-to-spring-physics/' }
        ),
        'spring physics'
      ),
      ', but they can get pretty close with enough tinkering!'
    ),
    mdx('h2', null, 'Adding a shadow'),
    mdx(
      'p',
      null,
      'To ',
      mdx('i', null, 'really'),
      ' sell the whole \u201C3D\u201D thing, we can add a shadow:'
    ),
    mdx(IntroDemo, { stage: 'shadow', mdxType: 'IntroDemo' }),
    mdx(
      'p',
      null,
      'You may be tempted to reach for ',
      mdx('inlineCode', { parentName: 'p' }, 'box-shadow'),
      " to accomplish this, but we'll have much more success by repeating a trick we saw earlier. Our shadow will be a separate layer, and it'll move in the ",
      mdx('i', null, 'opposite direction'),
      ' of our front layer.'
    ),
    mdx(ButtonLayersWithShadow, { mdxType: 'ButtonLayersWithShadow' }),
    mdx(
      'p',
      null,
      "In order for this to work, we'll need to restructure things a bit. Here's the markup for our new setup:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-html' }),
        `<button>
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">Push Me</span>
</button>
`
      )
    ),
    mdx(
      'p',
      null,
      'Before, we were using the ',
      mdx('inlineCode', { parentName: 'p' }, '<button>'),
      ' itself as our edge layer. Now, though, we need a shadow to sit below it. Our ',
      mdx('inlineCode', { parentName: 'p' }, '<button>'),
      ' will become a wrapper, holding 3 layers stacked one on top of the other.'
    ),
    mdx('p', null, "Here's the CSS, with some stuff removed for brevity:"),
    mdx(Playground, {
      id: 'button-mvp-with-shadow',
      centered: !0,
      clampMaxHeight: !0,
      splitRatio: 0.62,
      layoutMode: 'tabbed',
      html: `
<button class="pushable">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">
    Push me
  </span>
</button>
  `,
      cssCode: `
.pushable {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  transform: translateY(2px);
}
.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(340deg 100% 32%);
}
.front {
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  background: hsl(345deg 100% 47%);
  transform: translateY(-4px);
}

.pushable:hover .front {
  transform: translateY(-6px);
}
.pushable:hover .shadow {
  transform: translateY(4px);
}
.pushable:active .front {
  transform: translateY(-2px);
}
.pushable:active .shadow {
  transform: translateY(1px);
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}
  `,
      mdxType: 'Playground',
    }),
    mdx(
      'p',
      null,
      'In order to stack HTML elements, we use absolute positioning. The final layer, ',
      mdx('inlineCode', { parentName: 'p' }, '.front'),
      ', uses relative positioning, since we need 1 in-flow child to give the ',
      mdx('inlineCode', { parentName: 'p' }, '<button>'),
      ' its width and height.'
    ),
    mdx(
      'p',
      null,
      'We can rely purely on DOM order; no ',
      mdx('inlineCode', { parentName: 'p' }, 'z-index'),
      ' required to control the stacking order!'
    ),
    mdx(
      'p',
      null,
      'In terms of how to set the ',
      mdx('inlineCode', { parentName: 'p' }, 'translate'),
      ": our shadow moves in the opposite direction from our front layer. The shadow doesn't quite move as far from the baseline position: While ",
      mdx('inlineCode', { parentName: 'p' }, '.front'),
      ' moves up by 6px, ',
      mdx('inlineCode', { parentName: 'p' }, '.shadow'),
      ' only moves down by 4px. This is a subjective choice;you might prefer different values. Experimentation is encouraged!'
    ),
    mdx(
      'p',
      null,
      'We can also add a bit of blurring, for a softer, more natural shadow:'
    ),
    mdx(SoftShadow, { mdxType: 'SoftShadow' }),
    mdx('p', null, 'This can be accomplished with the blur filter:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.shadow {
  filter: blur(4px);
}
`
      )
    ),
    mdx('h2', null, 'Color and aesthetics'),
    mdx(
      'p',
      null,
      "We're just about there, but we can do two more small things to complete the effect."
    ),
    mdx(
      'p',
      null,
      'This first one is super subtle, but really satisfying. I apply a linear gradient to the "edge" element, to make it seem like the rounded corners are reflecting less light:'
    ),
    mdx(ButtonGradient, { mdxType: 'ButtonGradient' }),
    mdx('p', null, "Here's the CSS for this bit:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.edge {
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}
`
      )
    ),
    mdx(
      'p',
      null,
      "We're almost there \u2014 let's toss a cherry onto this sundae and call it a day."
    ),
    mdx('p', null, 'The last little detail is an additional hover effect:'),
    mdx(IntroDemo, { mdxType: 'IntroDemo' }),
    mdx('p', null, 'On hover, the button brightens. Both layers get lighter.'),
    mdx(
      'p',
      null,
      'How should we tackle this? We could switch out the colors, but that gets a bit complicated because of the gradient we just added. Fortunately, we can leverage another CSS filter: ',
      mdx('inlineCode', { parentName: 'p' }, 'brightness'),
      '.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.pushable {
  transition: filter 600ms;
}

.pushable:hover {
  transition: filter 250ms;
  filter: brightness(110%);
}
`
      )
    ),
    mdx(
      'p',
      null,
      'On hover, the button gets 10% brighter. This affects all 3 layers. ',
      mdx('inlineCode', { parentName: 'p' }, 'filter'),
      " is a surprisingly performant property to animate, so we won't be stressing out the hardware too much."
    ),
    mdx('h2', null, 'Mobile enhancements'),
    mdx(
      'p',
      null,
      'When tapping an interactive element on mobile devices, the browser will flash a "tap rectangle" on top:'
    ),
    mdx(VideoGif, {
      src: '/images/3d-button/ios-tap.mp4',
      alt: 'The button is tapped, showing a brief grey flash',
      maxWidth: 443,
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      'Notice the grey rectangle that flashes quickly? The color varies between iOS and Android, but the effect is constant.'
    ),
    mdx(
      'p',
      null,
      "Why does it do this? Well, the box can serve as helpful feedback, to confirm that you've successfully tapped the target. But our button offers plenty of feedback as-is, so we don't need it in this case."
    ),
    mdx('p', null, 'We can remove it with this declaration:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.pushable {
  -webkit-tap-highlight-color: transparent;
}
`
      )
    ),
    mdx(
      'p',
      null,
      'One more thing: on iOS, if the button is held down for a second, the phone will try and select the text within the button:'
    ),
    mdx(VideoGif, {
      src: '/images/3d-button/ios-select.mp4',
      alt: 'The button is tapped, showing a brief grey flash',
      maxWidth: 443,
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "Let's make the our button unselectable, to improve this situation:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t({ parentName: 'pre' }, { className: 'language-css' }),
        `.pushable {
  user-select: none;
}
`
      )
    ),
    mdx(
      'p',
      null,
      mdx(
        'strong',
        { parentName: 'p' },
        'With great power comes great responsibility.'
      ),
      ' We should exercise great caution when disabling browser features meant to improve usability! In this case, I feel pretty confident that we are ',
      mdx('em', { parentName: 'p' }, 'improving'),
      ' the experience, not degrading it, but these properties should be used extremely rarely.'
    ),
    mdx('h1', null, 'Started from the button now we here'),
    mdx(
      'p',
      null,
      "It's been quite a journey, but I hope you'll agree that we've built a ",
      mdx('em', { parentName: 'p' }, 'very'),
      ' satisfying button.'
    ),
    mdx(
      'p',
      null,
      "It's also very ostentatious; you probably want to be pretty selective about where you use this sort of button. I wouldn't use this button for a GDPR cookie-consent banner! But for grand and exciting actions, you now have a button that matches \u{1F389}"
    ),
    mdx(
      'p',
      null,
      "If you're interested in leveling-up your CSS skills, I recently launched a course! It's specifically tailored for JS devs. If you work with a framework like React or Vue and you don't feel super comfortable with CSS, my mission this year is to change that. It's called ",
      mdx('strong', { parentName: 'p' }, 'CSS for JavaScript Developers'),
      ', and you can learn more at ',
      mdx(
        'a',
        t({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }),
        'css-for-js.dev'
      ),
      '.'
    ),
    mdx(
      'p',
      null,
      "\u2728 Here's the final source code for our big pushable button:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        t(
          { parentName: 'pre' },
          {
            className: 'language-html',
            metastring: 'clampMaxHeight',
            clampMaxHeight: !0,
          }
        ),
        `<style>
  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }
  .front {
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .pushable:hover {
    filter: brightness(110%);
  }

  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .pushable:hover .shadow {
    transform: translateY(4px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .pushable:focus:not(:focus-visible) {
    outline: none;
  }
</style>

<button class="pushable">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front">
    Push me
  </span>
</button>
`
      )
    )
  );
}
MDXContent.isMDXComponent = !0;
