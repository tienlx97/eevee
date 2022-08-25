import { shortcutDate } from '@utilities/shortcutDate';

export const setDefaultDate = () => shortcutDate(new Date(new Date().getTime() + 36e5));
export const setDefaultMinDate = () => shortcutDate(new Date(Number(new Date()) + 3e5));
export const setDefaultMaxDate = () => shortcutDate(new Date(2099, 11, 31));
