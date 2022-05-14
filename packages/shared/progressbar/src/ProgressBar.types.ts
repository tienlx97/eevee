import React from 'react';

export interface IProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max: number;
  height?: number;
  colorTheme: 'warm' | 'primary' | 'cool';
  background?: string;
  includeNotches?: boolean;
  animated?: boolean;
}
