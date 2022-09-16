import type { UserSchema } from 'typings/schema/index';
import { supabase } from '@libs/index';

export const fetchAuthorBy = async ({ id, nick_name }: { id?: string; nick_name?: string }) => {
  const query = supabase.from<UserSchema>('user').select('*');

  if (nick_name) {
    query.eq('nick_name', nick_name);
  } else if (id) {
    query.eq('id', id);
  }

  const { data } = await query.single();

  if (data === null) {
    throw new Error('Author is empty');
  }

  return data;
};
