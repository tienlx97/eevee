import { QueryFunctionContext, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { authorKeys } from '@libs/react-query/index';
import { fetchAuthorBy } from '../services/fetchAuthorBy';
import type { UserSchema } from 'typings/schema/index';

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
const fetcher = async ({ queryKey }: QueryFunctionContext<ReturnType<typeof authorKeys['detail']>>) => {
  const [{ options }] = queryKey;

  return fetchAuthorBy({ ...options });
};

type UseAuthorProps = {
  options: {
    nick_name?: string | undefined;
    id?: string | undefined;
  };
  initialData: UserSchema;
};

export const useAuthor = ({ options, initialData }: UseAuthorProps) => {
  return useQuery(authorKeys.detail(options), fetcher, {
    enabled: Boolean(options.nick_name),
    initialData,
  });
};
