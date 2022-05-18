/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import { ArrowRight } from '../icons';
import { makeStyles } from '@griffel/react';

// import HitCounter from '../HitCounter';
// import { Link } from '../link';
// import { Spacer } from '../spacer';

const useStyles = makeStyles({
  dateWrapper: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    flexDirection: 'column',
  },

  prefix: {
    color: 'var(--color-gray-600)',
    fontSize: '13px',
    textTransform: 'uppercase',
    '@media (max-width: 563px)': {
      fontSize: '12px',
    },
  },

  title: {
    fontSize: '21px',
    fontWeight: 'var(--font-weight-medium)',
    '@media (max-width: 563px)': {
      fontSize: '18px',
    },
  },

  nextWrapper: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: '0%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
    color: 'var(--color-text)',
    textDecorationLine: 'none',
    marginRight: '0px',
    '@media (max-width: 563px)': {
      marginRight: '0',
    },
  },

  nextIcon: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    transform: 'translate(calc(100% + 8px), 0)',
    '@media (max-width: 563px)': {
      transform: 'translate(0, calc(100%))',
    },
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '32px',
  },
});

interface IContentFooter {
  publishedOn: string;
  nextPost?: any;
}
const ContentFooter = ({
  publishedOn,
}: // slug,
// hits,
// nextPost,
IContentFooter) => {
  const classes = useStyles();
  const dateElem = (
    <div className={classes.dateWrapper}>
      <h3 className={classes.prefix}>Last Updated</h3>
      <p className={classes.title}>{publishedOn}</p>
    </div>
  );

  // const nextElem = nextPost && (
  //   <Link className={classes.nextWrapper} href={nextPost.href}>
  //     <h3 className={classes.prefix}>Next up</h3>
  //     <p className={classes.title}>
  //       {nextPost.title}{' '}
  //       <ArrowRight
  //         className={classes.nextIcon}
  //         size={24}
  //         stroke="var(--color-gray-700)"
  //       />
  //     </p>
  //   </Link>
  // );

  // TODO: Come up with a better layout for this!
  // if (nextPost) {
  //   return (
  //     <Wrapper style={{ alignItems: `center` }}>
  //       {dateElem}
  //       {!!hits && (
  //         <CenterCounter>
  //           <HitCounter hits={hits} />
  //         </CenterCounter>
  //       )}
  //       {nextElem}
  //     </Wrapper>
  //   );
  // }

  return (
    <div className={classes.wrapper}>
      {dateElem}
      {/* <HitsWrapper>
        <Prefix>Hits</Prefix>
        <Spacer size={5} />
        {!!hits && <HitCounter hits={hits} />}
      </HitsWrapper> */}
    </div>
  );
};

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 32px;
// `;

// const NextWrapper = styled(Link)`
//   flex: 2;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   text-align: right;
//   color: var(--color-text);
//   text-decoration: none;
//   margin-right: 0px;

//   @media ${(p) => p.theme.breakpoints.smAndSmaller} {
//     margin-right: 0;
//   }
// `;

// const CenterCounter = styled.div`
//   flex: 1;

//   @media ${(p) => p.theme.breakpoints.mdAndSmaller} {
//     display: none;
//   }
// `;

// const Prefix = styled.h3`
//   color: var(--color-gray-600);
//   font-size: 13px;
//   text-transform: uppercase;

//   @media ${(p) => p.theme.breakpoints.smAndSmaller} {
//     font-size: 12px;
//   }
// `;

// const Title = styled.p`
//   font-size: 21px;
//   font-weight: var(--font-weight-medium);

//   @media ${(p) => p.theme.breakpoints.smAndSmaller} {
//     font-size: 18px;
//   }
// `;

// const NextIcon = styled(ArrowRight)`
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   transform: translate(calc(100% + 8px), 0);

//   @media ${(p) => p.theme.breakpoints.smAndSmaller} {
//     transform: translate(0, calc(100%));
//   }
// `;

// const HitsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* HACK: The hit counter changes height which moves the entire layout. */
//   min-height: 72px;
//   text-align: right;
// `;

export default ContentFooter;
