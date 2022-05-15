/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TippyProps } from '@tippyjs/react';

export interface ITooltipProps extends TippyProps {
  type?: string;
  when?: boolean;
  children: any;
}
