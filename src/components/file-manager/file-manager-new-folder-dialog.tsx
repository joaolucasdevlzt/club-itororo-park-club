/* eslint-disable no-useless-escape */
import { useSnackbar } from 'notistack';
import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog, { DialogProps } from '@mui/material/Dialog';

import Iconify from 'src/components/iconify';
import { Upload } from 'src/components/upload';

// ----------------------------------------------------------------------

interface Props extends DialogProps {
  title?: string;
  imageName?: string;
  //
  onCreate?: VoidFunction;
  onUpdate?: VoidFunction;
  //
  folderName?: string;
  onChangeFolderName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //
  open: boolean;
  onClose: VoidFunction;
  carouselName: string;
  description?: string;
}

export default function FileManagerNewFolderDialog({
  title = 'Enviar nova imagem',
  imageName,
  open,
  onClose,
  //
  onCreate,
  onUpdate,
  //
  carouselName,
  folderName,
  onChangeFolderName,
  description,
  ...other
}: Props) {
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [loading, setIsLoading] = useState(false); // eslint-disable-line


  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (!open) {
      setFiles([]);
    }
  }, [open, setFiles]);

  const formatFileName = (fileName: string) => {
    const cleanedFileName = fileName.replace(/[^\w\d()_]/g, '');

    const fileNameWithoutParentheses = cleanedFileName.replace(/[\(\)]/g, '');

    return fileNameWithoutParentheses;
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles([...files, ...newFiles]);
    },
    [files, setFiles]
  );

  const handleUpload = async () => {
    if (files.length === 0) {
      return;
    }

    setIsLoading(true);
    try {
      const uploadPromises = files.map(async (file, index) => {
        const formData = new FormData();
        const formattedFileName = typeof file === 'string' ? file : formatFileName(file.name);
        formData.append(`file${index}`, file as File, formattedFileName);
      });
      await Promise.all(uploadPromises);
      enqueueSnackbar('Upload concluído com sucesso');

      setFiles([]);
      onClose();
    } catch (error) {
      enqueueSnackbar('Falha no upload, tente novamente');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFile = (inputFile: File | string) => {
    const filtered = files.filter((file) => file !== inputFile);
    setFiles(filtered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}> {title} </DialogTitle>

      <DialogContent dividers sx={{ pt: 1, pb: 0, border: 'none' }}>
        {(onCreate || onUpdate) && (
          <TextField
            fullWidth
            label="Folder name"
            value={folderName}
            onChange={onChangeFolderName}
            sx={{ mb: 3 }}
          />
        )}

        <Upload multiple files={files} onDrop={handleDrop} onRemove={handleRemoveFile} />
      </DialogContent>

      <DialogActions>
        {!!files.length && (
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:cloud-upload-fill" />}
            onClick={handleUpload}
          >
            Enviar
          </Button>
        )}

        {!!files.length && (
          <Button variant="outlined" color="inherit" onClick={handleRemoveAllFiles}>
            Remove all
          </Button>
        )}

        {(onCreate || onUpdate) && (
          <Stack direction="row" justifyContent="flex-end" flexGrow={1}>
            <Button variant="soft" onClick={onCreate || onUpdate}>
              {onUpdate ? 'Save' : 'Create'}
            </Button>
          </Stack>
        )}
      </DialogActions>
      <Typography sx={{ textAlign: 'center', padding: 2 }}>{description}</Typography>
    </Dialog>
  );
}
