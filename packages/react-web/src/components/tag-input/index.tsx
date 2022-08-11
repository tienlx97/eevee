import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { Button } from '../../../../eevee-components/react-button/src/Button';
import { ButtonR } from '../../../../eevee-components/react-button/src/index';

type TagInputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange: (value: string[]) => void;
  defaultTags?: string[];
};

const useStyles = makeStyles({
  root: {
    cursor: 'text',
    width: '100%',
    maxWidth: '100%',
    marginRight: '5px',
    display: 'inline-block',
    position: 'relative',

    ...shorthands.border('1px', 'solid', tokens.b2),
    ...shorthands.borderRadius('6px'),
    ...shorthands.padding('3px', '12px'),
    boxShadow: '0 0 transparent',

    transitionDuration: '80ms',
    transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
    transitionDelay: '0s',
    transitionProperty: 'color,background-color,box-shadow,border-color',
  },
});

const useInputStyles = makeStyles({
  root: {
    minHeight: '26px',
    backgroundImage: 'none',
    width: '130px',
    maxWidth: '100%',
    marginRight: '5px',
    backgroundColor: 'transparent',

    lineHeight: '20px',
    fontSize: '14px',
    verticalAlign: 'middle',
    fontWeight: '400',
    color: tokens.f1,

    ...shorthands.border('1px', 'solid', 'transparent'),
    ...shorthands.borderRadius('6px'),
    boxShadow: '0 0 transparent',
  },
});

const useTagStyles = makeStyles({
  root: {
    listStyleType: 'none',
    display: 'inline-block',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },

  tagItem: {
    display: 'inline-flex',
    alignItems: 'center',
    ...shorthands.margin('4px', '4px', '4px', 0),
    fontSize: '12px',
    color: tokens.f3,
    paddingLeft: '10px',
    lineHeight: '22px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    ...shorthands.borderRadius('2em'),
    ...shorthands.border('1px', 'solid', 'transparent'),
    backgroundColor: 'rgba(65,132,228,0.15)',

    '&:hover': {
      ...shorthands.borderColor(tokens.f4),
      color: tokens.f4,
    },
  },

  removeButton: {
    marginLeft: '4px',
    display: 'flex',
    width: '24px',
    height: '24px',
    ...shorthands.padding(0),
    color: 'inherit',
    ...shorthands.borderColor('transparent'),
    ...shorthands.borderLeft('0'),
    ...shorthands.borderRadius('2em'),
    backgroundColor: 'rgba(65,132,228,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  ({ defaultTags, name, onChange, placeholder, id }, ref) => {
    const styles = useStyles();
    const inputStyles = useInputStyles();
    const tagStyles = useTagStyles();

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [value, setValue] = React.useState('');
    const [tags, setTags] = React.useState(defaultTags ? defaultTags : []);

    const changeHandler = (e: any) => {
      setValue(e.target.value);
      onChange(tags);
    };

    const removeTag = (tag: string) => {
      const arr = tags.filter(t => t !== tag);
      setTags(arr);
      onChange(arr);
    };

    const inputFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const updateTagsHandler = (e: any) => {
      e.preventDefault();

      // Add tags if input is not empty and if input value is not comma
      if (e.target.value !== '') {
        if (e.key === 'Spacebar' || e.key === ' ') {
          const newTag = value.trim().split(',')[0];
          if (!tags.includes(newTag) && newTag !== '') {
            const arr = [...tags, newTag];
            setTags(arr);
            onChange(arr);
          }
          setValue('');
        } else if (e.key === 'Enter') {
          const newTag = value.trim();
          if (!tags.includes(newTag) && newTag !== '') {
            const arr = [...tags, newTag];
            setTags(arr);
            onChange(arr);
          }
          setValue('');
        }
      }

      // Remove tags if backspace is pressed
      if (e.key === 'Backspace' && e.target.value === '' && tags.length > 0) {
        const copyOfTags = [...tags];
        copyOfTags.pop();
        setTags(copyOfTags);
        onChange(copyOfTags);
      }
    };

    return (
      <div className={styles.root} onClick={inputFocus}>
        <ul className={tagStyles.root}>
          {tags.map((tag, i) => (
            <li key={i} className={tagStyles.tagItem}>
              {tag}{' '}
              <button className={tagStyles.removeButton} onClick={() => removeTag(tag)} type="button">
                <svg
                  aria-label="Remove topic"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  />
                </svg>
              </button>
              <span onClick={() => removeTag(tag)}>
                <i className="fas fa-times-circle" />
              </span>
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          className={inputStyles.root}
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          id={id ? id : name}
          onChange={changeHandler}
          onKeyUp={updateTagsHandler}
        />
      </div>
    );
  },
);
