import * as React from 'react';
import useSWR from 'swr';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';

import { MiddleLayout, RightLayout } from '@layout/index';
import { Header, TabLayout } from '@feature/profile/index';

import { Spinner } from '@components/spinner-2/index';

import { getAuthorIDByNickName } from '@services/index';

export const Profile = () => {
  const { nickname } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data: author, error: getAuthorIDError } = useSWR(nickname ?? null, getAuthorIDByNickName);

  React.useEffect(() => {
    if (getAuthorIDError) {
      navigate(pathname, {
        replace: true,
        state: {
          errorStatusCode: 404,
          from: pathname,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAuthorIDError]);

  if (!author && !getAuthorIDError) {
    return (
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
    );
  }

  if (author && !getAuthorIDError) {
    return (
      <>
        <MiddleLayout>
          <Header author={author!} />
          <TabLayout>{author && <Outlet context={author} />}</TabLayout>
        </MiddleLayout>
        <RightLayout>2</RightLayout>
      </>
    );
  }

  return <></>;
};
