import { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type PostImageSlots = {
  root: NonNullable<Slot<'img'>>;
  wrap: NonNullable<Slot<'span'>>;
  caption: NonNullable<Slot<'span'>>;
};

export type PostImageProps = ComponentProps<Partial<PostImageSlots>> & {
  type?: 'native' | 'default';
  includeWhiteBackground?: boolean;
  marginBottom?: number;
  source?: string;
  title?: string;
};

export type PostImageState = ComponentState<PostImageSlots> &
  Pick<PostImageProps, 'includeWhiteBackground' | 'marginBottom' | 'source' | 'title' | 'type'> & {
    asBaseImg?: boolean;
    sizerSvgUrl?: string;
    nextImgWrapClasses?: string;
    nextImgSvgWrapClasses?: string;
    nextImgSvgImgClasses?: string;
  };
