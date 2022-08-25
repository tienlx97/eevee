import { supabase } from '../libs/index';
import type { UserSchema } from 'typings/my-mdx/index';

export const getUser = async (id: string) => {
  const { data: user } = await supabase.from<UserSchema>('user').select().eq('id', id).single();
  return user;
};
