import React from 'react';

export interface IListItemsProps extends React.LiHTMLAttributes<HTMLLIElement> {
  animated?: boolean;
  bullet?: 'default' | 'fullStar';
}
export type IconProps = {
  [x: string]: () => JSX.Element;
};

export interface IListProps
  extends React.AllHTMLAttributes<HTMLOListElement | HTMLUListElement> {
  type?: 'unordered' | 'ordered' | 'original';
}
