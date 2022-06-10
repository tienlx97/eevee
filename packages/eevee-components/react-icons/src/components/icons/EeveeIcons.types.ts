import * as React from 'react';

export type EeveeIconsProps<
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
> = TBaseAttributes & {
  primaryFill?: string;
  className?: string;
  filled?: 'true' | 'false';
  title?: string;
};
