import { QueryFunctionContext } from '@tanstack/react-query';

export const blogKeys = {
  all: [{ entity: 'blogs' }] as const,

  lists: () => [{ ...blogKeys.all[0], scope: 'lists' }] as const,
  list: (options: { nick_name?: string }) => [{ ...blogKeys.lists()[0], options }] as const,

  details: () => [{ ...blogKeys.all[0], scope: 'detail' }] as const,
  detail: (slug?: string) => [{ ...blogKeys.details()[0], slug }] as const,
};

export const authorKeys = {
  all: [{ entity: 'authors' }] as const,

  details: () => [{ ...authorKeys.all[0], scope: 'detail' }] as const,
  detail: (options: { nick_name?: string; id?: string }) => [{ ...authorKeys.details()[0], options }] as const,
};
