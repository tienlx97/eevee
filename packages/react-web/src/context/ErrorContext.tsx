import * as React from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import { PageNotFound } from '../pages/page-not-found/PageNotFound';

export type ErrorContextValue = {
  setErrorStatusCode: (val: number) => void;
};

const ErrorContext = React.createContext<ErrorContextValue | undefined>(undefined);

export const ErrorStatusContextProvider: React.FC = ({ children }) => {
  const history = React.useContext(UNSAFE_NavigationContext).navigator as any;
  const [errorStatusCode, setErrorStatusCode] = React.useState<number>();

  const renderContent = () => {
    switch (errorStatusCode) {
      case 404:
        return <PageNotFound />;
      default:
        return children;
    }
  };

  React.useEffect(() => {
    const unlisten = history.listen(() => setErrorStatusCode(undefined));

    return unlisten;
  }, [history]);

  // We wrap it in a useMemo for performance reasons. More here:
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value/
  const contextPayload = React.useMemo(() => {
    return { setErrorStatusCode };
  }, [setErrorStatusCode]);

  // We expose the context's value down to our components, while
  // also making sure to render the proper content to the screen
  return <ErrorContext.Provider value={contextPayload}>{renderContent()}</ErrorContext.Provider>;
};

// context consumer hook
export const useErrorStatusContext = () => {
  // get the context
  const context = React.useContext(ErrorContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useErrorStatusContext was used outside of its Provider');
  }

  return context;
};

// https://www.newline.co/@3nvi/centralizing-api-error-handling-in-react-apps--80296494
