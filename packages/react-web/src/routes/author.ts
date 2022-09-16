import { authorKeys } from '@libs/react-query/index';
import { fetchAuthorBy } from '@feature/profile/services/fetchAuthorBy';
import type { UserSchema } from 'typings/schema/index';
import { QueryClient } from '@tanstack/react-query';
import { defer, LoaderFunctionArgs } from 'react-router-dom';

type AuthorProps = {
  nick_name?: string;
  id?: string;
};

export const authorQuery = ({ id, nick_name }: AuthorProps) => ({
  queryKey: authorKeys.detail({
    id,
    nick_name,
  }),
  queryFn: async () =>
    fetchAuthorBy({
      id,
      nick_name,
    }),
});

export type DeferAuthorLoader = {
  author: Promise<UserSchema | undefined>;
};

// ⬇️ needs access to queryClient
export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const query = authorQuery({
      nick_name: params.nickname,
    });

    // ⬇️ return data or fetch it
    const data = queryClient.getQueryData<UserSchema>(query.queryKey)
      ? Promise.resolve(queryClient.getQueryData<UserSchema>(query.queryKey))
      : queryClient.fetchQuery(query);

    return defer({
      author: data,
    });
  };
