export const NAV_WIDTH = 50;

export const NAV_HEIGHT = 56;

export const MAX_PAGE_WIDTH = '1504px';

export const IOS_BOTTOM_PADDING = 'env(safe-area-inset-bottom)';

export const THEME_MAPPING = {
  light: 'light',
  dark: 'dark',
};

export const COMMENT_WIDTH = '414px';

export const REPO = process.env.NODE_ENV === 'production' ? 'yugi0h/mimikyu_content' : 'yugi0h/mimikyu_content_dev';
export const REPO_ID = process.env.NODE_ENV === 'production' ? 'R_kgDOH5nf4A' : 'R_kgDOH5nV_w';
export const CATEGORY = 'Announcements';
export const CATEGORY_ID = process.env.NODE_ENV === 'production' ? 'DIC_kwDOH5nf4M4CRHET' : 'DIC_kwDOH5nV_84CRHD1';

export const bottomHeight = `calc(${NAV_HEIGHT + 10}px + env(safe-area-inset-bottom))`;
