import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { IllustrationBlockProps } from '../IllustrationBlock.types';
import { tokens } from '@eevee/react-theme';
import { TextLink } from '@eevee/react-link';

type AuthorCreditProps = Pick<IllustrationBlockProps, 'author' | 'authorLink'>;

const useRootStyles = makeStyles({
  root: {
    textAlign: 'center',
    color: tokens.foreground10,
    fontSize: tokens.fontSizeBase400,
    marginTop: '.5rem',
  },
});

export const AuthorCredit = ({ author, authorLink }: AuthorCreditProps) => {
  const rootStyles = useRootStyles();
  return (
    <p className={rootStyles.root}>
      <cite>Illustrated by {authorLink ? <TextLink href={authorLink}>{author}</TextLink> : author}</cite>
    </p>
  );
};
