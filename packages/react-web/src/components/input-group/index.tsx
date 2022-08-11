import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { useId } from '@eevee/react-utilities';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    padddingBottom: '16px',
  },

  // TODO add additional classes for different states and/or slots
});

const useLabelStyles = makeStyles({
  root: {
    marginBottom: '8px',
    fontWeight: 600,
  },
});

const useInputStyles = makeStyles({
  root: {
    ...shorthands.border('1px', 'solid', tokens.b2),
    ...shorthands.borderRadius('6px'),
    ...shorthands.padding('5px', '12px'),
    boxShadow: '0 0 transparent',

    transitionDuration: '80ms',
    transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
    transitionDelay: '0s',
    transitionProperty: 'color,background-color,box-shadow,border-color',

    backgroundColor: 'transparent',
    lineHeight: '20px',
    fontSize: '14px',
    verticalAlign: 'middle',
    marginBottom: '.3rem',
    fontWeight: '400',
    color: tokens.f1,
    width: '100%',
  },
});

type InputGroupProps = JSX.IntrinsicElements['div'] & {
  type?: 'input' | 'tag';
  labelChildren?: React.ReactNode;
};

export const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, children, labelChildren, type = 'input', placeholder, ...props }, ref) => {
    const styles = useStyles();
    const labelStyles = useLabelStyles();
    const inputStyles = useInputStyles();
    const genID = useId('eve-InputGroup__input');

    return (
      <div className={mergeClasses(styles.root, className)} {...props}>
        <div>
          <label htmlFor={genID} className={labelStyles.root}>
            {labelChildren && labelChildren}
          </label>
        </div>
        {type === 'input' && (
          <input ref={ref} spellCheck={false} placeholder={placeholder} id={genID} className={inputStyles.root} />
        )}
        {type === 'tag' && children && children}
      </div>
    );
  },
);
