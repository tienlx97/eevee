/* eslint-disable  */
const m = Object.defineProperty;
const d = Object.defineProperties;
const u = Object.getOwnPropertyDescriptors;
const o = Object.getOwnPropertySymbols;
const s = Object.prototype.hasOwnProperty;
const r = Object.prototype.propertyIsEnumerable;
const l = (t, i, a) => (i in t ? m(t, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[i] = a));
const e = (t, i) => {
  for (var a in i || (i = {})) {
    s.call(i, a) && l(t, a, i[a]);
  }
  if (o) {
    for (var a of o(i)) {
      r.call(i, a) && l(t, a, i[a]);
    }
  }
  return t;
};
const p = (t, i) => d(t, u(i));
const h = (t, i) => {
  const a = {};
  for (var n in t) {
    s.call(t, n) && i.indexOf(n) < 0 && (a[n] = t[n]);
  }
  if (t != null && o) {
    for (var n of o(t)) {
      i.indexOf(n) < 0 && r.call(t, n) && (a[n] = t[n]);
    }
  }
  return a;
};
const makeShortcode = t =>
  function (a) {
    return (
      console.warn('Component ' + t + ' was not imported, exported, or provided by MDXProvider as global scope'),
      mdx('div', e({}, a))
    );
  };
const Sidenote = makeShortcode('Sidenote');
const SideBySide = makeShortcode('SideBySide');
const Spacer = makeShortcode('Spacer');
const EmDemo = makeShortcode('EmDemo');
const Playground = makeShortcode('Playground');
const Asterisk = makeShortcode('Asterisk');
const RemDemo = makeShortcode('RemDemo');
const VideoGif = makeShortcode('VideoGif');
const PxRemComparisonDemo = makeShortcode('PxRemComparisonDemo');
const RemPaddingDemo = makeShortcode('RemPaddingDemo');
const ImageCompare = makeShortcode('ImageCompare');
const VerticalMarginsDemo = makeShortcode('VerticalMarginsDemo');
const ButtonWidthDemo = makeShortcode('ButtonWidthDemo');
const layoutProps = {};
const MDXLayout = 'wrapper';
function MDXContent(a) {
  const n = a;
  const { components: t } = n;
  const i = h(n, ['components']);
  return mdx(
    MDXLayout,
    p(e(e({}, layoutProps), i), { components: t, mdxType: 'MDXLayout' }),
    mdx(
      'blockquote',
      {
        style: {
          color: 'var(--color-gray-700)',
          fontSize: '1.25rem',
          fontWeight: 'var(--font-weight-medium)',
          marginTop: '3rem',
          marginBottom: '1.5rem',
          padding: 0,
        },
      },
      '\u201CShould I use pixels or ems/rems?!\u201D',
    ),
    mdx(
      'p',
      null,
      'This is a question I hear a lot. Often with a dollop of anxiety or frustration behind the words. \u{1F605}',
    ),
    mdx(
      'p',
      null,
      "It's an emotionally-charged question because there are a ",
      mdx('em', { parentName: 'p' }, 'lot'),
      " of conflicting opinions out there, and it can be overwhelming. Maybe you've heard that rems are better for accessibility. Or maybe you've heard that the problem is fixed and pixels are fine?",
    ),
    mdx(
      'p',
      null,
      'The truth is, if you want to build the most-accessible product possible, ',
      mdx('strong', { parentName: 'p' }, 'you need to use both pixels ', mdx('i', null, 'and'), ' ems/rems.'),
      " It's not an either/or situation. There are circumstances where rems are more accessible, and other circumstances where ",
      mdx('i', null, 'pixels'),
      ' are more accessible.',
    ),
    mdx('p', null, "So, here's what we're going to do in this tutorial:"),
    mdx(
      'ol',
      null,
      mdx(
        'li',
        { parentName: 'ol' },
        "We'll briefly cover how each unit works, to make sure we're all building on the same solid foundation.",
      ),
      mdx(
        'li',
        { parentName: 'ol' },
        "We'll look at what the accessibility considerations are, and how each unit can affect these considerations.",
      ),
      mdx(
        'li',
        { parentName: 'ol' },
        "We'll build a mental model we can use to help us decide which unit to use in ",
        mdx('i', null, 'any'),
        ' scenario.',
      ),
      mdx('li', { parentName: 'ol' }, "I'll share my favourite tips and tricks for converting between units."),
    ),
    mdx(
      'p',
      null,
      "By the end, you'll be able to ",
      mdx('em', { parentName: 'p' }, 'use your intuition'),
      ' to be able to figure out which unit to use in any scenario. \u{1F604}',
    ),
    mdx('h1', null, 'Unit summaries'),
    mdx('h2', null, 'Pixels'),
    mdx(
      'p',
      null,
      'The most popular unit for anything size-related is the ',
      mdx('inlineCode', { parentName: 'p' }, 'px'),
      ' unit, short for \u201Cpixel\u201D:',
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `.box {
  width: 1000px;
  margin-top: 32px;
  padding: 8px;
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      'In theory, ',
      mdx('inlineCode', { parentName: 'p' }, '1px'),
      ` is equal to a single dot in a computer monitor or phone screen. They're the least-abstract unit we have in CSS, the closest "to the metal". As a result, they tend to feel pretty intuitive.`,
    ),
    mdx(
      Sidenote,
      { title: 'Hardware vs. software pixels', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'So, the ',
        mdx('inlineCode', { parentName: 'p' }, 'px'),
        " unit is a bit of a lie. It doesn't ",
        mdx('i', null, 'actually'),
        ' map neatly onto hardware pixels.',
      ),
      mdx(
        'p',
        null,
        "If you look at a modern display under a microscope, you'll realize that they aren't made up of crisp little R/G/B rectangles anymore. Here are close-up shots of the screens on the Apple Watch and Apple iPhone:",
      ),
      mdx(
        SideBySide,
        { style: { marginBottom: '1rem' }, mdxType: 'SideBySide' },
        mdx('img', { src: '/images/pixels-and-accessibility/pixel-closeup-apple-watch.jpg' }),
        mdx('img', { src: '/images/pixels-and-accessibility/pixel-closeup-iphone.jpg' }),
      ),
      mdx(
        'p',
        { style: { textAlign: 'center' } },
        '(Sources: ',
        mdx('a', { href: 'https://9to5mac.com/2015/07/07/apple-watch-display-pixels/' }, 'Apple Watch'),
        ' and ',
        mdx('a', { href: 'https://www.displaymate.com/Diamond_45s.html' }, 'iPhone'),
        '.)',
      ),
      mdx(Spacer, { size: 32, mdxType: 'Spacer' }),
      mdx(
        'p',
        null,
        "Even before manufacturers started getting creative with pixel grids, there was still a distinction between the physical pixels in a screen and the software pixels we write in CSS. Every time a user changes their screen's resolution or zooms in, they're changing how software pixels map onto hardware pixels.",
      ),
      mdx(
        'p',
        null,
        'That said, none of this should really affect how we feel about the ',
        mdx('inlineCode', { parentName: 'p' }, 'px'),
        " unit. It's still the most concrete unit we have!",
      ),
    ),
    mdx('h2', null, 'Ems'),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      " unit is an interesting fellow. It's a ",
      mdx('em', { parentName: 'p' }, 'relative'),
      " unit, based on the element's calculated font size.",
    ),
    mdx('p', null, 'Fiddle with these sliders to see what I mean:'),
    mdx(EmDemo, { mdxType: 'EmDemo' }),
    mdx(
      'p',
      null,
      'Essentially, ',
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      " is a ratio. If our paragraph has a bottom margin of 1.5em, we're saying that it should be 1.5x the font size. This allows us to \u201Canchor\u201D one value to another, so that they scale proportionally.",
    ),
    mdx(
      'p',
      null,
      "Here's a silly example. Each word in the following sentence uses a smaller ",
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      " value, giving the impression of a sentence fading into the distance. Try tweaking the paragraph's font-size, and notice how everything \u201Czooms in\u201D:",
    ),
    mdx(Playground, {
      id: 'ems-pt2',
      html: `
<style>
  p {
    /* Change me! */
    font-size: 24px;
  }
</style>

<p>
  <span style="font-size: 1em">
    This
  </span>
  <span style="font-size: 0.8em">
    sentence
  </span>
  <span style="font-size: 0.64em">
    gets
  </span>
  <span style="font-size: 0.5em">
    quieter
  </span>
  <span style="font-size: 0.4em">
    and
  </span>
  <span style="font-size: 0.32em">
    quieter
  </span>
</p>`,
      mdxType: 'Playground',
    }),
    mdx(
      Sidenote,
      { type: 'warning', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        mdx('strong', { parentName: 'p' }, 'Note:'),
        ' To make it easier to understand how the ',
        mdx('inlineCode', { parentName: 'p' }, 'em'),
        " unit works, we're using pixel-based font sizes here. As we'll learn shortly, however, this is a bad idea. Please don't do this in real applications!",
      ),
    ),
    mdx('h2', null, 'Rems'),
    mdx(
      'p',
      null,
      "It's old news now, but there was a time when the ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' unit was a shiny new addition to the CSS language.',
    ),
    mdx(
      'p',
      null,
      "It was introduced because there's a common frustrating issue with the ",
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      ' unit: ',
      mdx('strong', { parentName: 'p' }, 'it compounds.'),
    ),
    mdx('p', null, 'For example, consider the following snippet:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-html' }),
        `<style>
  main {
    font-size: 1.125em;
  }
  article {
    font-size: 0.9em;
  }
  p.intro {
    font-size: 1.25em;
  }
</style>

<main>
  <article>
    <p class="intro">
      What size is this text?
    </p>
  </article>
</main>
`,
      ),
    ),
    mdx(
      'p',
      null,
      'How large, in pixels, is that ',
      mdx('inlineCode', { parentName: 'p' }, '.intro'),
      ' paragraph font?',
    ),
    mdx(
      'p',
      null,
      'To figure it out, we have to multiply each ratio. The root font size is 16px by default, and so the equation is ',
      mdx('inlineCode', { parentName: 'p' }, '16 \xD7 1.125 \xD7 0.9 \xD7 1.25'),
      '. The answer is 20.25 pixels.',
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'What? Why??'),
      ' This happens because font size is ',
      mdx('em', { parentName: 'p' }, 'inheritable'),
      '. The paragraph has a font size of ',
      mdx('inlineCode', { parentName: 'p' }, '1.25em'),
      ', which means \u201C1.25x the current font size\u201D. But what ',
      mdx('i', null, 'is'),
      ' the current font size? Well, it gets inherited from the parent: ',
      mdx('inlineCode', { parentName: 'p' }, '0.9em'),
      ". And so it's 1.25x the parent, which is 0.9x ",
      mdx('em', { parentName: 'p' }, 'its'),
      ' parent, which is 1.125x ',
      mdx('em', { parentName: 'p' }, 'its'),
      ' parent.',
    ),
    mdx(
      'p',
      null,
      'Essentially, we need to multiply every ',
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      ' value in the tree until we either hit a "fixed" value (using pixels), or we make it all the way to the top of the tree. This is exactly as gnarly as it sounds. \u{1F62C}',
    ),
    mdx(
      'p',
      null,
      'To solve this problem, the CSS language designers created the ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' unit. It stands for \u201CRoot EM\u201D.',
    ),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' unit is like the ',
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      " unit, except it's always a multiple of the font size on the ",
      mdx('em', { parentName: 'p' }, 'root node'),
      ', the ',
      mdx('inlineCode', { parentName: 'p' }, '<html>'),
      ' element. It ignores any inherited font sizes, and always calculates based on the top-level node.',
    ),
    mdx(
      'p',
      null,
      'Documents have a default font size of 16px, which means that ',
      mdx('inlineCode', { parentName: 'p' }, '1rem'),
      ' has a \u201Cnative\u201D value of 16px.',
      mdx(Asterisk, {
        content: 'This value, however, is user-configurable! More on this shortly',
        mdxType: 'Asterisk',
      }),
    ),
    mdx(
      'p',
      null,
      'We can re-define the value of ',
      mdx('inlineCode', { parentName: 'p' }, '1rem'),
      ' by changing the ',
      mdx('inlineCode', { parentName: 'p' }, 'font-size'),
      ' on the root node:',
    ),
    mdx(RemDemo, { mdxType: 'RemDemo' }),
    mdx('p', null, 'We ', mdx('em', { parentName: 'p' }, 'can'), " do this, but we shouldn't."),
    mdx('p', null, 'In order to understand why, we need to talk about accessibility.'),
    mdx('h1', null, 'Accessibility considerations'),
    mdx(
      'p',
      null,
      'The main accessibility consideration when it comes to pixel-vs-em/rem is ',
      mdx('em', { parentName: 'p' }, 'vision'),
      '. We want people with limited vision to be able to comfortably read the sentences and paragraphs on our websites and web applications.',
    ),
    mdx('p', null, 'There are a few ways that folks with limited vision can increase the size of text.'),
    mdx(
      'p',
      null,
      "One method is to use the browser's zoom functionality. The standard keyboard shortcut for this is ",
      mdx('inlineCode', { parentName: 'p' }, '\u2318'),
      ' + ',
      mdx('inlineCode', { parentName: 'p' }, '+'),
      ' on MacOS, ',
      mdx('inlineCode', { parentName: 'p' }, 'ctrl'),
      ' + ',
      mdx('inlineCode', { parentName: 'p' }, '+'),
      ' on Windows/Linux.',
    ),
    mdx(VideoGif, {
      noBorder: !0,
      src: 'https://storage.googleapis.com/joshwcomeau/chrome-zoom.mp4',
      maxWidth: 1920 / 2,
      mdxType: 'VideoGif',
    }),
    mdx('p', null, "I'll call this method ", mdx('em', { parentName: 'p' }, 'zooming'), ' in this tutorial.'),
    mdx(
      'p',
      null,
      'The Web Content Accessibility Guidelines (WCAG) state that in order to be accessible, a site should be ',
      mdx('a', e({ parentName: 'p' }, { href: 'https://www.w3.org/TR/WCAG21/#resize-text' }), 'usable at 200% zoom'),
      ". I've heard from accessibility advocates that this number is really a minimum, and that many folks with vision disorders often crank much higher than that.",
    ),
    mdx(
      'p',
      null,
      "Finally, there's another method, one that fewer developers know about. We can also increase the default font size in our browser settings:",
    ),
    mdx(VideoGif, {
      noBorder: !0,
      src: 'https://storage.googleapis.com/joshwcomeau/chrome-font-scaling.mp4',
      maxWidth: 1920 / 2,
      mdxType: 'VideoGif',
    }),
    mdx('p', null, "I'll call this method ", mdx('em', { parentName: 'p' }, 'font scaling'), ' in this tutorial.'),
    mdx(
      'p',
      null,
      'Font scaling works by re-defining the \u201Cbaseline\u201D font size, the default font size that all relative units will be based on (rem, em, %).',
    ),
    mdx(
      'p',
      null,
      'Remember earlier, when we said that ',
      mdx('inlineCode', { parentName: 'p' }, '1rem'),
      " was equal to 16px? That's only true if the user hasn't touched their default font size! If they boost their default font size to 32px, each rem will now be ",
      mdx('i', null, '32px'),
      ' instead of 16.',
    ),
    mdx(
      'p',
      null,
      'Essentially, you can think of font scaling as ',
      mdx('em', { parentName: 'p' }, 'changing the definition of 1 rem.'),
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, "Here's where we hit our first accessibility snag."),
      " When we use a pixel value for a font-size on the page, it will no longer be affected by the user's chosen default font size.",
    ),
    mdx(PxRemComparisonDemo, { mdxType: 'PxRemComparisonDemo' }),
    mdx(
      'p',
      null,
      'This is why we should use relative units like ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'em'),
      ' for text size. It gives the user the ability to redefine their value, to suit their needs.',
    ),
    mdx(
      'p',
      null,
      "Now, the picture isn't as bleak as it used to be, thanks to ",
      mdx('em', { parentName: 'p' }, 'browser zooming'),
      '.',
    ),
    mdx(
      'p',
      null,
      'When the user zooms in or out, ',
      mdx('em', { parentName: 'p' }, 'everything'),
      ' gets bigger. It essentially applies a multiple to every unit, including pixels. It affects everything except viewport units (like ',
      mdx('inlineCode', { parentName: 'p' }, 'vw'),
      ' and ',
      mdx('inlineCode', { parentName: 'p' }, 'vh'),
      '). This has been the case for many years now, across all major browsers.',
    ),
    mdx(
      'p',
      null,
      "So, if users can always zoom to increase their font size, do we really need to worry about supporting font scaling as well? Isn't one option good enough?",
    ),
    mdx(
      'p',
      null,
      "The problem is that zoom is really intended to be used on a site-by-site basis. Someone might have to manually tinker and fuss with the zoom every time they visit a new site. Wouldn't it be better if they could set a baseline font size, one that is large enough for them to read comfortably, and have that size be universally respected?",
    ),
    mdx(
      'p',
      null,
      "(Let's also keep in mind that not everyone can trigger a keyboard shortcut easily. A few years ago, I suffered a nerve injury that left me unable to use a keyboard. I interacted with the computer ",
      mdx('a', e({ parentName: 'p' }, { href: '/blog/hands-free-coding/' }), 'using dictation and eye-tracking'),
      '. Suddenly, each \u201Ckeystroke\u201D became a lot more taxing!)',
    ),
    mdx(
      'p',
      null,
      'As a general rule, we should give the user as much control as possible, and we should ',
      mdx('em', { parentName: 'p' }, 'never'),
      " disable or block their settings from working. For this reason, it's very important to use a relative unit like ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' for typography.',
    ),
    mdx('h1', null, 'Strategic unit deployment'),
    mdx(
      'p',
      null,
      'Alright, so you might be thinking: if the ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' unit is respected by both zooming ',
      mdx('em', { parentName: 'p' }, 'and'),
      " font-scaling, shouldn't I always use ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' values? Why would I ever use pixels?',
    ),
    mdx(
      'p',
      null,
      "Well, let's see what happens when we use ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' values for padding:',
    ),
    mdx(RemPaddingDemo, { mdxType: 'RemPaddingDemo' }),
    mdx(
      'p',
      null,
      'Remember that ',
      mdx(
        'strong',
        { parentName: 'p' },
        mdx('inlineCode', { parentName: 'strong' }, 'rem'),
        " values scale with the user's default font size.",
      ),
      ' This is a good thing when it comes to typography. Is it a good thing when it comes to other stuff, though? Do I actually want ',
      mdx('em', { parentName: 'p' }, 'everything'),
      ' to scale with font size?',
    ),
    mdx(
      'p',
      null,
      "There's an implicit trade-off when it comes to text size. The larger the text is, the fewer characters can fit on each line. When the user cranks up the text by 250%, we can only fit a few words per line.",
    ),
    mdx(
      'p',
      null,
      'When we use ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' values for horizontal padding, though ',
      mdx('strong', { parentName: 'p' }, 'we amplify this negative side-effect!'),
      " We're reducing the amount of usable space, further restricting how many words can fit on each line.",
    ),
    mdx(
      'p',
      null,
      'This is bad',
      mdx('br', null),
      `
because`,
      mdx('br', null),
      `
paragraphs`,
      mdx('br', null),
      `
like this one`,
      mdx('br', null),
      `
with only a`,
      mdx('br', null),
      `
few words per`,
      mdx('br', null),
      `
line are`,
      mdx('br', null),
      `
unpleasant to`,
      mdx('br', null),
      `
read.`,
    ),
    mdx(
      'p',
      null,
      "Similarly, how about border widths? It doesn't really make sense for a border to become thicker as the user scales up their preferred text size, does it?",
    ),
    mdx(
      'p',
      null,
      'This is why we want to use these units ',
      mdx('em', { parentName: 'p' }, 'strategically'),
      ". When picking between pixels and rems, here's the question you should be asking yourself:",
    ),
    mdx(
      'blockquote',
      { style: { color: 'var(--color-gray-700)', fontSize: '1.4rem', marginTop: '3rem', marginBottom: '3rem' } },
      "\u201CShould this value scale up as the user increases their browser's default font size?\u201D",
    ),
    mdx(
      'p',
      null,
      'This question is the root of the mental model I use. If the value should increase with the default font size, I use ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      '. Otherwise, I use ',
      mdx('inlineCode', { parentName: 'p' }, 'px'),
      '.',
    ),
    mdx(
      'p',
      null,
      'That said, the ',
      mdx('i', null, 'answer'),
      " to this question isn't always obvious. Let's look at some examples.",
    ),
    mdx('h2', null, 'Media queries'),
    mdx('p', null, 'Should we use pixels or rems for our media query values?'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `/* Should we do this: */
@media (min-width: 800px) {
  }

/* \u2026Or this: */
@media (min-width: 50rem) {
}
`,
      ),
    ),
    mdx('p', null, "It's probably not obvious what the distinction is here, so let's break it down."),
    mdx(
      'p',
      null,
      'Suppose a user sets their default text size to 32px, double the standard text size. This means that 50rem will now be equal to ',
      mdx('i', null, '1600px'),
      ' instead of 800px.',
    ),
    mdx(
      'p',
      null,
      'By sliding the breakpoint up like this, it means that the user will see the ',
      mdx('i', null, 'mobile'),
      " layout until their window is at least 1600px wide. If they're on a laptop, it's very likely they'll see the mobile layout instead of the desktop layout.",
    ),
    mdx(
      'p',
      null,
      "At first, I thought this seemed like a bad thing. They're not actually a mobile user, so why would we show them the mobile layout??",
    ),
    mdx(
      'p',
      null,
      "I've come to realize, however, that ",
      mdx('strong', { parentName: 'p' }, 'we usually ', mdx('i', null, 'do'), ' want to use rems for media queries.'),
    ),
    mdx('p', null, "Let's look at a real-world example."),
    mdx('p', null, 'On my course platform, I have a left-hand navigation list, with the content shown on the right:'),
    mdx('img', {
      alt: 'Screenshot of a lesson in a course platform, with left-hand navigation',
      src: '/images/pixels-and-accessibility/cp-desktop.png',
      width: 2542 / 2,
      height: 1448 / 2,
    }),
    mdx(
      'p',
      null,
      'On smaller screens, I want to maximize the amount of space for the content, and so the navigation becomes toggleable:',
    ),
    mdx(VideoGif, {
      noBorder: !0,
      src: '/images/pixels-and-accessibility/cp-tablet.mp4',
      maxWidth: 1638 / 2,
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "Let's see what happens when the user visits with a 32px default font size, using both pixels and rem media queries:",
    ),
    mdx(ImageCompare, {
      maxImageWidth: 600,
      firstTitle: 'Pixel Media Query',
      secondTitle: 'Rem Media Query',
      firstChild: mdx('img', {
        type: 'native',
        alt: 'The desktop layout is used, with HUGE text, and not much space for it',
        src: '/images/pixels-and-accessibility/media-query-in-px.png',
        style: { width: '100%', display: 'block' },
      }),
      secondChild: mdx('img', {
        type: 'native',
        alt: 'The mobile layout is used, with HUGE text, and plenty of space for it',
        src: '/images/pixels-and-accessibility/media-query-in-rem.png',
        style: { width: '100%', display: 'block' },
      }),
      mdxType: 'ImageCompare',
    }),
    mdx(
      'p',
      null,
      'As we increase the size of the text, the left-hand navigation gets wider and wider (because it uses a rem-based width). As a result, the main content area gets squeezed smaller and smaller.',
    ),
    mdx(
      'p',
      null,
      'When we use a rem-based media query, however, we drop back down to the \u201Cmobile\u201D layout. As a result, the content becomes much more readable, and the experience is much improved.',
    ),
    mdx(
      'p',
      null,
      "We're so used to thinking of media queries in terms of mobile/tablet/desktop, but I think it's more helpful to think in terms of ",
      mdx('strong', { parentName: 'p' }, 'available space.'),
    ),
    mdx(
      'p',
      null,
      'A mobile user has less available space than a desktop user, and so we design layouts that are optimized for that amount of space. Similarly, when someone cranks up their default font size, they ',
      mdx('i', null, 'reduce the amount of available space,'),
      ' and so they should probably receive the same optimizations.',
    ),
    mdx('h2', null, 'Vertical margins'),
    mdx('p', null, "Let's look at another scenario. Vertical margins:"),
    mdx(VerticalMarginsDemo, { mdxType: 'VerticalMarginsDemo' }),
    mdx(
      'p',
      null,
      "Vertical margins on text (assuming we're working in a horizontally-written language like English) are typically used to improve its readability. We add extra space between paragraphs so that we can quickly tell where one paragraph ends and the next one begins.",
      mdx(Asterisk, {
        content:
          'Interestingly, the web is somewhat unique in terms of paragraph spacing. Print media, like books, indent the first line of each new paragraph, without adding any additional vertical space between paragraphs.',
        mdxType: 'Asterisk',
      }),
    ),
    mdx(
      'p',
      null,
      "This space has a \u201Cfunctional\u201D purpose when it comes to text. We aren't using it aesthetically.",
    ),
    mdx(
      'p',
      null,
      "For these reasons, I think it does make sense to scale these margins with the user's chosen root font size.",
    ),
    mdx(
      Sidenote,
      { title: 'A rare opportunity for the \u201Cem\u201D unit', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'When I need a relative unit, I almost always reach for ',
        mdx('inlineCode', { parentName: 'p' }, 'rem'),
        ". It's much simpler and more predictable than ",
        mdx('inlineCode', { parentName: 'p' }, 'em'),
        ', for the \u201Ccompounding\u201D issues ',
        mdx('a', e({ parentName: 'p' }, { href: '#rems' }), 'discussed earlier'),
        '.',
      ),
      mdx(
        'p',
        null,
        'That said, the ',
        mdx('inlineCode', { parentName: 'p' }, 'em'),
        ' unit works particularly well when it comes to margins on headings and paragraphs.',
      ),
      mdx(
        'expanded',
        null,
        mdx('p', null, "As an example, here's how I might style the headings using rems:"),
        mdx(
          'pre',
          null,
          mdx(
            'code',
            e(
              { parentName: 'pre' },
              { className: 'language-css', metastring: 'lessBottomMargin', lessBottomMargin: !0 },
            ),
            `h1 {
  font-size: 3rem
  margin-top: 6rem;
  margin-bottom: 1.5rem;
}
h2 {
  font-size: 2rem
  margin-top: 4rem;
  margin-bottom: 1rem;
}
h3 {
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 0.75rem;
}
`,
          ),
        ),
        mdx(
          'p',
          null,
          'Because each heading level has its own font size, we need to calculate unique margin values for each one.',
        ),
        mdx(
          'p',
          null,
          "Here's the exact same UI, described using ",
          mdx('inlineCode', { parentName: 'p' }, 'em'),
          ' instead:',
        ),
        mdx(
          'pre',
          null,
          mdx(
            'code',
            e(
              { parentName: 'pre' },
              { className: 'language-css', metastring: 'lessBottomMargin', lessBottomMargin: !0 },
            ),
            `h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}

h1, h2, h3 {
  margin-top: 2em;
  margin-bottom: 0.5em;
}
`,
          ),
        ),
        mdx(
          'p',
          null,
          'Each heading level has a unique font size, but with ',
          mdx('inlineCode', { parentName: 'p' }, 'em'),
          ', they can share their margin declarations. This is because ',
          mdx('inlineCode', { parentName: 'p' }, 'em'),
          " is calculated based on the current element's font size.",
        ),
        mdx(
          'p',
          null,
          "In other words, we're saying that each heading level should have \u201C2x\u201D top margin, and \u201C0.5x\u201D bottom margin. Those ratios are applied to the heading's font size.",
        ),
        mdx(
          'p',
          null,
          'Ultimately, both approaches are 100% valid, and equally accessible. I just wanted to share this neat little ',
          mdx('inlineCode', { parentName: 'p' }, 'em'),
          ' trick. \u{1F604}',
        ),
      ),
    ),
    mdx('h2', null, 'Widths and heights'),
    mdx('p', null, "Alright, let's consider one more scenario. Here we have a button with a fixed width:"),
    mdx(ButtonWidthDemo, { mdxType: 'ButtonWidthDemo' }),
    mdx(
      'p',
      null,
      "So, we know that the button's ",
      mdx('inlineCode', { parentName: 'p' }, 'font-size'),
      ' should be set in rems\u2026 but what about its ',
      mdx('inlineCode', { parentName: 'p' }, 'width'),
      '?',
    ),
    mdx('p', null, "There's a really interesting trade-off here:"),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        'If we set the width to be ',
        mdx('inlineCode', { parentName: 'li' }, '240px'),
        ", the button won't grow with font size, leading to line-wrapping and a taller button.",
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'If we set the width to be ',
        mdx('inlineCode', { parentName: 'li' }, '15rem'),
        ', the button will grow wider along with the font size.',
      ),
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, 'Which approach is best?'),
      ' Well, it depends on the circumstances!',
    ),
    mdx(
      'p',
      null,
      "In most cases, I think it makes more sense to use rems. This preserves the button's proportions, its aesthetics. And it reduces the risk of an overflow, if the button has a particularly long word.",
    ),
    mdx(
      'p',
      null,
      'In some cases, though, pixels might be the better option. Maybe if you have a very specific layout in mind, and vertical space is more plentiful than horizontal space.',
    ),
    mdx(
      Sidenote,
      { title: 'Constraints', type: 'warning', mdxType: 'Sidenote' },
      mdx(
        'p',
        null,
        'In general, we need to be ',
        mdx('em', { parentName: 'p' }, 'really careful'),
        ' when setting fixed widths and heights.',
      ),
      mdx(
        'p',
        null,
        'In the example above, setting ',
        mdx('inlineCode', { parentName: 'p' }, 'width: 15rem'),
        ' will, in many cases, break mobile layouts, since it may produce a value too large for its container when the user cranks up their default font size!',
      ),
      mdx('p', null, 'We can often mitigate this by clamping it to a maximum of 100%:'),
      mdx(
        'pre',
        null,
        mdx(
          'code',
          e({ parentName: 'pre' }, { className: 'language-css', metastring: 'lessBottomMargin', lessBottomMargin: !0 }),
          `.button {
  max-width: 100%;
}
`,
        ),
      ),
      mdx(
        'p',
        null,
        'Similarly, when it comes to heights, we often want to use ',
        mdx('inlineCode', { parentName: 'p' }, 'min-height'),
        ' instead of ',
        mdx('inlineCode', { parentName: 'p' }, 'height'),
        '. This allows the container to grow as tall as it needs, in order to contain its children. This becomes important when a user scales up their font size, since the text will wind up wrapping onto more lines.',
      ),
    ),
    mdx('h1', null, 'Test your intuition'),
    mdx(
      'p',
      null,
      "Alright, so we've learned that ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      " values should be used when we want to scale a value with the user's default font size.",
    ),
    mdx('p', null, "What if it isn't obvious which option is best, though? Like with the button width?"),
    mdx(
      'p',
      null,
      "The best thing to do in these cases is to test it. Change your browser's default font size to 32px or 48px, and see how your app feels. Try using pixels, and then try using rems. Which option produces the best user experience, the most readable content?",
    ),
    mdx(
      'p',
      null,
      "Over time, you'll develop a stronger and stronger intuition, as you see for yourself what to do in specific circumstances.",
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, "Not sure how to change your browser's default font size?"),
      " Here's the documentation for the most commonly-used browsers:",
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
            { href: 'https://support.google.com/chrome/answer/96810?hl=en&co=GENIE.Platform%3DDesktop' },
          ),
          'Chrome',
        ),
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx(
          'a',
          e(
            { parentName: 'li' },
            { href: 'https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use' },
          ),
          'Firefox',
        ),
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx('a', e({ parentName: 'li' }, { href: 'https://support.apple.com/en-gb/HT207209' }), 'Safari'),
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        mdx(
          'a',
          e(
            { parentName: 'li' },
            {
              href: 'https://support.microsoft.com/en-us/microsoft-edge/increase-default-text-size-in-microsoft-edge-c62f80af-381d-0716-25a3-c4856dd3806c',
            },
          ),
          'Edge',
        ),
      ),
    ),
    mdx('p', null, "If your browser isn't listed here, a quick Google search should turn it up!"),
    mdx('h1', null, 'Quick tricks vs. mental models'),
    mdx(
      'p',
      null,
      'I have a philosophy when it comes to learning: ',
      mdx(
        'strong',
        { parentName: 'p' },
        "It's better to build an intuition than it is to rely on rote practice and memorization.",
      ),
    ),
    mdx(
      'p',
      null,
      'This blog post ',
      mdx('i', null, 'could'),
      ' have been a quick list of rules: \u201CUse pixels for X, use rems for Y\u201D. But how useful would it actually have been?',
    ),
    mdx(
      'p',
      null,
      'The truth is, the real world is messy and complicated. No set of rules can possibly be comprehensive enough to cover every possible scenario. Even after writing CSS for 15 years, I still find myself facing novel layout challenges all the time!',
    ),
    mdx(
      'p',
      null,
      mdx('em', { parentName: 'p' }, "When we focus on building an intuition, we don't need to memorize rules."),
      " We can rely on our mental model to come up with the right answer. It's wayyy more practical.",
    ),
    mdx(
      'p',
      null,
      'And yet, most of us learn from \u201Cquick tricks\u201D. We pick up an interesting nugget on Twitter. We memorize a lil\u2019 snippet to center a div or apply a flexible grid. And, ',
      mdx('em', { parentName: 'p' }, 'inevitably,'),
      " we hit snags where the snippet doesn't work as we expect, and we have no idea why.",
    ),
    mdx(
      'p',
      null,
      'I think this is why so many developers dislike writing CSS. We have a patchy mental model, and those holes make the language feel brittle and unpredictable, like a house of cards that is always on the verge of collapse.',
    ),
    mdx(
      'p',
      null,
      'When we focus on building an intuition, on learning how CSS ',
      mdx('em', { parentName: 'p' }, 'really'),
      " works, the language becomes a joy to use. I used to find CSS frustrating, but now, it's one of my favourite parts of web development. I ",
      mdx('em', { parentName: 'p' }, 'love'),
      ' writing CSS.',
    ),
    mdx(
      'p',
      null,
      "I wanted to share this joy, and so I quit my job and spent a year building a comprehensive self-paced online course. It's called ",
      mdx('a', e({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }), 'CSS for JavaScript Developers'),
      '.',
    ),
    mdx(
      'p',
      null,
      "This course takes the approach we've used in this tutorial and applies it to ",
      mdx('strong', { parentName: 'p' }, 'the entire CSS language.'),
      ' Using interactive demos and live-editable code snippets, we explore how the language works, and how you can build an intuition you can use to implement ',
      mdx('em', { parentName: 'p' }, 'any'),
      ' layout. Not just the ones we cover explicitly.',
    ),
    mdx(
      'p',
      null,
      "I built a custom course platform from scratch, using the same technology stack as my blog. But it's so much more. It includes tons of bite-sized videos, exercises, real-world-inspired projects, and even a handful of mini-games. \u2728",
    ),
    mdx(
      'p',
      null,
      "It's specifically built for JavaScript developers, folks who use a component-based framework like React or Vue. In addition to core language concepts, we also explore things like how to build a component library from scratch.",
    ),
    mdx('p', null, "If you're sick of not understanding how CSS works, this course is for you. \u{1F496}"),
    mdx(
      'p',
      null,
      'Learn more here: ',
      mdx('a', e({ parentName: 'p' }, { href: 'https://css-for-js.dev' }), 'https://css-for-js.dev/'),
    ),
    mdx(
      'a',
      { href: 'https://css-for-js.dev/' },
      mdx('img', {
        src: '/images/css-for-js-banner.png',
        alt: 'Banner with the headline \u201CStop wrestling with CSS\u201D. Sub-heading: \u201CThe all-new interactive learning experiecne designed to help JavaScript developers become confident with CSS\u201D',
        width: 2076,
        height: 1066,
      }),
    ),
    mdx('h1', null, 'Bonus: Rem quality of life'),
    mdx(
      'p',
      null,
      "Alright, so as we've seen, there are plenty of cases where we need to use ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' values for best results.',
    ),
    mdx(
      'p',
      null,
      "Unfortunately, this unit can often be pretty frustrating to work with. It's not easy to do the conversion math in our heads. And we wind up with ",
      mdx('em', { parentName: 'p' }, 'a lot'),
      ' of decimals:',
    ),
    mdx(
      'ul',
      null,
      mdx('li', { parentName: 'ul' }, '14px \u2192 0.875rem'),
      mdx('li', { parentName: 'ul' }, '15px \u2192 0.9375rem'),
      mdx('li', { parentName: 'ul' }, mdx('strong', { parentName: 'li' }, '16px \u2192 1rem')),
      mdx('li', { parentName: 'ul' }, '17px \u2192 1.0625rem'),
      mdx('li', { parentName: 'ul' }, '18px \u2192 1.125rem'),
      mdx('li', { parentName: 'ul' }, '19px \u2192 1.1875rem'),
      mdx('li', { parentName: 'ul' }, '20px \u2192 1.25rem'),
      mdx('li', { parentName: 'ul' }, '21px \u2192 1.3125rem'),
    ),
    mdx(
      'p',
      null,
      "Before you go memorize this list, let's look at some of the things we can do to improve the experience of working with rems.",
    ),
    mdx('h2', null, 'The 62.5% trick'),
    mdx('p', null, "Let's start with one of the most common options I've seen shared online."),
    mdx('p', null, "Here's what it looks like:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `html {
  font-size: 62.5%;
}

