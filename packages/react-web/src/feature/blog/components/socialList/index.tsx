import * as React from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { ButtonR } from '@eevee/react-button';
import { CopyLink, Facebook, LinkedIn, Save, Twitter } from '@components/icons/index';

type SocialListProps = JSX.IntrinsicElements['div'] & {
  before?: boolean;
};

const useRootStyles = makeStyles({
  itemCenter: {
    display: 'flex',
    alignItems: 'center',
  },
});

const useSkeletonStyles = makeStyles({
  root: {
    width: '24px',
    height: '24px',
    alignSelf: 'center',
    marginRight: '12px',
    marginBottom: '0px',
  },
});

export const SocialListSkeleton: React.FC<SocialListProps> = ({ children, before = false, ...props }) => {
  const styles = useRootStyles();
  const skeletonStyles = useSkeletonStyles();

  return (
    <div className={styles.itemCenter}>
      <div {...props}>
        {before && children}
        <div className={mergeClasses(skeletonStyles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(skeletonStyles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(skeletonStyles.root, 'skeleton-line', 'heading')} />
        <div className={mergeClasses(skeletonStyles.root, 'skeleton-line', 'heading')} />
        {!before && children}
      </div>
    </div>
  );
};

export const SocialList: React.FC<SocialListProps> = ({ children, before = false, ...props }) => {
  const styles = useRootStyles();

  return (
    <div className={styles.itemCenter}>
      <div {...props}>
        {before && children}
        <ButtonR aria-label="Facebook" title="Share on Facebook" icon={<Facebook />} />
        <ButtonR aria-label="Twitter" title="Share on Twitter" icon={<Twitter />} />
        <ButtonR aria-label="LinkedIn" title="Share on LinkedIn" icon={<LinkedIn />} />
        <ButtonR aria-label="Copy link" title="Copy link" icon={<CopyLink />} />
        {!before && children}
      </div>
    </div>
  );
};
