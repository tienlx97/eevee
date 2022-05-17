type LayoutMode =
  | 'codepen'
  | 'sidebyside_wrapper'
  | 'tabbed'
  | 'vertical-stack';

export interface IPlaygroundProps {
  id: string;
  title?: string;
  html?: string;
  css?: string;
  js?: string;
  mode?: string;
  layoutMode: LayoutMode;
  centered?: boolean;
  boxSizing?: string;
  splitRatio?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle?: any;
  stacked?: boolean;
  startFullscreened?: boolean;
  cssCode?: string;
}
