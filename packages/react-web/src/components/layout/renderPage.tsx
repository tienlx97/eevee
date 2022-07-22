import * as React from 'react';
import { NavBar } from '../navbar/NavBar';
import { Main } from '../main/index';
import { Right } from '../right/Right';
import { PageSlot, PageState } from './Page.types';
import { getSlots } from '@eevee/react-utilities';
import { BlogContextProvider } from '../../contexts/BlogContext';

export const renderPage = (state: PageState) => {
  const { hide } = state;
  const { slots, slotProps } = getSlots<PageSlot>(state);
  return (
    <slots.root {...slotProps.root}>
      <NavBar />
      <BlogContextProvider>
        <Main>{slotProps.root.children}</Main>
        {!hide && <Right />}
      </BlogContextProvider>
      {/* {!!hide && <Right />} */}
    </slots.root>
  );
};
