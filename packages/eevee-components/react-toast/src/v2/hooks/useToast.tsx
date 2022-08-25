import { ToastMode, useToastDispatchContext } from '../contexts/ToastContext';
import { genTimeStampHash } from '@eevee/react-utilities';

export const useToast = () => {
  const { dispatch } = useToastDispatchContext();

  const toast = (mode: ToastMode, message: string, autoClose = true, closeTime?: number) => {
    const id = genTimeStampHash();

    dispatch({ type: 'ADD_TOAST', toast: { mode, message, id } });

    if (autoClose) {
      setTimeout(() => {
        dispatch({ type: 'DELETE_TOAST', id: id });
      }, closeTime || 3000);
    }
  };

  return toast;
};
