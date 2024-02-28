import { DropzoneOptions } from 'react-dropzone';

import { Theme, SxProps } from '@mui/material/styles';

import { ExtendFile } from '../file-thumbnail/types';

// ----------------------------------------------------------------------

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}
export interface CustomImage extends ExtendFile {
  name: string;
  publicUrl?: string;
  preview?: string;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  sx?: SxProps<Theme>;
  thumbnail?: boolean;
  placeholder?: React.ReactNode;
  helperText?: React.ReactNode;
  disableMultiple?: boolean;
  //
  file?: CustomFile | string | null;
  onDelete?: VoidFunction;
  //
  files?: (CustomImage | string)[];
  onUpload?: VoidFunction;
  onRemove?: (file: CustomFile | string | CustomImage) => void;
  onRemoveAll?: VoidFunction;
}
