export interface ImageInterface {
  titlePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  image: string;
  title?: string;
  aspectRatio?: string;
  fn?: () => void;
}
