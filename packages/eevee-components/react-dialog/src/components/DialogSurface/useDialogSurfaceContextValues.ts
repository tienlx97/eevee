import type { DialogSurfaceContextValues, DialogSurfaceState } from './DialogSurface.types';
import type { DialogSurfaceContextValue } from '../../contexts/index';

export function useDialogSurfaceContextValues(state: DialogSurfaceState): DialogSurfaceContextValues {
  const dialogSurface: DialogSurfaceContextValue = true;

  return { dialogSurface };
}
