import * as React from 'react';
import { ForwardRefComponent } from './polymorphic';

interface AnchorProps {
  requiredProp: boolean;
  icon: ForwardRefComponent<'span', {}>;
}

const Anchor = React.forwardRef((props, forwardedRef) => {
  const { as: Comp = 'a', icon: Icon, requiredProp, ...anchorProps } = props;

  /* Does not expect requiredProp */
  return (
    <Comp {...anchorProps} ref={forwardedRef}>
      <Icon />
    </Comp>
  );
}) as ForwardRefComponent<'a', AnchorProps>;

export { Anchor };

export const AnchorDebug = () => {
  return (
    <>
      <Anchor icon={{} as any} as="button" requiredProp>
        testinggggg
      </Anchor>
    </>
  );
};
