import * as React from 'react';
import { List, ListProps } from './components/list/index';
/* ====== */
export { listClassname } from './components/list/index';
export const Ul = (props: ListProps) => <List {...props} type="unordered" />;
export const Ol = (props: ListProps) => <List {...props} type="ordered" />;
