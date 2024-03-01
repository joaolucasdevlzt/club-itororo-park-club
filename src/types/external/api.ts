import { SxProps } from '@mui/material';

interface ContentProps {
  icon: string;
  text: string;
}
export interface HighlightPackagesProps {
  fn?: () => void;
  sx?: SxProps;
  imageSx?: SxProps;
  width?: number | 'auto' | '100%';
  image: string;
  aspectRatio?: string;
  title: string;
  subtitle?: string;
  content?: ContentProps[];
  semiboldText?: string;
  boldBottomText?: number | null;
  bottomText?: string;
}

export interface PriceCardProps {
  price: number;
  oldPrice?: number | null;
  upfront?: string;
  split?: string;
  splitValue?: number | null;
  descriptionText?: string;
}
export interface PackageDescriptionProps extends PriceCardProps {
  image: string[];
  sx?: SxProps;
  title: string;
  subtitle?: string;
  content?: ContentProps[];
  items?: string[];
}
