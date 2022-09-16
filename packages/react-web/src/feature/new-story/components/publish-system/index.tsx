import * as React from 'react';
import { ButtonR } from '@eevee/react-button';
import { Close } from '@components/icons/Close';
import { useBlurStyles, useContentwrapper, useHeaderStyles } from './styles';
import { mergeClasses } from '@griffel/react';

type PublishSystemProps = {
  show: boolean;
  onClose: () => void;
};

export const PublishSystem: React.FC<PublishSystemProps> = ({ show, onClose, children }) => {
  const blurStyles = useBlurStyles();
  const contentWrapperStyles = useContentwrapper();
  const headerStyles = useHeaderStyles();
  return (
    // root
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={{
        visibility: show ? 'visible' : 'hidden',
      }}
    >
      {/* blur */}
      <div
        onClick={onClose}
        aria-hidden={show ? 'false' : 'true'}
        role="presentation"
        className={mergeClasses(
          //
          blurStyles.root,
          blurStyles.notShow,
          show && blurStyles.show,
        )}
      />
      {/* wrapper */}
      <div
        aria-hidden={show ? 'false' : 'true'}
        className={mergeClasses(
          //
          contentWrapperStyles.root,
          contentWrapperStyles.queryNotShow,
          show && contentWrapperStyles.queryShow,
        )}
      >
        {/* header */}
        <div className={headerStyles.root}>
          <div className={headerStyles.title}>Advance</div>
          <ButtonR onClick={onClose} icon={<Close />} />
        </div>
        {/* content */}
        <div>{children}</div>
      </div>
    </div>
  );
};
