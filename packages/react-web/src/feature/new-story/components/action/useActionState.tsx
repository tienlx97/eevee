import * as React from 'react';
import type { ActionState } from './Action.types';
import { Draft, Edit, Preview, Publish } from '@components/icons/index';

export const useActionState = (state: ActionState): ActionState => {
  const { onEditPreviewChange } = state;
  const [isOpenPreview, setOpenPreview] = React.useState(false);

  state.publish.icon = <Publish />;
  state.publish['aria-label'] = 'Publish';
  state.publish.children = 'Publish';

  state.editOrPreview.icon = isOpenPreview ? <Edit /> : <Preview />;
  state.editOrPreview['aria-label'] = !isOpenPreview ? 'Edit mode' : 'Preview mode';
  state.editOrPreview.children = !isOpenPreview ? 'View' : 'Edit';

  state.editOrPreview.onClick = () => {
    setOpenPreview(!isOpenPreview);
    onEditPreviewChange?.(isOpenPreview);
  };

  return state;
};
