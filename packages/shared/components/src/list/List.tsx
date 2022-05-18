import React from 'react';

import { useSpring, animated as Animated } from '@react-spring/web';

import { TIGHT_SPRING } from '@vaporeon/constants';
import { usePrefersReducedMotion } from '@vaporeon/hooks';

import { ArrowRight, Star } from '../icons';
// import { InfoSidenote, WarningSidenote, SuccessSidenote } from '../sidenote';
import { makeStyles, mergeClasses } from '@griffel/react';
import { IconProps, IListItemsProps, IListProps } from './List.types';

import './List.css';

interface IListContext {
  type: string;
}
const ListContext = React.createContext<IListContext>({} as IListContext);

const DefaultIcon = () => <ArrowRight size={20} />;
const FullStarIcon = () => <Star size={20} />;

const useListStyles = makeStyles({
  originalOrderedList: {
    paddingLeft: '22px',
    marginBottom: '32px',
    fontSize: '19px',

    '& li': {
      marginBottom: '16px',
    },
  },

  unorderedListElem: {
    fontSize: '19px',
    marginBottom: '32px',
    listStyleType: 'none',

    /* For nested list items, add top margin as well */
    // 'ul & ': {
    //   marginTop: '16px',
    // },

    '@media (max-width: 563px)': {
      fontSize: '18px',
      marginBottom: '1.5rem',
    },
  },

  orderedListElem: {
    '--counter-name': 'counts',

    fontSize: '19px',
    marginBottom: '32px',
    counterReset: 'counts',
    listStyleType: 'none',

    '& li': {
      counterIncrement: 'counts',
      alignItems: 'baseline',
    },

    // '& li::before': {
    //   content: "counters(var(--counter-name), '.') '. '",
    //   fontFeatureSettings: "'tnum'",
    //   color: 'var(--color-primary)',
    //   fontWeight: 'var(--font-weight-medium)',
    //   paddingRight: '12px',
    // },

    '@media (max-width: 563px)': {
      fontSize: '18px',
      marginBottom: '1.5rem',
    },
  },
});

const useListItemStyles = makeStyles({
  wrapper: {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'flex-start',

    '&:last-of-type': {
      marginBottom: '0',
    },

    // '.sn__wrapper--info & ,  .sn__wrapper--warning &, .sn__wrapper--success & ': {
    //   fontSize: '17px',
    //   marginBottom: '8px',
    // },
  },

  listItemContents: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
  },

  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '16px',
    paddingTop: '0',
    color: 'var(--color-primary)',
  },
});

const ICONS: IconProps = {
  default: DefaultIcon,
  fullStar: FullStarIcon,
};

const ListItem = ({
  bullet = 'default',
  animated,
  children,
  className,
  ...delegated
}: IListItemsProps) => {
  const styles = useListItemStyles();
  const classes = mergeClasses(styles.wrapper, 'list_wrapper', className);

  const { type } = React.useContext(ListContext);

  const prefersReducedMotion = usePrefersReducedMotion();

  const IconComponent = ICONS[bullet];
  const [isHovering, setIsHovering] = React.useState(false);

  const iconSpring = useSpring(
    animated && !prefersReducedMotion
      ? {
          transform: isHovering
            ? `translateY(5px) translateX(8px)`
            : `translateY(5px) translateX(0px)`,
          config: TIGHT_SPRING,
        }
      : { transform: 'translateY(5px)' }
  );

  if (type === 'original') {
    return <li>{children}</li>;
  }

  if (type === 'ordered') {
    return (
      <li className={classes} {...delegated}>
        <div className={styles.listItemContents}>{children}</div>
      </li>
    );
  }

  return (
    <li className={classes} {...delegated}>
      <Animated.span className={styles.iconWrapper} style={iconSpring}>
        <IconComponent />
      </Animated.span>
      {/*
        This interaction is purely decorative, and is not required for
        folks using the keyboard or a screen-reader.
      */}
      <div
        className={styles.listItemContents}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </div>
    </li>
  );
};

const List = ({
  type = 'unordered',
  className = '',
  ...delegated
}: IListProps) => {
  const styles = useListStyles();

  return (
    <ListContext.Provider value={{ type }}>
      {type === 'ordered' && (
        <ol
          {...delegated}
          className={mergeClasses(
            styles.orderedListElem,
            'list__orderedlist--elem',
            className
          )}
        />
      )}
      {type === 'unordered' && (
        <ul
          {...delegated}
          className={mergeClasses(
            styles.unorderedListElem,
            'list__unorderedlist--elem',
            className
          )}
        />
      )}
      {type === 'original' && (
        <ol
          {...delegated}
          className={mergeClasses(styles.originalOrderedList, className)}
        />
      )}
    </ListContext.Provider>
  );
};

List.ListItem = ListItem;

export default List;

const r = {
  ul: (props: IListProps) => <List type="unordered" {...props} />,
  ol: (props: IListProps) => <List type="ordered" {...props} />,
  li: List.ListItem,
};

export { r };
