import { useEffect, useState } from 'react';

type OwnProps = {
  key: string;
  id: string;
  mode: string;
  boxSizing: string;
  centered?: boolean;
  stretched?: boolean;
  codeMap: {
    markup?: string;
    css?: string;
    javascript?: string;
  };
  layoutMode: string;
  isFullscreened?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle: any;
};

function useDebouncedValues(debounceBy: number, props: OwnProps) {
  const [propsInState, setPropsInState] = useState(props);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setPropsInState(props);
    }, debounceBy);

    return () => {
      window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceBy, ...Object.values(props)]);

  return propsInState;
}

export default useDebouncedValues;
export { useDebouncedValues };