p {
  /* Equivalent to 18px */
  font-size: 1.8rem;
}
h3 {
  /* Equivalent to 21px */
  font-size: 2.1rem;
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      "The idea is that we're scaling down the root font size so that each ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' unit is equal to 10px instead of 16px.',
    ),
    mdx(
      'p',
      null,
      'People like this solution because the math becomes way easier. To get the ',
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' equivalent of 18px, you move the decimal (1.8rem) instead of having to divide 18 by 16 (1.125rem).',
    ),
    mdx(
      'p',
      null,
      mdx('strong', { parentName: 'p' }, "But, honestly, I don't recommend this approach."),
      ' There are a couple of reasons.',
    ),
    mdx(
      'p',
      null,
      'First, It can break compatibility with third-party packages. If you use a tooltip library that uses rem-based font sizes, text in those tooltips is going to be 37.5% smaller than it should be! Similarly, it can break browser extensions the end user has.',
    ),
    mdx(
      'p',
      null,
      "There's a baseline assumption on the web that ",
      mdx('inlineCode', { parentName: 'p' }, '1rem'),
      " will produce readable text. I don't wanna mess with that assumption.",
    ),
    mdx(
      'p',
      null,
      "Also, there are significant migration challenges to this approach. There's no reasonable way to \u201Cincrementally adopt\u201D it",
      mdx(Asterisk, {
        content: mdx(
          React.Fragment,
          null,
          'Well, you ',
          mdx('em', null, 'could'),
          ", but then the definition of 1rem wouldn't be consistent across the site/app, which sounds like a nightmare",
        ),
        mdxType: 'Asterisk',
      }),
      ". You'll need to update every declaration that uses ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      " units across the app. Plus, you'll need to convince all your teammates that it's worth the trouble. Logistically, I'm not sure how realistic it is for most teams.",
    ),
    mdx('p', null, "Let's look at some alternative options."),
    mdx('h2', null, 'Calculated values'),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'calc'),
      ' CSS function can be used to translate pixel values to rems:',
    ),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `p {
  /* Produces 1.125rem. Equivalent to 18px */
  font-size: calc(18rem / 16);
}
h3 {
  /* Produces 1.3125rem. Equivalent to 21px */
  font-size: calc(21rem / 16);
}
h2 {
  /* Produces 1.5rem. Equivalent to 24px */
  font-size: calc(24rem / 16);
}
h1 {
  /* Produces 2rem. Equivalent to 32px */
  font-size: calc(32rem / 16);
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      '(Thanks to Twitter user ',
      mdx('a', e({ parentName: 'p' }, { href: 'https://twitter.com/cahnory/status/1527311858272587778' }), 'Cahnory'),
      ' for improving on my original idea!)',
    ),
    mdx(
      'p',
      null,
      'Pretty cool, right? We can do the math right there inside the CSS declaration, and ',
      mdx('inlineCode', { parentName: 'p' }, 'calc'),
      ' will spit out the correct answer.',
    ),
    mdx(
      'p',
      null,
      "This is a viable approach, but it's a bit of a mouthful. It's a lot of typing every time you want to use a ",
      mdx('inlineCode', { parentName: 'p' }, 'rem'),
      ' value.',
    ),
    mdx('p', null, "Let's look at one more approach."),
    mdx('h2', null, 'Leveraging CSS variables'),
    mdx('p', null, "This is my favourite option. Here's what it looks like:"),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `html {
  --14px: 0.875rem;
  --15px: 0.9375rem;
  --16px: 1rem;
  --17px: 1.0625rem;
  --18px: 1.125rem;
  --19px: 1.1875rem;
  --20px: 1.25rem;
  --21px: 1.3125rem;
}

