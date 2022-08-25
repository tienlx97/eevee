import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { slugify } from '@eevee/react-utilities';
import { Enter, Backspace } from '@eevee/react-keyboard';

type TagInputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  onTagChange: (value: string[]) => void;
  defaultTags?: string[];
  className?: string;
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
  ({ defaultTags, name, onTagChange, placeholder, id, className }, ref) => {
    const styles = useStyles();
    const inputStyles = useInputStyles();
    const tagStyles = useTagStyles();

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [tags, setTags] = React.useState(defaultTags ? defaultTags : []);

    const removeTag = (tag: string, i: number) => {
      const arr = [...tags];
      arr.splice(i, 1);
      setTags(arr);

      onTagChange(arr);
    };

    const inputFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const updateTagsHandler = (e: any) => {
      e.preventDefault();
      if (!inputRef.current) {
        return;
      }

      let newTag = e.target.value.trim();
      // Add tags if input is not empty and if input value is not comma
      if (e.key === Enter && newTag !== '') {
        newTag = slugify(newTag);
        if (!tags.includes(newTag)) {
          const arr = [...tags, newTag];
          setTags(arr);
          onTagChange(arr);
        } else {
          inputRef.current.placeholder = ' Duplicated';
        }
        inputRef.current.value = '';
      }

      // Remove tags if backspace is pressed
      if (e.key === Backspace && e.target.value === '' && tags.length > 0) {
        inputRef.current.placeholder = '';
        const copyOfTags = [...tags];
        copyOfTags.pop();
        setTags(copyOfTags);
        onTagChange(copyOfTags);
      }
    };

    return (
      <div className={mergeClasses(styles.root, className)} onClick={inputFocus}>
        <ul className={tagStyles.root}>
          {tags.map((tag, i) => (
            <li key={i} className={tagStyles.tagItem}>
              {tag}{' '}
              <button className={tagStyles.removeButton} onClick={() => removeTag(tag, i)} type="button">
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
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          className={inputStyles.root}
          type="text"
          placeholder={placeholder}
          name={name}
          id={id ? id : name}
          onKeyUp={updateTagsHandler}
        />
      </div>
    );
  },
);
