import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { Button } from '@eevee/react-button';
import { Publish } from '@components/icons/index';

const useRootStyles = makeStyles({
  wrapper: {
    height: '40px',
    ...shorthands.padding('0px', '14px', '0px', '14px'),
    ...shorthands.borderRadius('20px'),
    ...shorthands.border('none'),
    alignItems: 'center',
    display: 'flex',
    backgroundColor: tokens.bg1,
    boxShadow: `${tokens.b2} 0px 2px 10px 0px`,

    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.padding('0px', '14px', '0px', '14px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.padding('0px', '4px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.padding('0px', '4px'),
    },
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  'mr-5': {
    marginRight: '5px',
  },

  'text-base': {
    fontSize: tokens.fontSizeBase200,
  },

  spacing: {
    height: '12px',
    ...shorthands.borderRight('1px', 'solid', tokens.b1),
    ...shorthands.margin('0px', '8px'),
  },
});

type ActionProps = JSX.IntrinsicElements['div'] & {
  onPublichAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Action: React.FC<ActionProps> = ({ children, onPublichAction, ...props }: ActionProps) => {
  const styles = useRootStyles();

  return (
    <div {...props}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <Button
            onClick={onPublichAction}
            className={styles['text-base']}
            icon={{ children: <Publish />, className: styles['mr-5'] }}
          >
            Publish
          </Button>
          <div className={styles.spacing} />
          {children}
        </div>
      </div>
    </div>
  );
};
