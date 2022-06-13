import { makeStyles } from '@griffel/react';
import * as React from 'react';
import { AuthorCredit } from '../authorcredit/AuthorCredit';

const useRootStyles = makeStyles({
  root: {
    marginTop: '4rem',
    marginBottom: '4rem',
    marginLeft: 0,
    marginRight: 0,
    maxWidth: '56rem',

    [`@media (min-width: 1536px)`]: {
      maxWidth: '72rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

export const Illustration = ({
  caption,
  src,
  alt,
  author,
  authorLink,
}: {
  caption: string;
  src: string;
  alt: string;
  author: string;
  authorLink: string;
}) => {
  const rootStyles = useRootStyles();

  return (
    <div className={rootStyles.root}>
      <figure className="my-8 flex justify-center">
        <img src={src} alt={alt} style={{ maxHeight: 300 }} className="bg-white rounded-lg" />
        {caption ? <figcaption className="text-center leading-tight mt-4">{caption}</figcaption> : null}
      </figure>
      {author && <AuthorCredit author={author} authorLink={authorLink} />}
    </div>
  );
};
