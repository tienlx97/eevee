import { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type PostImageSlots = {
  root: NonNullable<EeveeSlot<'img'>>;
  wrap: NonNullable<EeveeSlot<'span'>>;
  caption: NonNullable<EeveeSlot<'span'>>;
};

export type PostImageProps = EeveeProps<Partial<PostImageSlots>> & {
  type?: 'native' | 'default';
  includeWhiteBackground?: boolean;
  marginBottom?: number;
  source?: string;
  title?: string;
};

export type PostImageState = EeveeState<PostImageSlots> &
  Pick<PostImageProps, 'includeWhiteBackground' | 'marginBottom' | 'source' | 'title' | 'type'> & {
    asBaseImg?: boolean;
    sizerSvgUrl?: string;
    nextImgWrapClasses?: string;
    nextImgSvgWrapClasses?: string;
    nextImgSvgImgClasses?: string;
  };
