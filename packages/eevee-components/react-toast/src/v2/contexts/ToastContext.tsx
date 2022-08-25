import * as React from 'react';

export type ToastMode = 'success' | 'warning' | 'error' | 'info';

export type ToastItem = {
  id: string;
  mode: ToastMode;
  message: string;
};

type ToastStateContextValue = {
  toastList: ToastItem[];
};

type ToastDispatchContextValue = {
  dispatch: React.Dispatch<ToastAction>;
};

type ToastActionType = 'ADD_TOAST' | 'DELETE_TOAST';

type ToastState = {
  toastList: ToastItem[];
};

type ToastAction = {
  type: ToastActionType;
  toast?: ToastItem;
  id?: string;
};

const ToastStateContext = React.createContext<ToastStateContextValue>({ toastList: [] });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastDispatchContext = React.createContext<ToastDispatchContextValue>({} as any);

const ToastReducer = (state: ToastState, action: ToastAction): ToastState => {
  const { type } = action;
  switch (type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toastList: [...state.toastList, action.toast!],
      };
    case 'DELETE_TOAST':
      const updateToastList = state.toastList.filter(t => t.id !== action.id);
      return {
        ...state,
        toastList: updateToastList,
      };
    default:
      throw new Error('unhandled action type');
  }
};

export const ToastProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(ToastReducer, {
    toastList: [],
  });

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={{ dispatch }}>
        {/*  */}
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

// context consumer hook
export const useToastDispatchContext = () => {
  // get the context
  const context = React.useContext(ToastDispatchContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useToastDispatchContext was used outside of its Provider');
  }

  return context;
};

export const useToastStateContext = () => {
  // get the context
  const context = React.useContext(ToastStateContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useToastStateContext was used outside of its Provider');
  }

  return context;
};
