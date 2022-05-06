import { createContext } from 'react';

type OwnProps = {
  disableTabInCodeSnippets: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ConfigContext = createContext<OwnProps>({} as any);
