import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import type { UserSchema } from 'typings/schema';
import { supabase } from '@libs/supabase/supabaseClient';
import { authorKeys } from '@libs/react-query/index';

// https://tkdodo.eu/blog/leveraging-the-query-function-context#object-query-keys
export const fetchUserByNickName = async ({
  queryKey,
}: QueryFunctionContext<ReturnType<typeof authorKeys['detail']>>) => {
  const [{ options }] = queryKey;

  const query = supabase.from<UserSchema>('user').select('*');

  if (options.nick_name) {
    query.eq('nick_name', options.nick_name);
  } else if (options.id) {
    query.eq('id', options.id);
  }

  const { data } = await query.single();

  return data;
};

type UseAuthorProps = {
  nick_name?: string;
  id?: string;
};

export const useAuthor = ({ id, nick_name }: UseAuthorProps) => {
  return useQuery(
    authorKeys.detail({
      id,
      nick_name,
    }),
    fetchUserByNickName,
    {
      enabled: Boolean(nick_name) || Boolean(id),
      useErrorBoundary: true,
    },
  );
};
