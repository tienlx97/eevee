import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';
import { useBlogContext } from '@context/index';
import { Link } from 'react-router-dom';
import { toDate } from '@utilities/toDate';
import type { Post } from 'typings/my-mdx/index';
import { CopyLink, Facebook, LinkedIn, Save, Twitter } from '@components/icons/index';
import { LinkIcon } from '@eevee/react-link';
import { ButtonR, Button } from '@eevee/react-button';

const useRootStyles = makeStyles({
  root: {
    display: 'block',
    [`@media ${breakPoints.lgAndLarger}`]: {
      marginTop: '56px',
      marginBottom: '32px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.md}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginTop: '32px',
      marginBottom: '24px',
    },
  },

  'mr-8': {
    marginRight: '8px',
  },
});

const useAvatarStyles = makeStyles({
  root: {
    width: '48px',
    height: '48px',
    ...shorthands.borderRadius('50%'),
  },
});

const useDisplayStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  flex: {
    display: 'flex',
  },

  itemCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  block: {
    display: 'block',
  },

  'mr-16': {
    marginRight: '16px',
  },
});

const useReadTimeStyles = makeStyles({
  root: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
  },
});

const useDotStyles = makeStyles({
  root: {
    display: 'inline-block',
    ...shorthands.padding('0', '8px'),
  },

  dot: {
    color: tokens.f1,
  },
});

const useSocialStyles = makeStyles({
  web: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.lg}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.md}`]: {
      display: 'inline-flex',
    },
    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },
    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  mobile: {
    paddingTop: '24px',

    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'inline-flex',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'inline-flex',
    },
  },
});

const Dot = () => {
  const dotStyles = useDotStyles();
  return (
    <div className={dotStyles.root}>
      <span className={dotStyles.dot}>·</span>
    </div>
  );
};

const AuthorReadTime = ({ post }: { post: Post }) => {
  const readTimeStyles = useReadTimeStyles();
  return (
    <div>
      <div>{(post.frontmatter.author as any)[0]}</div>
      <div className={readTimeStyles.root}>
        <p>{toDate(post.frontmatter.date)}</p>
        <Dot />
        <div>{post.readTime.text}</div>
        <Dot />
        <div>{post.readTime.words} words</div>
      </div>
    </div>
  );
};

const CircleAvatar = ({ post }: { post: Post }) => {
  const displayStyles = useDisplayStyles();
  const avatarStyles = useAvatarStyles();
  return (
    <div className={displayStyles['mr-16']}>
      <Link to="" rel="noopener follow">
        <img
          width={48}
          height={48}
          className={avatarStyles.root}
          src="https://avatars.githubusercontent.com/u/25848009?s=400&u=ed68400f7edbffc18c7e0e373749e5451c335998&v=4"
        />
      </Link>
    </div>
  );
};

type SocialListProps = JSX.IntrinsicElements['div'] & {
  before?: boolean;
};

const SocialList: React.FC<SocialListProps> = ({ children, before = false, ...props }) => {
  const displayStyles = useDisplayStyles();

  return (
    <div className={displayStyles.itemCenter}>
      <div {...props}>
        {before && children}
        <LinkIcon aria-label="Facebook" title="Share on Facebook" icon={<Facebook />} href="/" />
        <LinkIcon aria-label="Twitter" title="Share on Twitter" icon={<Twitter />} href="/" />
        <LinkIcon aria-label="LinkedIn" title="Share on LinkedIn" icon={<LinkedIn />} href="/" />
        <LinkIcon aria-label="Copy link" title="Copy link" icon={<CopyLink />} href="/" />
        {!before && children}
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export function PostHeader() {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();
  const socialListStyles = useSocialStyles();

  const { content } = useBlogContext();

  const post = content?.read();

  return post ? (
    <div className={rootStyles.root}>
      {/* > mobile */}
      <div className={displayStyles.root}>
        <div className={displayStyles.flex}>
          <CircleAvatar post={post} />
          <AuthorReadTime post={post} />
        </div>
        <SocialList className={socialListStyles.web}>
          <LinkIcon style={{ margin: '0px 4px 0px 28px' }} aria-label="Save" title="Save" icon={<Save />} href="/" />
        </SocialList>
      </div>
      {/* <= mobile */}
      <SocialList className={socialListStyles.mobile} before={true}>
        <Button
          iconPosition="before"
          appearance="unstyled"
          shape="circular"
          icon={{ as: 'span', className: rootStyles['mr-8'], children: <Save /> }}
        >
          Save
        </Button>
      </SocialList>
    </div>
  ) : (
    <></>
  );
}

// {/* <LinkIcon style={{ margin: '0px 4px 0px 28px' }} aria-label="Save" title="Save" icon={<Save />} href="/" /> */}
