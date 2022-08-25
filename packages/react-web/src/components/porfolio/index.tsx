import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { tokens } from '@eevee/react-theme';
import type { UserSchema } from 'typings/my-mdx/index';

const useDisplayStyles = makeStyles({
  'mt-16': {
    marginTop: '16px',
  },

  'mt-4': {
    marginTop: '4px',
  },

  'mt-12': {
    marginTop: '12px',
  },

  'mt-24': {
    marginTop: '24px',
  },
});

const useRootStyles = makeStyles({
  root: {},

  avatar: {
    ...shorthands.borderRadius('50%'),
  },

  textInherit: {
    fill: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
  },

  title: {
    fontSize: '16px',
    lineHeight: '20px',
    color: tokens.f1,
  },
});

type Props = JSX.IntrinsicElements['div'] & {
  author: UserSchema;
};

export const Porfolio = ({ author, ...props }: Props) => {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();

  return (
    <div {...props}>
      <Link to={`/@${author.name}`}>
        <img width={69} height={69} className={rootStyles.avatar} src={author.photo_url} />
      </Link>
      <div className={displayStyles['mt-16']} />
      <Link className={rootStyles.textInherit} to={`/@${author.nick_name}`}>
        <h2 className={rootStyles.title}>{author.nick_name}</h2>
      </Link>
      <div className={displayStyles['mt-4']} />
      <span>61 followers</span>
      <div className={displayStyles['mt-12']} />
      <p>{author.description}</p>
    </div>
  );
};
