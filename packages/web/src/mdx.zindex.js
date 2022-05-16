const l = (t, n, i) =>
  n in t
    ? Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i,
      })
    : (t[n] = i);
const e = (t, n) => {
  for (var i in n || (n = {}))
    Object.prototype.hasOwnProperty.call(n, i) && l(t, i, n[i]);
  if (Object.getOwnPropertySymbols)
    for (var i of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, i) && l(t, i, n[i]);
  return t;
};
const p = (t, n) =>
  Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
const d = (t, n) => {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) &&
      n.indexOf(a) < 0 &&
      (i[a] = t[a]);
  if (t != null && Object.getOwnPropertySymbols)
    for (var a of Object.getOwnPropertySymbols(t))
      n.indexOf(a) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, a) &&
        (i[a] = t[a]);
  return i;
};

const makeShortcode = (t) =>
    function (n) {
      return (
        console.warn(
          'Component ' +
            t +
            ' was not imported, exported, or provided by MDXProvider as global scope'
        ),
        mdx('div', e({}, n))
      );
    },
  DoubleIconDemo = makeShortcode('DoubleIconDemo'),
  DesktopOnly = makeShortcode('DesktopOnly'),
  Sidenote = makeShortcode('Sidenote'),
  MobileOnly = makeShortcode('MobileOnly'),
  FancyDemos = makeShortcode('FancyDemos'),
  VideoGif = makeShortcode('VideoGif'),
  Asterisk = makeShortcode('Asterisk'),
  SpringComparison = makeShortcode('SpringComparison'),
  Environment = makeShortcode('Environment'),
  SpringMechanism = makeShortcode('SpringMechanism'),
  ShowMoreDemo = makeShortcode('ShowMoreDemo'),
  Chunk = makeShortcode('Chunk'),
  CircleDemo = makeShortcode('CircleDemo'),
  NewsletterSignup = makeShortcode('NewsletterSignup'),
  TwitterCTA = makeShortcode('TwitterCTA'),
  Em = makeShortcode('Em'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(n) {
  var i = n,
    { components: t } = i,
    o = c(i, ['components']);
  return mdx(
    MDXLayout,
    l(e(e({}, layoutProps), o), { components: t, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      "Hover animations are a great way to make an application feel dynamic and responsive. It's a small thing, but it's exactly the kind of little detail that, in aggregate, can make a product feel ",
      mdx('em', { parentName: 'p' }, 'great'),
      '.'
    ),
    mdx(
      'p',
      null,
      "Sometimes, though, a simple state change on mouse-enter doesn't quite work. Hover over these icons to see what I mean:"
    ),
    mdx(DoubleIconDemo, { boop: 'PreBoop', mdxType: 'DoubleIconDemo' }),
    mdx(
      DesktopOnly,
      { breakpoint: 'small', mdxType: 'DesktopOnly' },
      mdx(
        Sidenote,
        { title: 'Keyboard users', mdxType: 'Sidenote' },
        mdx(
          'p',
          null,
          'For folks navigating without a mouse, you can trigger the hover effect by focusing the element and pressing "Enter". This is specific to the interactive demos, and is not included in code snippets.'
        )
      )
    ),
    mdx(
      MobileOnly,
      { breakpoint: 'small', mdxType: 'MobileOnly' },
      mdx(
        Sidenote,
        { title: 'Hi, mobile user!', mdxType: 'Sidenote' },
        mdx(
          'p',
          null,
          "Since phones don't have a hover equivalent, the demos on this page can be activated on tap. This is specific to the interactive demos, and is not included in code snippets."
        )
      )
    ),
    mdx(
      'p',
      null,
      "Maybe it's the asymmetry, but these hover states just don't feel good to me \u{1F62C}"
    ),
    mdx(
      'p',
      null,
      'Instead, what if the icons only popped over to their hover state for a brief moment?'
    ),
    mdx(DoubleIconDemo, { mdxType: 'DoubleIconDemo' }),
    mdx(
      'p',
      null,
      'I ',
      mdx('em', { parentName: 'p' }, 'love'),
      " this effect. It's playful and dynamic and surprising. It's not commonly done, since it's significantly more complex than using ",
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      '.'
    ),
    mdx('p', null, 'It can be used in all kinds of nifty ways. Some examples:'),
    mdx(FancyDemos, { mdxType: 'FancyDemos' }),
    mdx(
      'p',
      null,
      'After an informal ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          { href: 'https://twitter.com/JoshWComeau/status/1324079542852558848' }
        ),
        'Twitter poll'
      ),
      ', it was decided that this effect would be called a "boop".'
    ),
    mdx(
      'p',
      null,
      'In this tutorial\u2014which is intended for ',
      mdx('strong', { parentName: 'p' }, 'intermediate React users'),
      "\u2014we'll learn how to build it \u2728"
    ),
    mdx(
      Sidenote,
      { type: 'success', title: 'Cut to the chase', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "This tutorial follows a winding path. We learn about different React architecture patterns, and how to combine hooks and components for maximum reuse. I think it's a journey worth going on!"
      ),
      mdx(
        'p',
        null,
        "But, if you're eager to jump to the code snippet, you can ",
        mdx(
          'a',
          e({ parentName: 'p' }, { href: '/snippets/react-hooks/use-boop/' }),
          'check it out here'
        ),
        '.'
      )
    ),
    mdx('h1', null, 'A first stab'),
    mdx(
      'p',
      null,
      'The neat thing about component-driven frameworks like React is that we can package up ',
      mdx('em', { parentName: 'p' }, 'behaviours'),
      ' in much the same way that we package UI elements. In addition to ',
      mdx('inlineCode', { parentName: 'p' }, '<Button>'),
      's and ',
      mdx('inlineCode', { parentName: 'p' }, '<Table>'),
      's, we can create ',
      mdx('inlineCode', { parentName: 'p' }, '<FadeIn>'),
      's and ',
      mdx('inlineCode', { parentName: 'p' }, '<SoundEffect>'),
      's.'
    ),
    mdx(
      'p',
      null,
      'In our case, the effect\u2014quickly applying and then removing a transformation\u2014can be divorced from any specific UI elements, so we can apply it to anything!'
    ),
    mdx('p', null, "Here's a first shot at a React component:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e(
          { parentName: 'pre' },
          {
            className: 'language-jsx',
            metastring: 'clampMaxHeight=false',
            clampMaxHeight: 'false',
          }
        ),
        `const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? \`rotate(\${rotation}deg)\`
      : \`rotate(0deg)\`,
    transition: \`transform \${timing}ms\`,
  };

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};
`
      )
    ),
    mdx('p', null, "This is a lot of code, so let's walk through it!"),
    mdx(
      'p',
      null,
      `The fundamental idea is that when mousing over this element, it flips to an alternative state, just like a typical hover transition. In addition, though, it also starts a timer. When that timer elapses, the state flips back to the "natural" state, regardless of whether we've still hovering or not.`
    ),
    mdx(
      'p',
      null,
      `It's a bit like one of those "useless machines" that turns itself off after a short interval:`
    ),
    mdx(VideoGif, {
      alt: 'An animal-like box with a switch. A human finger switches it on, and the machine pops open to reveal a motorized arm that pops it back off',
      src: '/videos/boop/useless-machine.mp4',
      noBorder: !0,
      caption: mdx(
        'a',
        {
          href: 'https://www.youtube.com/watch?v=D5hXI5kkf-4',
          target: '_blank',
        },
        'Source'
      ),
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      'We keep track of the "boop" state with a state hook, ',
      mdx('inlineCode', { parentName: 'p' }, 'isBooped'),
      '.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `const [isBooped, setIsBooped] = React.useState(false);
`
      )
    ),
    mdx(
      'p',
      null,
      'We wrap the thing we want to boop \u2014 ',
      mdx('inlineCode', { parentName: 'p' }, 'children'),
      ' \u2014 in a span. This is so we can apply the rotation style, as well as handle mouse events to trigger the effect in the first place.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `const trigger = () => {
  setIsBooped(true);
};

return (
  <span onMouseEnter={trigger} style={style}>
`
      )
    ),
    mdx(
      Sidenote,
      { title: 'Event-handler on a span!?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        "In general, it's considered a best-practice to place event handlers on interactive elements like ",
        mdx('inlineCode', { parentName: 'p' }, 'button'),
        ' and ',
        mdx('inlineCode', { parentName: 'p' }, 'input'),
        ". Keyboard users won't be able to focus a ",
        mdx('inlineCode', { parentName: 'p' }, 'div'),
        ' or ',
        mdx('inlineCode', { parentName: 'p' }, 'span'),
        ', so this functionality will be off-limits to them.'
      ),
      mdx(
        'p',
        null,
        "This is a special case, though. I don't actually ",
        mdx('em', { type: 'original' }, 'want'),
        " this effect to trigger on focus. It's a purely decorative effect, and I suspect it would be irritating for keyboard users, who already have a distinct visual indicator for focus states (outlines)."
      )
    ),
    mdx(
      'p',
      null,
      'We use an effect hook which is set to fire whenever ',
      mdx('inlineCode', { parentName: 'p' }, 'isBooped'),
      ' changes. Our hover event causes this value to flip, which causes the effect hook to trigger. The effect hook schedules a timeout to flip ',
      mdx('inlineCode', { parentName: 'p' }, 'isBooped'),
      ' back to false.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `React.useEffect(() => {
  // We only want to act when we're going from
  // not-booped to booped.
  if (!isBooped) {
    return;
  }

  const timeoutId = window.setTimeout(() => {
    setIsBooped(false);
  }, timing);

  // Just in case our component happens to
  // unmount while we're booped, cancel
  // the timeout to avoid a memory leak.
  return () => {
    window.clearTimeout(timeoutId);
  };

  // Trigger this effect whenever \`isBooped\`
  // changes. We also listen for \`timing\` changes,
  // in case the length of the boop delay is
  // variable.
}, [isBooped, timing]);
`
      )
    ),
    mdx(
      'p',
      null,
      "What about the effect itself? For now, we're limiting it to rotation. When ",
      mdx('inlineCode', { parentName: 'p' }, 'isBooped'),
      ' is true, we apply a ',
      mdx('inlineCode', { parentName: 'p' }, 'transform: rotate'),
      ' to the wrapping element.'
    ),
    mdx(
      'p',
      null,
      'We control both the rotation amount, in degrees, and the transition length through props, since different situations might call for different effects. We also need to set ',
      mdx('inlineCode', { parentName: 'p' }, 'display'),
      ' to ',
      mdx('inlineCode', { parentName: 'p' }, 'inline-block'),
      ', because ',
      mdx('inlineCode', { parentName: 'p' }, 'inline'),
      " elements aren't transformable, and we add ",
      mdx('inlineCode', { parentName: 'p' }, 'backface-visibility: hidden'),
      ' to take advantage of hardware acceleration',
      mdx(Asterisk, {
        content:
          "Technically, this property affects how our element looks when it's rotated to face away from the user. We don't care about that, but this property has a side-effect\u2014it lets our GPU take care of the rendering, which makes the animation look smoother.",
        mdxType: 'Asterisk',
      }),
      '.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        "const style = {\n  display: 'inline-block',\n  backfaceVisibility: 'hidden',\n  transform: isBooped\n    ? `rotate(${rotation}deg)`\n    : `rotate(0deg)`,\n  transition: `transform ${timing}ms`,\n};\n"
      )
    ),
    mdx(
      'p',
      null,
      "Here's how we'd use our new ",
      mdx('inlineCode', { parentName: 'p' }, 'Boop'),
      ' component:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `<Boop rotation={20} timing={200}>
  <UnstyledButton>
    <Icon icon="gear" />
  </UnstyledButton>
</Boop>
`
      )
    ),
    mdx('p', null, "And here's what it looks like:"),
    mdx(DoubleIconDemo, { boop: 'BoopV1', mdxType: 'DoubleIconDemo' }),
    mdx(
      'p',
      null,
      'This looks ',
      mdx('em', { parentName: 'p' }, 'alright'),
      ', but I know we can do better.'
    ),
    mdx('h1', null, 'Springs to the rescue!'),
    mdx(
      'p',
      null,
      "The motion in this initial version feels robotic and artificial to me. It doesn't have the fluid, organic movement that I crave from modern web animations."
    ),
    mdx(
      'p',
      null,
      'In ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          { href: '/animation/a-friendly-introduction-to-spring-physics/' }
        ),
        'A Friendly Introduction to Spring Physics'
      ),
      ", I shared how I add depth and realism to my animations. If you haven't already, I'd suggest checking it out! It features these fun little springy demos:"
    ),
    mdx(
      SpringComparison,
      { scoochCloser: !0, mdxType: 'SpringComparison' },
      mdx(
        Environment,
        { type: 'clear', mdxType: 'Environment' },
        mdx(SpringMechanism, { mass: 0.5, mdxType: 'SpringMechanism' })
      ),
      mdx(
        Environment,
        { flipped: !0, type: 'clear', mdxType: 'Environment' },
        mdx(SpringMechanism, { mass: 3, mdxType: 'SpringMechanism' })
      )
    ),
    mdx(
      'p',
      null,
      '(\u2728 Drag and release the weights to see the animation \u2728)'
    ),
    mdx(
      'p',
      null,
      'My favourite spring-physics animation library is ',
      mdx(
        'a',
        e({ parentName: 'p' }, { href: 'https://www.react-spring.io/' }),
        'React Spring'
      ),
      ". It offers a modern hook-based API, and unbeatable performance. Let's update our snippet to use it instead of CSS transitions:"
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
            metastring: 'clampMaxHeight=false highlight=[[0,0],[5,11],[22,24]]',
            clampMaxHeight: 'false',
            highlight: '[[0,0],[5,11],[22,24]]',
          }
        ),
        `import { animated, useSpring } from 'react-spring';

const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? \`rotate(\${rotation}deg)\`
      : \`rotate(0deg)\`,
  });

  React.useEffect(() => {
    // Unchanged
  }, [isBooped, timing]);

  const trigger = () => {
    // Unchanged
  };

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
`
      )
    ),
    mdx(
      'p',
      null,
      'Before, we were creating a ',
      mdx('inlineCode', { parentName: 'p' }, 'style'),
      " object and passing it directly onto our span. Now, we're passing that style object (without ",
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      ') into ',
      mdx('inlineCode', { parentName: 'p' }, 'useSpring'),
      '.'
    ),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'useSpring'),
      ' hook can be thought of as one of those industrial machines that squirts the strawberry filling into pop-tarts:'
    ),
    mdx(VideoGif, {
      alt: 'An industrial machine squirting red jam onto a pastry, and then folding it up',
      src: '/videos/boop/poptart.mp4',
      noBorder: !0,
      style: { width: '100%', maxWidth: 994 / 2 },
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "In other words, it takes some plain CSS and injects \u2728 spring magic \u2728 into it. Instead of using the B\xE9zier curves that CSS provides, it'll use spring math instead. That's why we omit the ",
      mdx('inlineCode', { parentName: 'p' }, 'transition'),
      " property; we're delegating that task to React Spring."
    ),
    mdx(
      'p',
      null,
      "Because spring physics aren't a native part of the web (yet!), we can't pass this magic-injected style object onto a ",
      mdx('inlineCode', { parentName: 'p' }, '<span>'),
      '. Instead, we render an ',
      mdx('inlineCode', { parentName: 'p' }, '<animated.span>'),
      ', which is identical to the ',
      mdx('inlineCode', { parentName: 'p' }, '<span>'),
      " we had before, except it knows how to handle the springy style object we've produced."
    ),
    mdx('p', null, "Here's the result:"),
    mdx(DoubleIconDemo, { boop: 'BoopV2', mdxType: 'DoubleIconDemo' }),
    mdx(
      'p',
      null,
      "This feels a bit sluggish, so let's tweak the configuration:"
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
            metastring: 'highlight=[[6,9]]',
            highlight: '[[6,9]]',
          }
        ),
        `const style = useSpring({
  display: 'inline-block',
  backfaceVisibility: 'hidden',
  transform: isBooped
    ? \`rotate(\${rotation}deg)\`
    : \`rotate(0deg)\`,
  config: {
    tension: 300,
    friction: 10,
  },
});
`
      )
    ),
    mdx(
      'p',
      null,
      'By cranking up the tension and lowering the friction, our icons react much more swiftly to being hovered over:'
    ),
    mdx(DoubleIconDemo, { mdxType: 'DoubleIconDemo' }),
    mdx('p', null, "Now we're getting somewhere!"),
    mdx(
      Sidenote,
      { title: 'Why a timeout?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'A few folks have reached out to suggest that instead of using ',
        mdx('inlineCode', { parentName: 'p' }, 'setTimeout'),
        ', I could instead use the ',
        mdx('inlineCode', { parentName: 'p' }, 'onRest'),
        ' callback from the React Spring API. It seems cleaner to schedule the "unboop" based on the animation itself, not based on an arbitrary amount of time, right?'
      ),
      mdx(
        'expanded',
        null,
        mdx(
          'p',
          null,
          'In fact, I actually do want to use a timeout in this situation, for two reasons:'
        ),
        mdx(
          'ol',
          null,
          mdx(
            'li',
            { parentName: 'ol' },
            'One of the great things about spring physics is how gracefully they handle interrupts. I ',
            mdx('em', { parentName: 'li' }, 'want'),
            " to cut it off, to yank it back to its default position before it's fully come to rest"
          ),
          mdx(
            'li',
            { parentName: 'ol' },
            'The trouble in general with ',
            mdx('inlineCode', { parentName: 'li' }, 'onRest'),
            ' is that it waits until the animation has ',
            mdx('em', { parentName: 'li' }, 'completely stopped'),
            '.  This is usually much later than the ',
            mdx('em', { type: 'original' }, 'perceived stop'),
            ", since there's often a lot of sub-pixel oscillations at the tail end of the animation. You can tweak this by changing the ",
            mdx('inlineCode', { parentName: 'li' }, 'precision'),
            ' config prop, but sometimes those sub-pixel oscillations add a nice, subtle effect.'
          )
        ),
        mdx(
          'p',
          null,
          'I wish that React Spring had an API that would let me specify a ',
          mdx('em', { parentName: 'p' }, 'ratio of completion'),
          `, so I could say "fire this callback when the animation is 50% complete". But really, the timeout solution I've come up with works just fine \u{1F604}`
        )
      )
    ),
    mdx(
      'p',
      null,
      "So far, we've limited our boop to affect rotation, but we can do a lot more than that! Let's update it to support size changes (via ",
      mdx('inlineCode', { parentName: 'p' }, 'scale'),
      ') and position shifts (via ',
      mdx('inlineCode', { parentName: 'p' }, 'translate'),
      '):'
    ),
    mdx(DoubleIconDemo, {
      boop: 'BoopV4',
      transforms: [{ scale: 1.125 }, { y: -6 }],
      mdxType: 'DoubleIconDemo',
    }),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'transform'),
      ' CSS property accepts multiple space-separated values, so our code becomes:'
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
            metastring: 'clampMaxHeight=false highlight=[[1,4],[13,19]]',
            clampMaxHeight: 'false',
            highlight: '[[1,4],[13,19]]',
          }
        ),
        `const Boop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? \`translate(\${x}px, \${y}px)
         rotate(\${rotation}deg)
         scale(\${scale})\`
      : \`translate(0px, 0px)
         rotate(0deg)
         scale(1)\`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  // The rest is unchanged\u2026
};
`
      )
    ),
    mdx(
      'p',
      null,
      "We default all values to their natural state (eg. 0px translate, 1x scale). This allows us to only specify the values we want to change: if we don't pass a value for rotation, it won't rotate."
    ),
    mdx(
      'p',
      null,
      "I feel pretty happy with this result, but there's a problem with this solution\u2026 And it's a significant one. In fact, ",
      mdx(
        'strong',
        { parentName: 'p' },
        'we need to rethink our whole approach!'
      )
    ),
    mdx('h1', null, 'Disconnected boops'),
    mdx(
      'p',
      null,
      "On the project I'm working on, I have widgets that can be expanded to show the full content. I thought it'd be fun to cause the caret to skip down a bit on hover:"
    ),
    mdx(ShowMoreDemo, { mdxType: 'ShowMoreDemo' }),
    mdx(
      'p',
      null,
      "This presents an interesting challenge, because there's a disconnect\u2014I want the boop to affect ",
      mdx('em', { parentName: 'p' }, 'only'),
      ' the caret, but it should be triggered whenever I mouse-over any part of it. If I wave my cursor over the word "Show", the caret should boop.'
    ),
    mdx('img', {
      src: '/images/boop/hover-vs-animated-areas.png',
      alt: 'A hand-drawn illustration of the above button, showing how the entire button is a hover target, but only a small portion will be animated.',
      type: 'no-border',
      style: { maxWidth: 250, transform: 'translateX(3px)' },
    }),
    mdx(
      'p',
      null,
      "Our current approach doesn't allow for this at all. ",
      mdx(
        'strong',
        { parentName: 'p' },
        'The animation is bound to the same element as the event-handler.'
      )
    ),
    mdx(
      'p',
      null,
      'After some experimentation, I realized that a ',
      mdx('em', { parentName: 'p' }, 'hook'),
      ', not a component, was the right API for this effect.'
    ),
    mdx('h2', null, 'Starting from the consumer'),
    mdx(
      'p',
      null,
      "Let's start from the perspective of someone using the API. I'll figure out how to implement it later; first, I want to figure out the simplest, easiest interface."
    ),
    mdx('p', null, "Here's what I came up with:"),
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
        `import { animated } from 'react-spring';

function SomeComponent() {
  const [style, trigger] = useBoop({ y: 10 });

  return (
    <button onMouseEnter={trigger}>
      Show more
      <animated.span style={style}>
        <Icon icon="caret-down" />
      </animated.span>
    </button>
  );
}
`
      )
    ),
    mdx(
      'p',
      null,
      'We should be able to pass our hook an object representing the config, and it should give us two things:'
    ),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'The style object, to be applied to an ',
        mdx('inlineCode', { parentName: 'li' }, 'animated'),
        ' element, like ',
        mdx('inlineCode', { parentName: 'li' }, 'animated.span'),
        ' or ',
        mdx('inlineCode', { parentName: 'li' }, 'animated.button')
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'A trigger function, to call whenever we want the boop to occur.'
      )
    ),
    mdx(
      'p',
      null,
      "If we want, we can apply both of these things to the same element, but we don't have to! In fact, this hook gives us a ton of flexibility: we can trigger it whenever we want, not just on hover. For example, we can include mobile users by setting the effect on tap, or schedule it in an interval to add prominence to an important part of the UI!",
      mdx(Asterisk, {
        content:
          "With great power comes great responsibility. Please don't use this to create annoying experiences!",
        mdxType: 'Asterisk',
      })
    ),
    mdx('p', null, "Here's how it's implemented:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `// hooks/use-boop.js
import React from 'react';
import { useSpring } from 'react-spring';

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? \`translate(\${x}px, \${y}px)
         rotate(\${rotation}deg)
         scale(\${scale})\`
      : \`translate(0px, 0px)
         rotate(0deg)
         scale(1)\`,

    config: springConfig,
  });

  React.useEffect(() => {
    // All the same stuff...
  }, [isBooped]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}
`
      )
    ),
    mdx(
      'p',
      null,
      "Much of this logic is copied over; we're doing the same work to produce that ",
      mdx('inlineCode', { parentName: 'p' }, 'style'),
      ' object. Instead of applying it onto an element, though, we pass it off to the caller.'
    ),
    mdx('p', null, 'Two other small tweaks:'),
    mdx(
      'ol',
      null,
      mdx(
        'li',
        { parentName: 'ol' },
        'The spring configuration is now provided as a parameter, since different situations might call for different physics.'
      ),
      mdx(
        'li',
        { parentName: 'ol' },
        'The trigger function is wrapped in ',
        mdx('inlineCode', { parentName: 'li' }, 'React.useCallback'),
        ". This is done so that the function reference doesn't change between renders, to avoid breaking ",
        mdx('inlineCode', { parentName: 'li' }, 'useMemo'),
        " components. Because we don't know how the trigger function will be used, this seems like a prudent bit of forethought",
        mdx(Asterisk, {
          content:
            "Some folks would categorize this as a premature optimization, but I've lost count of how many times I've had to perform this optimization to fix a measured, noticeable problem. Especially when the hook is made to be generalized and reusable, this feels like a no-brainer to me.",
          mdxType: 'Asterisk',
        }),
        '.'
      )
    ),
    mdx('h2', null, 'Back to the component'),
    mdx(
      'p',
      null,
      'This hook is neat, but I actually really liked the component API we came up with earlier. In cases where there ',
      mdx('em', { parentName: 'p' }, "isn't"),
      ' a disconnect between event-handler and animation, can we use a component instead?'
    ),
    mdx(
      'p',
      null,
      'The really cool thing about this pattern is ',
      mdx(
        'em',
        { type: 'original' },
        'we can easily wrap the hook in a component'
      ),
      ', to have our cake and eat it too:'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `// components/Boop.jsx
import React from 'react';
import { animated } from 'react-spring';

import useBoop from '@hooks/use-boop';

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
`
      )
    ),
    mdx(
      'p',
      null,
      "Our Boop component gets a whole lot smaller, since we're delegating all the hard stuff to our ",
      mdx('inlineCode', { parentName: 'p' }, 'useBoop'),
      ' hook. Now we have access to two glorious APIs, both powered by the same logic. ',
      mdx('em', { parentName: 'p' }, 'DRY AF.')
    ),
    mdx(
      Sidenote,
      { title: 'Snapping into place?', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'Depending on your animation, you may notice that when the animation ends, it seems to "snap into place".'
      ),
      mdx(
        'p',
        null,
        "This is a subtle shift by a pixel or two. It's especially common when you're animating an element that contains text:"
      ),
      mdx('img', {
        alt: "A mouse hovers over our 'hello world' button, and it shifts slightly",
        src: '/images/css-transitions/texture-issue.gif',
        width: 230,
        height: 134,
      }),
      mdx(
        'p',
        null,
        'You can learn more about why this is happening, and how to fix it, in my blog post, ',
        mdx(
          'a',
          e({ parentName: 'p' }, { href: '/animation/css-transitions' }),
          '\u201CAn Interactive Guide to CSS Transitions\u201D'
        ),
        '.'
      )
    ),
    mdx('h1', null, 'Keeping it accessible'),
    mdx(
      'p',
      null,
      "The component/hook combo we've created is delightful, but delight is subjective. Not everybody wants our UI to dance and jiggle about, ",
      mdx('em', { parentName: 'p' }, 'especially'),
      ' folks who have a vestibular disorder.'
    ),
    mdx(
      'p',
      null,
      "I've written about how to ",
      mdx(
        'a',
        e({ parentName: 'p' }, { href: '/react/prefers-reduced-motion/' }),
        'build accessible animations'
      ),
      " in React. Let's apply some of those lessons here:"
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
            metastring: 'highlight=[[12,12],[28,30]]',
            highlight: '[[12,12],[28,30]]',
          }
        ),
        `// hooks/use-boop.js
import React from 'react';
import { useSpring } from 'react-spring';

function useBoop({
  rotation = 0,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    // All the same stuff
  });

  React.useEffect(() => {
    // All the same stuff here as well...
  }, [isBooped]);

  const trigger = React.useCallback(() => {
    // Yep yep
  }, []);

  let applicableStyle = prefersReducedMotion ? {} : style;

  return [applicableStyle, trigger];
}
`
      )
    ),
    mdx(
      'p',
      null,
      'The ',
      mdx(
        'a',
        e(
          { parentName: 'p' },
          { href: '/snippets/react-hooks/use-prefers-reduced-motion' }
        ),
        'prefers-reduced-motion hook'
      ),
      ' will let us know if the user has expressed a preference to remove motion. If that value is ',
      mdx('inlineCode', { parentName: 'p' }, 'true'),
      `, we'll return a "dummy" style object. This ensures that the element will never move, since the style object is always empty.`
    ),
    mdx('h1', null, 'Yours to discover'),
    mdx(
      'p',
      null,
      'First: thank you so much for reading this far!! This has been quite a journey, and I appreciate you for taking it with me \u{1F604}'
    ),
    mdx(
      'p',
      null,
      "You might be wondering, though: why on earth did we need to cover this in such depth? Why didn't I just publish an NPM module and write a post explaining how to use it, like I did with ",
      mdx(
        'a',
        e(
          { parentName: 'p' },
          { href: '/react/announcing-use-sound-react-hook/' }
        ),
        'useSound'
      ),
      '? Surely that would be more convenient, both for the reader and the author.'
    ),
    mdx(
      'p',
      null,
      "Here's the thing: this effect is effective ",
      mdx('em', { parentName: 'p' }, 'because'),
      " it's rare. I'm not interested in commoditizing it, because it would lose its charm!"
    ),
    mdx(
      'p',
      null,
      "Instead, I'd much rather teach folks how to create effects like this, and let them run with it. This code will live in your Git repo, not buried in a ",
      mdx('inlineCode', { parentName: 'p' }, 'node_modules'),
      ' folder. Tinker with it, and see what else it can do! Create things I never could have anticipated, and show me ',
      mdx(
        'a',
        e({ parentName: 'p' }, { href: 'https://twitter.com/JoshWComeau' }),
        'on Twitter'
      ),
      ' \u{1F604}'
    ),
    mdx(
      'p',
      null,
      "This code is mutable, and I hope you'll do some experimentation \u2728 if you're ",
      mdx('em', { parentName: 'p' }, 'really'),
      ' feeling adventurous, you could try and incorporate more physics: maybe the element should translate in the same direction as the cursor is moving, as if it was blowing in the breeze?'
    ),
    mdx(
      'p',
      null,
      "Here's the final version, ready to copy-and-paste into your repo:"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `import React from 'react';
import { useSpring } from 'react-spring';

// UPDATE this path to your copy of the hook!
// Source here: https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    transform: isBooped
      ? \`translate(\${x}px, \${y}px)
         rotate(\${rotation}deg)
         scale(\${scale})\`
      : \`translate(0px, 0px)
         rotate(0deg)
         scale(1)\`,
    config: springConfig,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  let appliedStyle = prefersReducedMotion ? {} : style;

  return [appliedStyle, trigger];
}

export default useBoop;
`
      )
    ),
    mdx('h1', null, 'Bonus: That star animation'),
    mdx(
      'p',
      null,
      'In the initial demos of this tutorial, I showcased a hoverable star animation:'
    ),
    mdx(
      Chunk,
      { mdxType: 'Chunk' },
      mdx(CircleDemo, { mdxType: 'CircleDemo' })
    ),
    mdx(
      'p',
      null,
      'This effect does indeed use the ',
      mdx('inlineCode', { parentName: 'p' }, 'useBoop'),
      " hook we've created, but it also involves some trigonometry, which is beyond the scope of this tutorial. I'm in the process of writing a post about how to use trigonometry to create effects like this one\u2014if you'd like to receive early access to that tutorial, and others like it, you can sign up for my newsletter:"
    ),
    mdx(
      'div',
      { style: { marginBottom: 48 } },
      mdx(NewsletterSignup, { variant: 'minimal', mdxType: 'NewsletterSignup' })
    ),
    mdx(
      'p',
      null,
      "My newsletter is sent about once a month, and it includes little extras that don't quite fit on this blog. You can, of course, unsubscribe at any time, no hurt feelings. \u{1F49C}"
    ),
    mdx(
      'p',
      null,
      "In the meantime, though, I'll share the snippet, with as much context as I can in the comments! Hope it helps. \u{1F31F}"
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Star } from 'react-feather';

