import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type IllustrationBlockSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  titleWrap: NonNullable<EeveeSlot<'h3'>>;
  imgWrap: NonNullable<EeveeSlot<'div'>>;
  captionWrap: NonNullable<EeveeSlot<'figcaption'>>;
  contentWrap: NonNullable<EeveeSlot<'ol'>>;
};

export type IllustrationBlockProps = EeveeProps<Partial<IllustrationBlockSlots>> & {
  title?: string;
  author?: string;
  authorLink?: string;
  sequential?: boolean;
};

export type IllustrationBlockState = EeveeState<IllustrationBlockSlots> &
  Pick<IllustrationBlockProps, 'title' | 'author' | 'authorLink' | 'sequential'> & {};
