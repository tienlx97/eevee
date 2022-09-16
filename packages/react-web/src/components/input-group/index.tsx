import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { useId } from '@eevee/react-utilities';
import { TagInput } from '@components/tag-input/index';

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

  textArea: {
    resize: 'none',
    ':focus': {
      ...shorthands.border('1px', 'solid', '#1d99ec'),
    },
  },
});

type InputGroupProps = JSX.IntrinsicElements['div'] & {
  inputClassName?: string;
  type?: 'input' | 'tag' | 'text-area';
  labelChildren?: React.ReactNode;
  onTagChange?: (value: string[]) => void;
  defaultTags?: string[];
  inputValue?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const InputGroup = React.forwardRef<any, InputGroupProps>(
  (
    {
      className,
      onTagChange,
      children,
      labelChildren,
      type = 'input',
      defaultTags,
      placeholder,
      inputClassName,
      onInputChange,
      inputValue,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles();
    const labelStyles = useLabelStyles();
    const inputStyles = useInputStyles();
    const genID = useId('eve-InputGroup__input');

    return (
      <div className={mergeClasses(styles.root, className)} {...props}>
        <div className={labelStyles.root}>
          <label htmlFor={genID}>{labelChildren && labelChildren}</label>
        </div>
        <div style={{ display: 'flex' }}>
          {type === 'input' && (
            <input
              ref={ref}
              autoComplete="off"
              spellCheck={false}
              placeholder={placeholder}
              id={genID}
              value={inputValue}
              onChange={onInputChange}
              className={mergeClasses(inputStyles.root, inputClassName)}
            />
          )}
          {type === 'text-area' && (
            <textarea
              ref={ref}
              spellCheck={false}
              placeholder={placeholder}
              id={genID}
              value={inputValue}
              onChange={onInputChange}
              className={mergeClasses(inputStyles.root, inputStyles.textArea, inputClassName)}
            />
          )}
          {type === 'tag' && (
            <TagInput defaultTags={defaultTags} className={inputClassName} id={genID} onTagChange={onTagChange!} />
          )}
          {children}
        </div>
      </div>
    );
  },
);
