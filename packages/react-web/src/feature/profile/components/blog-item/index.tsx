import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { Link } from 'react-router-dom';
import { tokens, breakPoints } from '@eevee/react-theme';
import { Tag } from '@components/tag/index';
import { ButtonR } from '@eevee/react-button';
import { ThreeDot, Save } from '@components/icons/index';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    '& a': {
      color: 'inherit',
      textDecorationLine: 'none',
    },
  },

  divider: {
    ...shorthands.margin(0),
    ...shorthands.border(0),
    height: '1px',
    backgroundColor: tokens.b2,
  },

  pt24: {
    paddingTop: '24px',
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },

  flexWrap: {
    display: 'flex',
    width: '100%',
    flexWrap: 'nowrap',
  },

  flex0: {
    ...shorthands.flex(0, 0, 'auto'),
  },

  publishDateText: {
    fontSize: '14px',
    lineHeight: '20px',
  },

  mt12: {
    marginTop: '12px',
  },

  flex: {
    display: 'flex',
  },
});

const useBlogTextStyles = makeStyles({
  root: {
    ...shorthands.flex(1, 1, 'auto'),
    wordBreak: 'break-word',
  },

  title: {
    color: tokens.f10,
    fontWeight: 700,
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',

    [`@media ${breakPoints.lgAndLarger}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media ${breakPoints.lg}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media (orientation: landscape) and (max-width: 903.98px)`]: {
      maxHeight: 'none',
    },

    [`@media ${breakPoints.md}`]: {
      WebkitLineClamp: 3,
      maxHeight: '84px',
      lineHeight: '28px',
      fontSize: '24px',
      letterSpacing: 0,
      paddingBottom: '8px',
    },

    [`@media ${breakPoints.sm}`]: {
      WebkitLineClamp: 2,
      maxHeight: '40px',
      lineHeight: '20px',
      fontSize: '16px',
      letterSpacing: 0,
      paddingBottom: 0,
    },

    [`@media ${breakPoints.xs}`]: {
      WebkitLineClamp: 2,
      maxHeight: '40px',
      lineHeight: '20px',
      fontSize: '16px',
      letterSpacing: 0,
      paddingBottom: 0,
    },
  },

  subtitleWrapper: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  subtitleText: {
    fontSize: '16px',
    lineHeight: '24px',
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    maxHeight: '72px',
    WebkitLineClamp: 3,
    letterSpacing: 0,

    [`@media (orientation: landscape) and (max-width: 903.98px)`]: {
      maxHeight: 'none',
    },
  },

  optionWrapper: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.lg}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.md}`]: {
      ...shorthands.padding('32px', 0),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.padding('16px', 0),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.padding('16px', 0),
    },
  },

  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  flex1Center: {
    display: 'flex',
    ...shorthands.flex(1, 1, 'auto'),
    alignItems: 'center',
  },

  pr8: {
    paddingRight: '8px',
  },

  flex: {
    display: 'flex',
  },
});

const useBlogImageStyles = makeStyles({
  root: {
    '& img': {
      maxWidth: 'fit-content',
    },

    [`@media ${breakPoints.lgAndLarger}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.lg}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.md}`]: {
      marginLeft: '60px',
    },

    [`@media ${breakPoints.sm}`]: {
      marginLeft: '24px',
    },

    [`@media ${breakPoints.xs}`]: {
      marginLeft: '24px',
    },
  },

  mediaQueryWeb: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.lg}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.md}`]: {
      display: 'block',
    },

    [`@media ${breakPoints.sm}`]: {
      display: 'none',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'none',
    },
  },

  mediaQueryMobile: {
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
      display: 'block',
    },

    [`@media ${breakPoints.xs}`]: {
      display: 'block',
    },
  },
});

export const BlogItem = ({ firstItem = false }: { firstItem?: boolean }) => {
  const styles = useStyles();
  const blogTextStyles = useBlogTextStyles();
  const blogImageStyles = useBlogImageStyles();
  return (
    <article className={styles.root}>
      {!firstItem && <hr className={styles.divider} />}
      <div>
        {/* padding top 24*/}
        {!firstItem && <div className={styles.pt24} />}
        {/* publish_date */}
        {/* <div className={styles.flexCenter}>
          <div className={styles.flexWrap}>
            <div className={styles.flex0}>
              <Link to="">
                <span className={styles.publishDateText}>Apr 26, 2020</span>
              </Link>
            </div>
          </div>
        </div> */}
        <Link to="">
          <span className={styles.publishDateText}>Apr 26, 2020</span>
        </Link>
        <div className={styles.mt12}>
          <div className={styles.flex}>
            {/* text */}
            <div className={blogTextStyles.root}>
              {/* title - subtitle */}
              <div>
                <Link to="">
                  <h2 className={blogTextStyles.title}>A workplace where gags don't work</h2>
                  <div className={blogTextStyles.subtitleWrapper}>
                    <p className={blogTextStyles.subtitleText}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries…
                    </p>
                  </div>
                </Link>
              </div>
              {/* Read time - tag - save - more */}
              <div className={blogTextStyles.optionWrapper}>
                <div className={blogTextStyles.flexBetween}>
                  {/* Tag - read time */}
                  <div className={blogTextStyles.flex1Center}>
                    <div className={blogTextStyles.pr8}>
                      <Tag tag={'react'} />
                      <Link to="">
                        <span className={styles.publishDateText}>2 min read</span>
                      </Link>
                    </div>
                  </div>
                  <div className={blogTextStyles.flex}>
                    <ButtonR style={{ marginRight: '16px' }} aria-label="Save" title="Save" icon={<Save />} />
                    <ButtonR aria-label="Actions" title="Actions" icon={<ThreeDot />} />
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div className={blogImageStyles.root}>
              <Link aria-label="Post Preview Image" rel="noopener follow" to="">
                <div className={blogImageStyles.mediaQueryWeb}>
                  <img
                    src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275"
                    width={112}
                    height={112}
                    alt="Các bộ thủ cơ bản trong tiếng Nhật"
                  />
                </div>
                <div className={blogImageStyles.mediaQueryMobile}>
                  <img
                    src="https://miro.medium.com/fit/c/56/56/0*kai0vdVtN2NxFvW_"
                    width={56}
                    height={56}
                    alt="Các bộ thủ cơ bản trong tiếng Nhật"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
