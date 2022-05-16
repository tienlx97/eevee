import React, { CSSProperties, HTMLAttributes } from 'react';
import { COLOR_SWAP_TRANSITION_DURATION } from '@vaporeon/constants';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

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
    backgroundcolor: 'var(--color-muted)',
    ...shorthands.borderColor('var(--color-info)'),
  },

  successSidenote: {
    backgroundcolor: 'var(--color-success-background)',
    ...shorthands.borderColor('var(--color-alert)'),
  },

  warningSidenote: {
    backgroundcolor: 'var(--color-alert-background)',
    ...shorthands.borderColor('var(--color-alert)'),
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseWrapperProps extends HTMLAttributes<HTMLElement> {
  appendClassName?: string;
}

const BaseWrapper = ({
  children,
  className,
  style,
  appendClassName,
  ...delegated
}: IBaseWrapperProps) => {
  const styles = useStyles();

  const classes = mergeClasses(
    styles.baseWrapper,
    className,
    appendClassName || 'sidenote-wrapper'
  );

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
  const classes = mergeClasses(styles.infoSidenote, className);

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      appendClassName="info-sidenote"
    ></BaseWrapper>
  );
};

const SuccessSidenote = (props: IBaseWrapperProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(styles.successSidenote, className);

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      appendClassName="success-sidenote"
    ></BaseWrapper>
  );
};

const WarningSidenote = (props: IBaseWrapperProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  const classes = mergeClasses(styles.warningSidenote, className);

  return (
    <BaseWrapper
      {...rest}
      className={classes}
      appendClassName="warning-sidenote"
    ></BaseWrapper>
  );
};

export { BaseWrapper, InfoSidenote, SuccessSidenote, WarningSidenote };
