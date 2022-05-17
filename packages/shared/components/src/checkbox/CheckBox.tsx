import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { useSpring, animated } from '@react-spring/web';

import { ICheckBoxProps } from './CheckBox.types';

import './CheckBox.css';

const BORDER_WIDTH = 2;

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',

    '&:hover .chkb-visible-box': {
      ...shorthands.borderColor('var(--color-gray-1000)'),
    },
  },

  realCheckbox: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
  },

  visibleContents: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  visibleBox: {
    position: 'relative',
    ...shorthands.border(`${BORDER_WIDTH}px`, 'solid', 'var(--color-gray-700)'),
    ...shorthands.borderRadius('4px'),
    marginRight: '8px',

    // '&.real-checkbox:hover + .visible-contents': {
    //   ...shorthands.borderColor('var(--color-gray-1000)'),
    // },

    // '&.real-checkbox:focus.focus-visible + .visible-contents': {
    //   ...shorthands.outline('2px auto var(--color-primary)'),
    //   outlineOffset: '2px',
    // },
  },

  filled: {
    position: 'absolute',
    zIndex: '1',
    top: '2px',
    left: '2px',
    right: '2px',
    bottom: '2px',
    backgroundColor: 'var(--color-primary)',
    ...shorthands.borderRadius('2px'),
  },

  text: {
    fontSize: '1rem',
    fontFamily: 'var(--font-family)',
    color: 'var(--color-gray-700)',
  },
});

const Checkbox = ({ size = 18, checked, label, onChange }: ICheckBoxProps) => {
  const classes = useStyles();

  const [active, setActive] = React.useState(false);

  const springConfig = {
    tension: 400,
    friction: 22,
    clamp: !checked,
  };

  const filledScale = checked ? (active ? 1.4 : 1) : 0;
  const filledSpring = useSpring({
    transform: `scale(${filledScale})`,
    config: springConfig,
  });

  const outlineScale = active ? 0.8 : 1;
  const outlineSpring = useSpring({
    transform: `scale(${outlineScale})`,
    config: springConfig,
  });

  // const [playActive] = useSound('/sounds/pop-down.mp3', {
  //   volume: 0.25,
  // });
  // const [playOn] = useSound('/sounds/pop-up-on.mp3', {
  //   volume: 0.25,
  // });
  // const [playOff] = useSound('/sounds/pop-up-off.mp3', {
  //   volume: 0.25,
  // });

  return (
    <div className={classes.wrapper}>
      <input
        data-hover
        onChange={onChange}
        className={mergeClasses(classes.realCheckbox, 'chkb_real-checkbox')}
        type="checkbox"
        onMouseDown={() => {
          setActive(true);
        }}
        onMouseUp={() => {
          setActive(false);
        }}
      />
      <div
        className={mergeClasses(
          classes.visibleContents,
          'chkb_visible-contents'
        )}
      >
        <animated.div
          className={mergeClasses(classes.visibleBox, 'chkb-visible-box')}
          style={{ width: size, height: size, ...outlineSpring }}
        >
          <animated.div
            className={classes.filled}
            style={filledSpring}
          ></animated.div>
        </animated.div>

        {label && <span className={classes.text}>{label}</span>}
      </div>
    </div>
  );
};

export default Checkbox;
