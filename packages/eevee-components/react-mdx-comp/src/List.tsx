import * as React from 'react';
import { List, ListProps } from './components/list/index';
// /* ====== */
// export { listClassname } from './components/list/index';
// export {} from "./components/l"
export const Ul = (props: ListProps) => <List {...props} type="unordered" />;
export const Ol = (props: ListProps) => <List {...props} type="ordered" />;

export * from './components/list/index';