import useBoop from '@hooks/use-boop.hook';

import UnstyledButton from '@components/UnstyledButton';
import Spacer from '@components/Spacer';

const useAngledBoop = (index) => {
  // Our star has 5 points across a 360-degree area.
  // Our first point should shoot out at 0 degrees,
  // our second at 72 degrees (1/5th of 360),
  // our third at 144 degrees, and so on.
  let angle = index * (360 / 5);
  // By default in JS, 0-degrees is the 3-o'clock
  // position, but I want my animation to start at
  // the 12-o'clock position, so I'll subtract
  // 90 degrees
  angle -= 90;

  // Trigonometry methods in JS use radians, not
  // degrees, so we need to convert.
  const angleInRads = (angle * Math.PI) / 180;

  // If this was meant to be reusable, this would
  // be configurable, but it's not, so it's
  // hardcoded. The # of pixels from the center
  // that our circle will bounce.
  const distance = 42;

  // Convert polar coordinages (angle, distance)
  // to cartesian ones (x, y), since JS uses
  // a cartesian coordinate system:
  const x = distance * Math.cos(angleInRads);
  const y = distance * Math.sin(angleInRads);

  // \`normalize\` is commonly called "lerp",
  // as well as Linear Interpolation. It
  // maps a value from one scale to another.
  // In this case, I want the time to vary
  // between 450ms and 600ms, with the first
  // point being the slowest, and the last
  // one being the fastest.
  //
  // It's defined below
  let timing = normalize(index, 0, 4, 450, 600);

  // \`normalize\` produces linear interpolation,
  // but I want there to be a *bit* of an ease;
  // I want it to appear to be slowing down,
  // as we get further into the circles.
  timing *= 1 + index * 0.22;

  const friction = normalize(index, 0, 4, 15, 40);

  const boop = useBoop({
    x,
    y,
    timing,
    scale: 1.4,
    springConfig: { tension: 180, friction },
  });

  return boop;
};

