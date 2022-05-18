var d = Object.defineProperty,
  c = Object.defineProperties;
var m = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var h = (e, t, o) =>
    t in e
      ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o),
  n = (e, t) => {
    for (var o in t || (t = {})) s.call(t, o) && h(e, o, t[o]);
    if (a) for (var o of a(t)) r.call(t, o) && h(e, o, t[o]);
    return e;
  },
  l = (e, t) => c(e, m(t));
var p = (e, t) => {
  var o = {};
  for (var i in e) s.call(e, i) && t.indexOf(i) < 0 && (o[i] = e[i]);
  if (e != null && a)
    for (var i of a(e)) t.indexOf(i) < 0 && r.call(e, i) && (o[i] = e[i]);
  return o;
};
const makeShortcode = (e) =>
    function (o) {
      return (
        console.warn(
          'Component ' +
            e +
            ' was not imported, exported, or provided by MDXProvider as global scope'
        ),
        mdx('div', n({}, o))
      );
    },
  VideoGif = makeShortcode('VideoGif'),
  PostLink = makeShortcode('PostLink'),
  FoldingDemo = makeShortcode('FoldingDemo'),
  TheTrickDemo = makeShortcode('TheTrickDemo'),
  FoldTransformDemo = makeShortcode('FoldTransformDemo'),
  RenderWhenOnscreen = makeShortcode('RenderWhenOnscreen'),
  FoldPerspectiveDemo = makeShortcode('FoldPerspectiveDemo'),
  FoldOriginDemo = makeShortcode('FoldOriginDemo'),
  FoldCodeSnippet = makeShortcode('FoldCodeSnippet'),
  layoutProps = {},
  MDXLayout = 'wrapper';
