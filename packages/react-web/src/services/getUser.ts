import { supabase } from '../libs/index';
import type { UserSchema1 } from 'typings/my-mdx/index';

export const getUser = async (id: string) => {
  const { data: user } = await supabase.from<UserSchema1>('user').select().eq('id', id).single();
  return user;
};

export const getAuthorIDByNickName = async (nickName: string) => {
  const { data, error } = await supabase.from<UserSchema1>('user').select('*').eq('nick_name', nickName).single();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error('sth wrong');
  }

  return data;
};