const CircleDemo = () => {
  const [c1s, c1t] = useAngledBoop(0);
  const [c2s, c2t] = useAngledBoop(1);
  const [c3s, c3t] = useAngledBoop(2);
  const [c4s, c4t] = useAngledBoop(3);
  const [c5s, c5t] = useAngledBoop(4);
  const [starStyles, starTrigger] = useBoop({
    scale: 1.1,
    rotation: 10,
    timing: 150,
    springConfig: {
      tension: 300,
      friction: 6,
    },
  });

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => {
          // If I had more than 5 points, I might
          // write a \`callAll()\` helper function.
          // But I don't, so this is fine.
          c1t();
          c2t();
          c3t();
          c4t();
          c5t();
          starTrigger();
        }}
      >
        <IconWrapper style={starStyles}>
          <Star size={48} />
        </IconWrapper>
      </Button>
      <Circle style={c1s} />
      <Circle style={c2s} />
      <Circle style={c3s} />
      <Circle style={c4s} />
      <Circle style={c5s} />
    </Wrapper>
  );
};

// This helper function is used in the component
const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};

// My project uses styled-components.
// Nothing here is styled-components-specific,
// however. It's just the tool I was already
// using.
const Wrapper = styled.div\`
  position: relative;
  width: min-content;
\`;

const Button = styled(UnstyledButton)\`
  position: relative;
  z-index: 3;
  padding: 8px;
  border-radius: 50%;
\`;

const IconWrapper = styled(animated.span)\`
  display: block;

  svg {
    display: block;
    stroke: var(--color-text) !important;
    fill: var(--color-background) !important;
  }
\`;

const Circle = styled(animated.div)\`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 50%;
  background: hsl(50deg, 100%, 48%);
\`;

export default CircleDemo;
`
      )
    ),
    mdx('h1', null, 'Troubleshooting'),
    mdx(
      'p',
      null,
      "If you try to use this effect in your project, and it doesn't work, this section might help you diagnose the issue! If your issue isn't listed, feel free to reach out ",
      mdx(
        'a',
        e({ parentName: 'p' }, { href: 'https://twitter.com/JoshWComeau' }),
        'on Twitter'
      ),
      '.'
    ),
    mdx('h2', null, 'Nothing happens'),
    mdx(
      'p',
      null,
      "If you don't see any motion, and no errors are reported, it's likely that you forgot to use ",
      mdx('inlineCode', { parentName: 'p' }, 'animated'),
      '! I still make this mistake frequently.'
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-jsx' }),
        `// Broken example:
function Thing() {
  const [style, trigger] = useBoop({ x: 2 });

  return (
    <button style={style} onMouseEnter={trigger}>
      Hello World
    </button>
  );
}

// Fixed!
import { animated } from 'react-spring';

function Thing() {
  const [style, trigger] = useBoop({ x: 2 });

  return (
    <animated.button style={style} onMouseEnter={trigger}>
      Hello World
    </animated.button>
  );
}
`
      )
    ),
    mdx(
      TwitterCTA,
      { mdxType: 'TwitterCTA' },
      mdx(
        'p',
        null,
        'This tutorial took about ',
        mdx(Em, { mdxType: 'Em' }, '20 hours'),
        " to create. If you found it helpful, I'd really appreciate if you shared it with your network on Twitter! \u{1F64F}"
      )
    )
  );
}
MDXContent.isMDXComponent = !0;
