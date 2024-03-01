import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Box,
  Grid,
  Button,
  Dialog,
  Checkbox,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText,
  FormControlLabel,
  CircularProgress,
  DialogContentText,
} from '@mui/material';

import { request } from 'src/utils/fetch';

import FormProvider from '../hook-form/form-provider';
import {
  fieldStyles,
  titleStyles,
  buttonStyles,
  wrapperStyles,
  subtitleStyles,
  titleWrapperStyles,
} from './style';

type FormValuesProps = {
  name: string;
  email: string;
  site: string;
};

const newsLetterSchema = Yup.object().shape({
  name: Yup.string().nonNullable().required('Campo obrigatório'),
  email: Yup.string()
    .email('Certifique-se de inserir um email válido')
    .required('Campo obrigatório'),
  site: Yup.string().nonNullable().required(),
});

export default function Newsletter() {
  const [acknowledged, setAcknowledged] = useState(false);
  const [modal, setModal] = useState(false);
  const methods = useForm<FormValuesProps>({
    defaultValues: {
      name: '',
      email: '',
      site: 'LAZERTUR',
    },
    resolver: yupResolver(newsLetterSchema),
  });
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    const response: { id: string } = await request.post('/newsletter', data);
    if (response?.id) {
      setModal(true);
    }
  };

  const disableBtn = isSubmitting || !acknowledged;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={wrapperStyles}>
        <Box sx={titleWrapperStyles}>
          <Typography align="center" sx={titleStyles}>
            Assine nossa newsletter e fique por dentro das novidades
          </Typography>
          <Typography align="center" sx={subtitleStyles}>
            Inscreva-se agora e receba dicas extraordinárias que vão te ajudar a planejar suas
            próximas viagens.
          </Typography>

          <Grid container gap={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder="Nome"
                name="name"
                onChange={(e) => setValue('name', e.target.value)}
                sx={fieldStyles}
              />
              {errors.name?.message && <FormHelperText error>{errors.name.message}</FormHelperText>}
            </Grid>
            <Grid item xs={12} sm={7.5}>
              <TextField
                placeholder="Email"
                onChange={(e) => setValue('email', e.target.value)}
                name="email"
                sx={fieldStyles}
              />
              {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
            </Grid>
          </Grid>
          <FormControlLabel
            sx={{ typography: { fontFamily: 'Kanit-Light', fontSize: { xs: 16, sm: 20 } } }}
            control={
              <Checkbox
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: 'Kanit-Light',
                  fontSize: 18,
                  color: (t) => t.palette.secondary.main,
                }}
              >
                Ao se inscrever, você concorda em receber nossa newsletter e receber dicas sobre os
                melhores passeios turísticos.
              </Typography>
            }
          />
          <Button disabled={disableBtn} type="submit" sx={buttonStyles}>
            {isSubmitting ? <CircularProgress size={32} color="secondary" /> : 'Enviar'}
          </Button>
        </Box>
      </Box>
      <Dialog open={modal}>
        <DialogTitle sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}>
          Seu email foi cadastrado com sucesso
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              fontFamily: 'Kanit-Regular',
              color: (t) => t.palette.secondary.main,
              textAlign: 'center',
            }}
          >
            Em breve você receberá nossa newsletter
          </DialogContentText>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                fontFamily: 'Kanit-Regular',
                backgroundColor: (t) => t.palette.primary.main,
                color: 'white',
              }}
              onClick={() => setModal(false)}
            >
              Ok
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
}
