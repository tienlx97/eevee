import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { TextLink } from '@eevee/react-link';
import { Button } from '@eevee/react-button';
import { breakPoints, tokens } from '@eevee/react-theme';
import { useAuthContext } from '@context/AuthContext';
import { Paragraph, TextButton } from '../../medium/index';
import { NotificationRegularIcon, Story, Stat } from '../../icons/index';

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg1,
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: '56px',
    overflowX: 'auto',
    // ...shorthands.overflow('scroll'),
  },

  circleAvatar: {
    ...shorthands.borderRadius('50%'),
  },

  query: {
    ...shorthands.margin(0, 'auto'),
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.sm}`]: {
      maxWidth: '692px',
    },

    [`@media ${breakPoints.xs}`]: {
      maxWidth: '100%',
    },
  },

  divider: {
    height: '1px',
    ...shorthands.border(0),
    marginBottom: '24px',
    backgroundColor: tokens.b2,
  },
});

const useItemStyles = makeStyles({
  nameProfileWrapper: {
    marginBottom: '24px',
  },

  nameWrapper: {
    marginBottom: '24px',
  },

  px24: {
    ...shorthands.padding(0, '24px'),
  },

  ml24: {
    marginLeft: '24px',
  },

  li: {
    listStyleType: 'none',
    ...shorthands.padding(0, '24px'),
    marginBottom: '24px',

    // '& svg': {
    //   fill: 'currentcolor',
    // },
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
  },
});

type LaunchPadMenuProps = {
  setOpen: (e: boolean) => void;
};

export const LaunchPadMenu = ({ setOpen }: LaunchPadMenuProps) => {
  const styles = useStyles();
  const itemStyles = useItemStyles();
  const { user, signOut } = useAuthContext();

  const onResetOpen = () => setOpen(false);
  const onSignOut = () => {
    signOut();
    onResetOpen();
  };

  return (
    <div className={styles.root}>
      <div id="launchpadMenu" className={styles.query}>
        <div style={{ height: '40px' }} />
        <ul>
          <ul>
            <li className={itemStyles.px24}>
              <div className={itemStyles.nameProfileWrapper}>
                <div className={itemStyles.nameWrapper}>
                  <Paragraph>{user?.name}</Paragraph>
                  <Paragraph type="minimal">{user?.email}</Paragraph>
                </div>
                <TextButton onClick={onResetOpen} to={`/@${user?.nick_name}`}>
                  <div>View profile</div>
                </TextButton>
              </div>
            </li>
          </ul>
          <hr className={styles.divider} />
          <ul>
            <li className={itemStyles.li}>
              <TextLink onClick={onResetOpen} href="/notification" appearance="medium">
                <div className={itemStyles.flex}>
                  <NotificationRegularIcon fill="currentColor" />
                  <div className={itemStyles.ml24}>Notifications</div>
                </div>
              </TextLink>
            </li>

            <li className={itemStyles.li}>
              <TextLink disabled onClick={onResetOpen} href="/me/stories" appearance="medium">
                <div className={itemStyles.flex}>
                  <Story />
                  <div className={itemStyles.ml24}>Stories</div>
                </div>
              </TextLink>
            </li>

            <li className={itemStyles.li}>
              <TextLink disabled onClick={onResetOpen} href="" appearance="medium">
                <div className={itemStyles.flex}>
                  <Stat />
                  <div className={itemStyles.ml24}>Stats</div>
                </div>
              </TextLink>
            </li>
          </ul>
          <hr className={styles.divider} />
          <ul>
            <li className={itemStyles.li}>
              <TextLink onClick={onResetOpen} href="/me/settings" appearance="medium">
                <div>Settings</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <TextLink disabled href="" appearance="medium">
                <div>Manage publications</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <TextLink disabled onClick={onResetOpen} href="" appearance="medium">
                <div>Refine recommendations</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <Button style={{ padding: '0' }} onClick={onSignOut}>
                Sign out
              </Button>
            </li>
          </ul>
          <hr className={styles.divider} />
          <ul>
            <li className={itemStyles.li}>
              <TextLink disabled onClick={onResetOpen} href="" appearance="medium">
                <div>Mimikyu Partner Program</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <TextLink disabled onClick={onResetOpen} href="" appearance="medium">
                <div>Gift a menbership</div>
              </TextLink>
            </li>
          </ul>
          <hr className={styles.divider} />
          <ul>
            <li className={itemStyles.li}>
              <TextLink onClick={onResetOpen} href="" appearance="medium">
                <div>Helps</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <TextLink onClick={onResetOpen} href="" appearance="medium">
                <div>Privacy</div>
              </TextLink>
            </li>
            <li className={itemStyles.li}>
              <TextLink onClick={onResetOpen} href="" appearance="medium">
                <div>Terms</div>
              </TextLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
