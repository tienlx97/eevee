import { mergeClasses } from '@griffel/react';
import * as React from 'react';
import { useStyles } from './styles';

type IframeProps = JSX.IntrinsicElements['iframe'] & {
  //
};

export const Iframe = (props: IframeProps) => {
  const { className, ...rest } = props;
  const styles = useStyles();
  return (
    <div className={mergeClasses('mdx-embed', styles.root)}>
      <iframe width="100%" {...rest} />
    </div>
  );
};
