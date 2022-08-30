import * as React from 'react';
import { useAuthContext } from '@context/AuthContext';
import { ButtonR } from '@eevee/react-button';
import { User } from '@components/icons/User';
import { Spinner } from '@components/spinner-2/index';
import { Menu, MenuPopover, MenuTrigger, MenuList, MenuItem } from '@eevee/react-menu';
import { tokens } from '@eevee/react-theme';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

export const ToggleAuthor = () => {
  const { signIn, signOut, isLoaded, user } = useAuthContext();
  const navigate = useNavigate();
  const styles = useStyles();

  if (isLoaded) {
    return <Spinner />;
  }

  if (!user) {
    return <ButtonR aria-label={'Login'} title={'Login'} onClick={signIn} icon={<User />} />;
  }

  const onViewProfile = () => navigate(`/@${user.nick_name}`);
  const onViewSettings = () => navigate(`/me/settings`);

  return (
    <Menu>
      <MenuTrigger>
        <div>
          <ButtonR
            aria-label={'User option menu'}
            title={'User option menu'}
            icon={<img alt={user.name} className={styles.circleAvatar} src={user.photo_url} width={24} height={24} />}
          />
        </div>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem disabled className={styles.menuItemFirst}>
            Mimikyu Partner Program
          </MenuItem>
          <MenuItem disabled className={styles.menuItem}>
            Gift a membership
          </MenuItem>
          <hr className={styles.divider} />
          <MenuItem className={styles.menuItem} onClick={signOut}>
            Sign out
          </MenuItem>
          <MenuItem disabled className={styles.menuItem}>
            Refine recommendations
          </MenuItem>
          <MenuItem disabled className={styles.menuItem}>
            Manage publications
          </MenuItem>
          <MenuItem disabled className={styles.menuItem}>
            Stats
          </MenuItem>
          <MenuItem onClick={onViewSettings} className={styles.menuItem}>
            Settings
          </MenuItem>
          <hr className={styles.divider} />
          <MenuItem onClick={onViewProfile} className={styles.menuItem}>
            View profile
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
