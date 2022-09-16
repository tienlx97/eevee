import * as React from 'react';
import { Outlet, useLoaderData, Await, useAsyncValue, useParams } from 'react-router-dom';

import { MiddleLayout, RightLayout } from '@layout/index';
import { Header, TabLayout, useAuthor } from '@feature/profile/index';

import { Spinner } from '@components/spinner-2/index';

import { Porfolio } from '@components/porfolio/index';
import { MorePostSkeleton } from '@feature/blog/index';
import { DeferAuthorLoader } from '@routes/index';
import type { UserSchema } from 'typings/schema/index';

const MiddleDeferHandler = () => {
  const initialData = useAsyncValue() as UserSchema;
  const { nickname } = useParams();

  const { data: authorInfo } = useAuthor({
    options: {
      nick_name: nickname,
    },
    initialData,
  });

  return (
    <>
      <Header author={authorInfo} />
      <TabLayout>
        <Outlet context={authorInfo} />
      </TabLayout>
    </>
  );
};

const RightDeferHandler = () => {
  const initialData = useAsyncValue() as UserSchema;
  const { nickname } = useParams();

  const { data: authorInfo } = useAuthor({
    options: {
      nick_name: nickname,
    },
    initialData,
  });

  return (
    <>
      <Porfolio style={{ padding: '0px 16px' }} author={authorInfo} />
      <div style={{ height: '24px' }} />
      <MorePostSkeleton />
    </>
  );
};

export const Profile = () => {
  const { author: authorInfo } = useLoaderData() as DeferAuthorLoader;

  return (
    <>
      <MiddleLayout>
        <React.Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Spinner />
            </div>
          }
        >
          <Await resolve={authorInfo}>
            <MiddleDeferHandler />
          </Await>
        </React.Suspense>
      </MiddleLayout>
      <RightLayout>
        <React.Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Spinner />
            </div>
          }
        >
          <Await resolve={authorInfo}>
            <RightDeferHandler />
          </Await>
        </React.Suspense>
      </RightLayout>
    </>
  );
};