function MDXContent(o) {
  var i = o,
    { components: e } = i,
    t = p(i, ['components']);
  return mdx(
    MDXLayout,
    l(n(n({}, layoutProps), t), { components: e, mdxType: 'MDXLayout' }),
    mdx(
      'p',
      null,
      "In my day-to-day life as a front-end developer, I generally treat CSS as a collection of 2D layers. Other than reordering them using z-index, I don't often ",
      mdx('em', { parentName: 'p' }, 'move'),
      ' things in 3D space.'
    ),
    mdx(
      'p',
      null,
      'And yet, for years now, browsers have bundled in a surprisingly capable 3D CSS engine! Someone even built an experimental first-person shooter prototype using it \u{1F62E}'
    ),
    mdx(VideoGif, {
      src: '/images/folding-the-dom/css-engine.mp4',
      caption: mdx(
        React.Fragment,
        null,
        'Believe it or not, this is just a collection of textured divs!',
        ' ',
        mdx(
          PostLink,
          {
            href: 'https://keithclark.co.uk/labs/css-fps/',
            mdxType: 'PostLink',
          },
          'View Live'
        )
      ),
      mdxType: 'VideoGif',
    }),
    mdx(
      'p',
      null,
      "Today I'd like to leverage that 3D engine to perform a neat trick: folding up an image."
    ),
    mdx(
      'p',
      null,
      "Here's what we'll be building. Check out how this ",
      mdx(
        'a',
        n(
          { parentName: 'p' },
          { href: 'https://unsplash.com/photos/2x6VHSRVqSA' }
        ),
        'beautiful neon photo'
      ),
      ' by Francois Hoang is revealed through a 3D fold animation:'
    ),
    mdx(FoldingDemo, { id: 'fold-intro', mdxType: 'FoldingDemo' }),
    mdx('p', null, 'This effect could be useful in a number of scenarios:'),
    mdx(
      'ul',
      null,
      mdx(
        'li',
        { parentName: 'ul' },
        "As a preloader for images. They unfold once they're ready, and the folded copy could use a much-lower-res base64-encoded version!"
      ),
      mdx(
        'li',
        { parentName: 'ul' },
        'As an on-mount animation when clicking to view an image, to add whimsical charm to an otherwise common feature.'
      ),
      mdx('li', { parentName: 'ul' }, 'For JS game development')
    ),
    mdx(
      'p',
      null,
      'This tutorial is React-specific, but the concepts can easily be ported to vanilla JS/CSS, as well as other front-end frameworks.'
    ),
    mdx('h1', null, 'The Trick'),
    mdx(
      'p',
      null,
      "Unfortunately, the DOM has no primitive for this; you can't actually fold a DOM node in two."
    ),
    mdx(
      'p',
      null,
      "Instead, we need to be sneaky; we'll use ",
      mdx('em', { parentName: 'p' }, 'two'),
      ' images, and set them up so that it appears like a single image.'
    ),
    mdx(
      'p',
      null,
      'Each image is set to take up 50% of the real height, and then the bottom image has its ',
      mdx('inlineCode', { parentName: 'p' }, 'background-position'),
      ' shifted up:'
    ),
    mdx(TheTrickDemo, { mdxType: 'TheTrickDemo' }),
    mdx(
      'p',
      null,
      "Pretty convincing, right? By juxtaposing the same image twice, and tweaking the offset of the background image, we're able to give the impression of a single image."
    ),
    mdx(
      'p',
      null,
      "To fold the bottom image up, we'll need to make use of a few CSS properties. This post will explain this technique in depth, but those who just want to see the code can find it ",
      mdx(
        PostLink,
        {
          href: 'https://github.com/joshwcomeau/blog/blob/master/src/components/FoldableImage/FoldableImage.js',
          mdxType: 'PostLink',
        },
        'on Github'
      ),
      '.'
    ),
    mdx('h2', null, 'Transform'),
    mdx(
      'p',
      null,
      'Transform is our gateway to all sorts of effects. With transform, we can move stuff around, scale it larger and smaller, skew it, or rotate it.'
    ),
    mdx('p', null, 'In our case, we want to use a rotation, along the X axis:'),
    mdx(FoldTransformDemo, { mdxType: 'FoldTransformDemo' }),
    mdx('h2', null, 'Perspective'),
    mdx(
      'p',
      null,
      `By default, transforms still look very "2d". The rotations above don't look quite right, since objects closer to the viewer should look larger.`
    ),
    mdx(
      'p',
      null,
      'The solution to this is to apply a "perspective" property to the parent container. The value is given in px, and represents the distance that the viewer is from the item being transformed. The smaller the number, the more intense the transform effect.'
    ),
    mdx(
      RenderWhenOnscreen,
      { height: 536, mdxType: 'RenderWhenOnscreen' },
      mdx(FoldPerspectiveDemo, { mdxType: 'FoldPerspectiveDemo' })
    ),
    mdx('h2', null, 'Transform Origin'),
    mdx(
      'p',
      null,
      'By default, rotations assume that you want to spin the items around their center point. The ',
      mdx('inlineCode', { parentName: 'p' }, 'transform-origin'),
      ' property allows us to change the pivot point for rotation (and for all other transforms as well!)'
    ),
    mdx(
      'p',
      null,
      'Try changing it from the default "center" value to "top" or "bottom".'
    ),
    mdx(
      RenderWhenOnscreen,
      { height: 536, mdxType: 'RenderWhenOnscreen' },
      mdx(FoldOriginDemo, { mdxType: 'FoldOriginDemo' })
    ),
    mdx('h1', null, 'Our MVP'),
    mdx(
      'p',
      null,
      `With all those pieces, we can achieve a "minimum viable product" for this effect. Here's what we get when we combine them:`
    ),
    mdx(FoldCodeSnippet, { variant: 'our-mvp', mdxType: 'FoldCodeSnippet' }),
    mdx(
      'p',
      null,
      "With a little bit of CSS and a sprinkle of React state, we have the fundamental effect we're after!"
    ),
    mdx('h1', null, 'Accessibility'),
    mdx(
      'p',
      null,
      "There's a subtle problem to this solution: images are meant to have ",
      mdx('inlineCode', { parentName: 'p' }, 'alt'),
      ' tags, for users using screen readers. There is no way to specify an ',
      mdx('inlineCode', { parentName: 'p' }, 'alt'),
      ' tag for a ',
      mdx('inlineCode', { parentName: 'p' }, '<div>'),
      ' with a background image. By using a ',
      mdx('inlineCode', { parentName: 'p' }, 'background-image'),
      ', we make this image invisible to assistive technologies.'
    ),
    mdx(
      'p',
      null,
      "Happily, there's an easy solution. Let's use a real ",
      mdx('inlineCode', { parentName: 'p' }, '<img>'),
      ' tag for the ',
      mdx('em', { parentName: 'p' }, 'top half'),
      " of our folding element. In order to prevent the whole image from showing, we'll put it in a half-height div with ",
      mdx('inlineCode', { parentName: 'p' }, 'overflow: hidden'),
      '.'
    ),
    mdx('p', null, "Here's what this looks like:"),
    mdx(FoldCodeSnippet, { variant: 'a11y', mdxType: 'FoldCodeSnippet' }),
    mdx(
      'p',
      null,
      'Adding whimsical details is great, but not when it comes at the expense of accessibility.'
    ),
    mdx('h1', null, 'Polishing'),
    mdx(
      'p',
      null,
      "You may have noticed, though, that it's missing some of the bells and whistles of the original demo. Let's flesh some of these out."
    ),
    mdx('h2', null, 'Adding a backface'),
    mdx(
      'p',
      null,
      'In our original demo, the "back" of the card has a slightly-transparent white background. The idea is to make it seem like a slightly-seethrough piece of paper.'
    ),
    mdx(
      'p',
      null,
      "Let's tackle this problem in isolation at first, and then we can add it in to our full demo."
    ),
    mdx(
      'p',
      null,
      'First, we need a new ',
      mdx('inlineCode', { parentName: 'p' }, 'div'),
      ", with a nearly-opaque white background. We'll position this in the same place as our card:"
    ),
    mdx(
      RenderWhenOnscreen,
      { height: 585 + 72, mdxType: 'RenderWhenOnscreen' },
      mdx(FoldCodeSnippet, { variant: 'backface', mdxType: 'FoldCodeSnippet' })
    ),
    mdx(
      'p',
      null,
      'Next, we need to make sure that this div is only shown when the card is facing the viewer. Happily, CSS has an elegant way to handle this scenario, built right into the language!'
    ),
    mdx('p', null, 'We need to learn about a couple more properties.'),
    mdx('h3', null, 'Backface Visibility and Transform Style'),
    mdx(
      'p',
      null,
      'The ',
      mdx('inlineCode', { parentName: 'p' }, 'backface-visibility'),
      " property allows us to specify whether an item should be visible when it's rotated more than 90 degrees in either direction."
    ),
    mdx(
      'p',
      null,
      'In this case, we also need to add ',
      mdx('inlineCode', { parentName: 'p' }, 'transform-style: preserve-3d'),
      ' to the parent element (the one responsible for the animation). This property allows elements to be positioned in 3D space, and it allows ',
      mdx('inlineCode', { parentName: 'p' }, 'backface-visibility'),
      ' to work correctly in this context.'
    ),
    mdx(
      RenderWhenOnscreen,
      { height: 585 + 72, mdxType: 'RenderWhenOnscreen' },
      mdx(FoldCodeSnippet, {
        variant: 'backface-hidden',
        mdxType: 'FoldCodeSnippet',
      })
    ),
    mdx(
      'p',
      null,
      "Eagle-eyed readers\u2014or, those who can read Chinese\u2014might've noticed that this effect is backwards. Right now, we ",
      mdx('em', { parentName: 'p' }, 'only'),
      ' see our white "back" when the card is facing forwards!'
    ),
    mdx(
      'p',
      null,
      "It makes sense, because both the card and the backside are facing the same way. We're only hiding the backside when the whole thing is rotated around."
    ),
    mdx(
      'p',
      null,
      'We can fix this by being a little sneaky, and giving our backside element a 180-degree Y-axis rotation. Think of it like stacking two playing cards, and then flipping the top one over, so that the two cards are facing each other. This way, you always see the front of one element, and the back of the other.'
    ),
    mdx(
      'p',
      null,
      "We can also apply a very slight Z-translate, to push the element a bit further from the viewer than the card. This addresses an issue where the elements can appear to flicker, because both the card and the backdrop are occupying the same point in 3D space. We push it away from the user so that the backside is actually behind the card itself (which means it'll be in front of the card when it's rotated)."
    ),
    mdx(
      RenderWhenOnscreen,
      { height: 585 + 72, mdxType: 'RenderWhenOnscreen' },
      mdx(FoldCodeSnippet, {
        variant: 'backface-fixed',
        mdxType: 'FoldCodeSnippet',
      })
    ),
    mdx(
      'p',
      null,
      "Spacial orientation is a hard thing to visualize (especially with nested rotations!), so don't be discouraged if it's not immediately obvious why this trick works. Playing with the live-editable code should help!"
    ),
    mdx('h2', null, 'Adding it into our original demo'),
    mdx(
      'p',
      null,
      'How do we fit this into our ',
      mdx('inlineCode', { parentName: 'p' }, '<Foldable>'),
      ' component? We can just add this new backside element to our "bottom half" div, and make sure to use 3D positioning:'
    ),
    mdx(FoldCodeSnippet, { variant: 'combined', mdxType: 'FoldCodeSnippet' }),
    mdx('h2', null, 'Final Details'),
    mdx('p', null, 'Here our original demo is again:'),
    mdx(FoldingDemo, { id: 'fold-conclusion', mdxType: 'FoldingDemo' }),
    mdx(
      'p',
      null,
      "There are a couple other small details we haven't covered."
    ),
    mdx('h3', null, 'Shading'),
    mdx(
      'p',
      null,
      "As the card moves through its first 90 degrees, the bottom half darkens, as if there's a light source that can't light the surface as well as it angles up."
    ),
    mdx(
      'p',
      null,
      'For this effect, I added a new ',
      mdx('inlineCode', { parentName: 'p' }, '<div>'),
      ', with a variable ',
      mdx('inlineCode', { parentName: 'p' }, 'opacity'),
      '. As the card rotation increases, I move closer to opaque.'
    ),
    mdx(
      'p',
      null,
      'See ',
      mdx(
        PostLink,
        {
          href: 'https://github.com/joshwcomeau/blog/blob/master/src/components/FoldableImage/FoldableImage.js#L23',
          mdxType: 'PostLink',
        },
        'this line'
      ),
      ' in the source.'
    ),
    mdx('h3', null, 'Thickness'),
    mdx(
      'p',
      null,
      "As the card moves through the second half, there's the illusion of thickness, as if the card has an edge."
    ),
    mdx(
      'p',
      null,
      'I discovered this one by accident, by playing with the amount of Z-axis translation when adding the backside. To get backface-visibility working, it technically only needs to be ',
      mdx('inlineCode', { parentName: 'p' }, '0.01px'),
      ', but by setting it to ',
      mdx('inlineCode', { parentName: 'p' }, '2px'),
      ', it gives this nice illusion of depth.'
    ),
    mdx(
      'p',
      null,
      'See ',
      mdx(
        PostLink,
        {
          href: 'https://github.com/joshwcomeau/blog/blob/master/src/components/FoldableImage/FoldableImage.js#L83',
          mdxType: 'PostLink',
        },
        'this line'
      ),
      ' in the source.'
    ),
    mdx('h3', null, 'Translation and Bug-fixing'),
    mdx(
      'p',
      null,
      "In this demo, I wanted the whole card to move up as it's unfolded, so that it always appeared centered in the parent container."
    ),
    mdx(
      'p',
      null,
      'This was accomplished with a ',
      mdx('inlineCode', { parentName: 'p' }, 'transform: translateY()'),
      ' on the parent, using the percentage of opening as the value to tween based on.'
    ),
    mdx(
      'p',
      null,
      "I've also noticed that sometimes there can be a subtle flickering bug, in the crook of the fold, in certain browsers. The solution was to add a third copy of the image to fill in that small problematic area."
    ),
    mdx(
      'p',
      null,
      'Full details available ',
      mdx(
        PostLink,
        {
          href: 'https://github.com/joshwcomeau/blog/blob/master/src/components/FoldableImage/FoldableImage.js',
          mdxType: 'PostLink',
        },
        'in the source'
      ),
      '.'
    ),
    mdx('h3', null, 'Spring physics'),
    mdx(
      'p',
      null,
      "In the demo, I'm using React Spring to animate changes in value, when the slider is dragged. Spring physics produce much more organic, beautiful motion than using traditional easing. Its use is outside the scope of this article, but it has ",
      mdx(
        PostLink,
        { href: 'https://react-spring.io/docs', mdxType: 'PostLink' },
        'excellent documentation'
      ),
      ' you can consult!'
    ),
    mdx('h1', null, 'Conclusion'),
    mdx(
      'p',
      null,
      "Effects like this can be quite a lot of trouble, but the beauty of React is that it encourages the creation of reusable effects. After following this tutorial, you'll wind up with a ",
      mdx('inlineCode', { parentName: 'p' }, '<Foldable>'),
      ' component you can easily drop into any future project!'
    ),
    mdx(
      'p',
      null,
      "Because this effect is non-trivial, it's also quite rare. This means that it has more of a punch, because it's not something that users are accustomed to!"
    ),
    mdx(
      'p',
      null,
      'In this post, we looked exclusively at images, but you may wish to use this effect on other kinds of elements. For example, in a demo I created for a ',
      mdx(
        PostLink,
        {
          href: 'https://github.com/joshwcomeau/react-europe-talk-2018',
          mdxType: 'PostLink',
        },
        'React Europe talk'
      ),
      ', I show how a form can be folded up like a letter:'
    ),
    mdx(VideoGif, {
      src: '/images/folding-the-dom/folding-pt2-pre.mp4',
      caption: mdx(React.Fragment, null, 'A sample of folding a modal up.'),
      mdxType: 'VideoGif',
    })
  );
}
MDXContent.isMDXComponent = !0;
