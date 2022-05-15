/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles } from '@griffel/react';
import { Playground } from '@jolteon/components';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'var(--color-background)',
    transitionProperty: 'background',
    transitionDuration: '350ms',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
  },

  main: {
    position: 'relative',
    zIndex: '1',
  },

  maxWidthWrapper: {
    paddingTop: '48px',
    display: 'flex',
    flexDirection: 'row-reverse',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1100px',

    position: 'relative',
    zIndex: '2',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
  },

  article: {
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '686px',
    maxWidth: 'min(686px, 100%)',
  },
});

const App = () => {
  const classes = useStyles();

  const id = 'z-index';

  const html = `<style>
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
`;

  const layoutMode = 'tabbed';

  const cssCode = `
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
`;

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <div className={classes.maxWidthWrapper}>
          <article className={classes.article}>
            <Playground
              id={id}
              layoutMode={layoutMode}
              html={html}
              cssCode={cssCode}
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default App;
