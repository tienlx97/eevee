import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePersistedState(defaultValue: string, key: any) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