h1 {
  font-size: var(--21px);
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      "We can do all the calculations once, and use CSS variables to store those options. When we need to use them, it's almost as easy as typing pixel values, but fully accessible! \u2728",
    ),
    mdx(
      'p',
      null,
      "It's a bit unconventional to start CSS variables with a number like this, but it's compliant with the spec, and appears to work across all major browsers.",
    ),
    mdx('p', null, 'If you use a design system with a spacing scale, we can use this same trick:'),
    mdx(
      'pre',
      null,
      mdx(
        'code',
        e({ parentName: 'pre' }, { className: 'language-css' }),
        `html {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.3125rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2.652rem;
  --font-size-4xl: 4rem;
}
`,
      ),
    ),
    mdx(
      'p',
      null,
      'CSS variables are absolutely delightful. We explore a bunch of cool things we can do with them in ',
      mdx('a', e({ parentName: 'p' }, { href: 'https://css-for-js.dev/' }), 'CSS for JavaScript Developers'),
      '!',
    ),
    mdx(
      'p',
      null,
      "Ultimately, all of these methods will work. I certainly have my preferences, but the important thing is the end user experience. As long as they can adjust the size of all text on the page, you're doing it right. \u{1F4AF}",
    ),
  );
}
MDXContent.isMDXComponent = !0;
