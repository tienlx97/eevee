import * as React from 'react';
import { Heading } from '@eevee/react-mdx-comp';
import { Link } from 'react-router-dom';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

type TagProps = {
  tagList: Array<string>;
};

const useRootStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    ...shorthands.borderRadius('8px'),
    ...shorthands.padding('3px', '12px'),
    backgroundColor: tokens.bg5,
    transformOrigin: 'center center',
    opacity: 0.33,
    fontWeight: 500,
    transform: 'scale(0.99)',
    '&:hover': {
      opacity: 0.5,
      transform: 'scale(1.06)',
    },
  },

  link: {
    position: 'relative',
    display: 'inline-block',
    textDecorationLine: 'none',
    fontSize: '13px',
    ...shorthands.padding('3px', '12px'),
    marginRight: '8px',
    marginBottom: '8px',
    fontWeight: 500,
  },
});

export const TagList = React.forwardRef<HTMLElement, TagProps>(({ tagList }, ref) => {
  const rootStyles = useRootStyles();
  return (
    <section ref={ref}>
      <Heading type="section-title" as="h2">
        Tags
      </Heading>

      <div style={{ paddingTop: '10px' }}>
        {tagList.map(tag => (
          <Link
            key={tag}
            to={`/tags/${tag}`}
            className={rootStyles.link}
            style={{ display: 'inline-block', color: 'inherit' }}
          >
            <div className={rootStyles.root} />
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
});
