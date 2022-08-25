import { supabase } from '@libs/index';
import { User } from '@supabase/supabase-js';
import type { UserSchema } from 'typings/my-mdx/index';
import { slugify } from '@eevee/react-utilities';
import { getUser } from './getUser';
import { generateHash } from '@utilities/index';

export const createUser = async (user: User) => {
  const { id } = user;

  const author = await getUser(id);

  if (!author) {
    // add new author
    const { avatar_url, email, name } = user.user_metadata;

    const { body: newAuthor } = await supabase.from<UserSchema>('user').insert(
      {
        id,
        email,
        name,
        nick_name: `${slugify((email as string).split('@')[0])}${generateHash(3)}`,
        photo_url: avatar_url,
      },
      {
        returning: 'minimal',
      },
    );

    return newAuthor?.[0];
  }

  return author;
};
