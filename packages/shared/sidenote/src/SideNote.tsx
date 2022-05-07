import React from 'react';
import { animated } from '@react-spring/web';
import {
  ChevronDown,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '@jolteon/icons';
import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { useBoop } from '@vaporeon/hooks';
import { UnstyledButton } from '@jolteon/base-ui';

import stylex from '@ladifire-opensource/stylex';
import { joinClasses } from '@vaporeon/utils';

const styles = stylex.create({
  baseWrapper: {
    position: 'relative',
    paddingTop: '24px',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingBottom: '24px',
    fontSize: '17px',
    marginTop: '48px',
    marginBottom: '64px',
    borderLeft: '3px solid',
    borderRadius: '6px 6px 6px 3px',

    '@media (min-width: 1150px)': {
      marginLeft: '-32px',
      marginRight: '-32px',
    },

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },

  infoSidenote: {
    background: 'var(--color-muted)',
    borderColor: 'var(--color-info)',
    //
    color: 'var(--color-info)',
  },

  successSidenote: {
    background: 'var(--color-success-background)',
    borderColor: 'var(--color-success)',
    //
    color: 'var(--color-success)',
  },

  warningSidenote: {
    background: 'var(--color-alert-background)',
    borderColor: 'var(--color-alert)',
    //
    color: 'var(--color-alert)',
    borderRadius: '25% 25%',
    left: '-1.5px',
  },

  iconWrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    transform: 'translate(calc(-50% - 1.5px), -50%)',
    padding: '8px',
    background: 'var(--color-background)',
    borderRadius: '50%',
  },

  title: {
    display: 'block',
    fontSize: '17px',
    marginBottom: '8px',
    fontWeight: 'var(--font-weight-bold)',
  },

  content: {
    /* TODO: Figure out why 'max-width: 100%' doesn't work */
    maxWidth: 'calc(100vw - 98px)',
  },

  showMore: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--color-text)',
    fontWeight: 'var(--font-weight-bold)',
  },

  dropIn: {
    animationName: stylex.keyframes({
      from: {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    }),
    animationDuration: '350ms',
    transitionTimingFunction: 'cubic-bezier(0, 0.66, 0.46, 0.98)',
    willChange: 'transform',
    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },

  showMoreChevron: {
    display: 'block',
    height: '20px',
  },
});

type SideNoteProps = {
  type: string;
  title: string;
  children: React.ReactNode;
};

type BaseWrapperProps = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xsyle?: any;
};

const BaseWrapper = ({ children, xsyle }: BaseWrapperProps) => {
  const classes = stylex.dedupe({
    transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,
  });

  return (
    <aside className={joinClasses(stylex(styles.baseWrapper), classes, xsyle)}>
      {children}
    </aside>
  );
};

const InfoSidenote = (children: React.ReactNode) => (
  <BaseWrapper xsyle={stylex(styles.infoSidenote)}>{children}</BaseWrapper>
);

const SuccessSidenote = (children: React.ReactNode) => (
  <BaseWrapper xsyle={stylex(styles.successSidenote)}>{children}</BaseWrapper>
);

const WarningSidenote = (children: React.ReactNode) => (
  <BaseWrapper xsyle={stylex(styles.warningSidenote)}>{children}</BaseWrapper>
);

const Sidenote = ({ type = 'info', title, children }: SideNoteProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Component: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Icon: any;

  switch (type) {
    case 'info': {
      Component = InfoSidenote;
      Icon = InfoIcon;
      break;
    }
    case 'success': {
      Component = SuccessSidenote;
      Icon = SuccessIcon;
      break;
    }
    case 'warning': {
      Component = WarningSidenote;
      Icon = WarningIcon;
      break;
    }
    default: {
      console.error(`Unrecognized Sidenote type: ${type}`);
      Component = InfoSidenote;
      Icon = InfoIcon;
      break;
    }
  }

  const [showMoreStyle, showMoreTrigger] = useBoop({ y: 4 });

  const expandedElem = React.Children.toArray(children).find((child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (child as any)?.props?.originalType === 'expanded';
  });

  const previewChildren = React.Children.toArray(children).filter((child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (child as any)?.props?.originalType !== 'expanded';
  });

  const [isExpanded, setIsExpanded] = React.useState(!expandedElem);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const expandedChildren = (expandedElem as any)?.props?.children;

  const componentClasses = stylex.dedupe({
    '@media (max-width: 768px)': {
      display: 'none',
    },

    svg: {
      display: 'block',
    },
  });

  return (
    <Component>
      <div // IconWrapper
        className={joinClasses(stylex(styles.iconWrapper), componentClasses)}
      >
        <Icon size={32} />
      </div>
      {title && (
        <strong //Title
          className={stylex(styles.title)}
        >
          {title}
        </strong>
      )}
      <div // Content
        className={stylex(styles.content)}
      >
        {previewChildren}
        {isExpanded ? (
          expandedChildren && (
            <div className={stylex(styles.dropIn)}>{expandedChildren}</div>
          )
        ) : (
          <UnstyledButton // ShowMore
            xstyle={stylex(styles.showMore)}
            onclick={() => setIsExpanded(true)}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onMouseEnter={showMoreTrigger as any}
          >
            Show more{' '}
            <animated.span // ShowMoreChevron
              className={stylex(styles.showMoreChevron)}
              style={showMoreStyle}
            >
              <ChevronDown size={20} />
            </animated.span>
          </UnstyledButton>
        )}
      </div>
    </Component>
  );
};

export { Sidenote };
export default Sidenote;
