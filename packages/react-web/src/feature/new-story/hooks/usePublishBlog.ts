import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '@context/AuthContext';
import { publishBlogBy } from '../services/publishBlogBy';
import { blogKeys } from '@libs/react-query/index';

export const usePublishBlog = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  return useMutation(publishBlogBy, {
    onSuccess: () => {
      queryClient.invalidateQueries(
        blogKeys.list({
          nick_name: user?.nick_name,
        }),
      );
    },
  });
};
