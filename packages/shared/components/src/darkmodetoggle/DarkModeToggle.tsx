/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';

import { usePrefersReducedMotion } from '@vaporeon/hooks';
// import { generateId } from '@utils';

import { UnstyledButton2 } from '../button';
import { ConfigContext } from '../config-context';

import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { IButtonProps } from '../button/UnstyledButton.types';
import type { ColorMode } from '../config-context/';

const useStyles = makeStyles({
  iconWrapper: {
    opacity: '0.7',
    position: 'relative',
    ...shorthands.borderRadius('5px'),
    width: '40px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  moonOrSun: {
    position: 'relative',
    ...shorthands.overflow('visible'),
  },
});

interface IDarkModeToggleProps extends IButtonProps {
  colorMode?: ColorMode;
  setColorMode?: (value: ColorMode) => void;
  size?: number;
  id?: string;
}

export const DarkModeToggle = ({
  colorMode,
  setColorMode,
  size = 18,
  id = 'main-nav',
  className,
  ...delegated
}: IDarkModeToggleProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const styles = useStyles();

  const isDark = colorMode === 'dark';

  function toggleColorMode(event: any) {
    event.preventDefault();
    if (setColorMode) setColorMode(isDark ? 'light' : 'dark');
  }

  const svgSpring = useSpring({
    transform: isDark ? 'rotate(40deg)' : 'rotate(90deg)',
    immediate: prefersReducedMotion,
  });
  const maskSpring = useSpring({
    cx: isDark ? 10 : 25,
    cy: isDark ? 2 : 0,
    config: {
      mass: 3.1,
      friction: 21,
    },
    immediate: prefersReducedMotion,
  });
  const sunMoonSpring = useSpring({
    r: isDark ? 8 : 5,
    immediate: prefersReducedMotion,
  });

  const sunDotAngles = [0, 60, 120, 180, 240, 300];

  const sunDotTrail = useTrail(sunDotAngles.length, {
    transform: isDark ? 0 : 1,
    transformOrigin: 'center center',
    immediate: isDark || prefersReducedMotion,
    config: {
      tension: 210,
      friction: 20,
    },
  });

  return (
    <UnstyledButton2
      className={mergeClasses(styles.iconWrapper, className)}
      onClick={toggleColorMode}
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
      {...delegated}
    >
      <svg
        className={styles.moonOrSun}
        width={size}
        height={size}
        viewBox="0 0 18 18"
        style={svgSpring as any}
      >
        <mask id={`moon-mask-${id}`}>
          <rect x="0" y="0" width="18" height="18" fill="#FFF" />
          <animated.circle {...maskSpring} r="8" fill="black" />
        </mask>

        <animated.circle
          cx="9"
          cy="9"
          fill="var(--color-text)"
          mask={`url(#moon-mask-${id})`}
          {...sunMoonSpring}
        />

        {/* Sun dots */}
        <g>
          {sunDotTrail.map(({ transform, ...props }, index) => {
            const angle = sunDotAngles[index];
            const centerX = 9;
            const centerY = 9;

            const angleInRads = (angle / 180) * Math.PI;

            const c = 8; // hypothenuse
            const a = centerX + c * Math.cos(angleInRads);
            const b = centerY + c * Math.sin(angleInRads);

            return (
              <animated.circle
                key={angle}
                cx={a}
                cy={b}
                r={1.5}
                fill="var(--color-text)"
                style={{
                  ...props,
                  transform: transform.to((t) => `scale(${t})`),
                }}
              />
            );
          })}
        </g>
      </svg>
    </UnstyledButton2>
  );
};

const DarkModeToggleContainer = ({ ...delegated }: IDarkModeToggleProps) => {
  const { colorMode, setColorMode } = React.useContext(ConfigContext);

  return (
    <DarkModeToggle
      colorMode={colorMode}
      setColorMode={setColorMode}
      {...delegated}
    />
  );
};

export default DarkModeToggleContainer;
