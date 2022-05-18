import React from 'react';

interface IExpanded {
  originalType?: 'expanded';
  children: React.ReactNode;
}

const Expanded = ({ children }: IExpanded) => {
  return <>{children}</>;
};

export { Expanded };
