import { SxProps } from '@mui/material';

export interface CTACardInterface {
  fn: () => void;
  icon: string;
  iconProps?: SxProps;
  text: String;
  cardProps?: SxProps;
  buttonText: string;
  buttonProps?: SxProps;
}
