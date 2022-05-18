/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from 'react';

import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

import './SideNote.css';
import { useBoop } from '@vaporeon/hooks';
import { UnstyledButton2 } from '../button';

import { animated } from '@react-spring/web';
import { ChevronDown, InfoIcon, SuccessIcon, WarningIcon } from '../icons';
import { Expanded } from './Expanded';
import { IBaseWrapperProps, ISideNote } from './SideNote.types';

const useStyles = makeStyles({
  baseWrapper: {
    position: 'relative',
    ...shorthands.padding('24px', '32px', '24px', '32px'),
    fontSize: '17px',
    marginTop: '48px',
    marginBottom: '64px',
    ...shorthands.borderLeft('3px', 'solid'),
    ...shorthands.borderRadius('6px', '6px', '6px', '3px'),

    // transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,

    '@media (min-width: 1150px)': {
      marginLeft: '-32px',
      marginRight: '-32px',
    },

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },

  infoSidenote: {
    backgroundColor: 'var(--color-muted)',
    ...shorthands.borderColor('var(--color-info)'),
  },

  successSidenote: {
    backgroundColor: 'var(--color-success-background)',
    ...shorthands.borderColor('var(--color-alert)'),
  },

  warningSidenote: {
    backgroundColor: 'var(--color-alert-background)',
    ...shorthands.borderColor('var(--color-alert)'),
  },
});

const BaseWrapper = ({
  children,
  className,
  style,
  appendClassName,
  ...delegated
}: IBaseWrapperProps) => {
  const styles = useStyles();

  const classes = mergeClasses(styles.baseWrapper, 'sn__wrapper', className);

  const innerStyle: CSSProperties = {
    transition: `background ${COLOR_SWAP_TRANSITION_DURATION}ms`,
  };

  return (
    <aside
      {...delegated}
      style={{ ...innerStyle, ...style }}
      className={classes}
    >
      {children}
    </aside>
  );
};

const InfoSidenote = (props: IBaseWrapperProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(
    styles.infoSidenote,
    'sn__wrapper--info',
    className
  );

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      // appendClassName="sn__wrapper--info"
    ></BaseWrapper>
  );
};

const SuccessSidenote = (props: IBaseWrapperProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(
    styles.successSidenote,
    'sn__wrapper--success',
    className
  );

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      // appendClassName="sn__wrapper--success"
    ></BaseWrapper>
  );
};

const WarningSidenote = (props: IBaseWrapperProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(
    styles.warningSidenote,
    'sn__wrapper--warning',
    className
  );

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      // appendClassName="sn__wrapper--warning"
    ></BaseWrapper>
  );
};

const useSidenoteStyles = makeStyles({
  iconWrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    transform: 'translate(calc(-50% - 1.5px), -50%)',
    ...shorthands.padding('8px'),
    backgroundColor: 'var(--color-background)',
    ...shorthands.borderRadius('50%'),
    '@media (max-width: 768px)': {
      display: 'none',
    },

    '& svg': {
      display: 'block',
    },
  },

  content: {
    /* TODO: Figure out why 'max-width: 100%' doesn't work */
    maxWidth: 'calc(100vw - 98px)',
  },

  title: {
    display: 'block',
    fontSize: '17px',
    marginBottom: '8px',
    fontWeight: 'var(--font-weight-bold)',
  },

  dropIn: {
    willChange: 'transform',
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    },

    animationDuration: '350ms',
    animationTimingFunction: 'cubic-bezier(0, 0.66, 0.46, 0.98)',
    animationDelay: '0s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',

    '& > *:last-child': {
      marginBottom: '0 !important',
    },
  },

  showMore: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
    color: 'var(--color-text)',
    fontWeight: 'var(--font-weight-bold)',
  },

  showMoreChevron: {
    display: 'block',
    height: '20px',
  },
});

const Sidenote = ({ type = 'info', title, children }: ISideNote) => {
  const styles = useSidenoteStyles();

  let Component;
  let Icon;
  if (type === 'info') {
    Component = InfoSidenote;
    Icon = InfoIcon;
  } else if (type === 'success') {
    Component = SuccessSidenote;
    Icon = SuccessIcon;
  } else if (type === 'warning') {
    Component = WarningSidenote;
    Icon = WarningIcon;
  } else {
    console.error(`Unrecognized Sidenote type: ${type}`);
    Component = InfoSidenote;
    Icon = InfoIcon;
  }

  const [showMoreStyle, showMoreTrigger] = useBoop({ y: 4 });

  const expandedElem = React.Children.toArray(children).find((child: any) => {
    return child.type === Expanded;
  });

  const previewChildren = React.Children.toArray(children).filter(
    (child: any) => {
      return child.type !== Expanded;
    }
  );

  const [isExpanded, setIsExpanded] = React.useState(!expandedElem);

  const expandedChildren = (expandedElem as any)?.props?.children;

  return (
    <Component>
      <div className={mergeClasses(styles.iconWrapper, 'sn__iconwrapper')}>
        <Icon size={32} />
      </div>
      {title && <strong className={styles.title}>{title}</strong>}
      <div className={styles.content}>
        {previewChildren}
        {isExpanded ? (
          expandedChildren && (
            <div className={styles.dropIn}>{expandedChildren}</div>
          )
        ) : (
          <UnstyledButton2
            className={styles.showMore}
            onClick={() => setIsExpanded(true)}
            onMouseEnter={showMoreTrigger as any}
          >
            Show more{' '}
            <animated.span style={showMoreStyle}>
              <ChevronDown size={20} />
            </animated.span>
          </UnstyledButton2>
        )}
      </div>
    </Component>
  );
};

export { BaseWrapper, InfoSidenote, SuccessSidenote, WarningSidenote };
export default Sidenote;
