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
  boldBottomText?: string;
  bottomText?: string;
}

export interface PackageDescriptionProps {
  sx?: SxProps;
  title: string;
  subtitle?: string;
  content?: ContentProps[];
  items?: string[];
}
