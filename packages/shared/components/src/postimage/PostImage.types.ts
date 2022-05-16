/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBaseImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  type?: 'native' | 'default';
  source?: string;
  marginBottom?: number;
  includeWhiteBackground?: boolean;
  fallback?: any;
}

export interface IPostImage extends IBaseImageProps {
  darkSrc?: any;
  darkFallback?: any;
  lightSrc?: any;
  lightFallback?: any;
}

export interface IImageElem extends React.ImgHTMLAttributes<HTMLImageElement> {
  asImage?: boolean;
}
