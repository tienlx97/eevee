import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

type TextAreaProps = JSX.IntrinsicElements['textarea'] & {};

const useStyles = makeStyles({
  root: {
    fontSize: 'x-small',
    fontWeight: 400,
  },
});

export const TextArea = React.forwardRef((props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const { onChange, maxLength, defaultValue, className, ...rest } = props;
  const styles = useStyles();

  const [length, setLength] = React.useState<string | null>(
    maxLength ? `${defaultValue ? defaultValue.toString().length : 0}/${maxLength}` : null,
  );

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength) {
      const dataLength = e.target.value.length;
      const dataCharsRemaining = maxLength - dataLength;
      if (dataCharsRemaining <= 0) {
        setLength(`${maxLength}/${maxLength}`);
      } else {
        setLength(`${dataLength}/${maxLength}`);
      }
    }

    onChange?.(e);
  };

  return (
    <>
      <textarea
        {...rest}
        onChange={onTextAreaChange}
        data-length={0}
        data-max-length={maxLength}
        maxLength={maxLength}
        ref={ref}
        spellCheck={false}
        defaultValue={defaultValue}
        className={className}
      />
      {length && <div className={styles.root}>{length}</div>}
    </>
  );
});
