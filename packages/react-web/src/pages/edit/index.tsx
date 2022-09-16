import * as React from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { DeferEditLoader } from '@routes/edit';
import { Spinner } from '@components/spinner-2/index';
import { NewStory } from '../v2/new-story/index';

export const Edit = () => {
  const { blog: blogInfo } = useLoaderData() as DeferEditLoader;

  return (
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
      <Await resolve={blogInfo}>
        <NewStory type="edit" />
      </Await>
    </React.Suspense>
  );
};
