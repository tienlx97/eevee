import { supabase } from '@libs/index';
import type { UserSchema1 } from 'typings/my-mdx/index';

export const validateNickname = async (nickname: string) => {
  const { count } = await supabase.from('user').select('*', { count: 'exact' }).eq('nick_name', nickname);

  return count === 0 ? true : false;
};
