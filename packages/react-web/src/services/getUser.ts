import { supabase } from '../libs/index';
import type { UserSchema } from 'typings/my-mdx/index';

export const getUser = async (id: string) => {
  const { data: user } = await supabase.from<UserSchema>('user').select().eq('id', id).single();
  return user;
};

export const getAuthorIDByNickName = async (nickName: string) => {
  const { data, error } = await supabase
    .from<UserSchema>('user')
    .select('id, nick_name, photo_url')
    .eq('nick_name', nickName)
    .single();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('sth wrong');
  }

  return data;
};
