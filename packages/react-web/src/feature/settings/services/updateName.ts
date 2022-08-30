import { update } from '@libs/index';
import type { UserSchema } from 'typings/my-mdx/index';

export const updateName = async (name: string, id: string) => {
  const data = (
    await update<UserSchema>(
      'user',
      {
        name,
      },
      {
        id,
      },
    )
  )[0];

  return data;
};

export const updateDescription = async (description: string, id: string) => {
  const data = (
    await update<UserSchema>(
      'user',
      {
        description,
      },
      {
        id,
      },
    )
  )[0];

  return data;
};

export const updateNickname = async (nickname: string, id: string) => {
  const data = (
    await update<UserSchema>(
      'user',
      {
        nick_name: nickname,
      },
      {
        id,
      },
    )
  )[0];

  return data;
};
