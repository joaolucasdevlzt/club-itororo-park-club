import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { Typography } from '@mui/material';

export default function PackageDetails() {
  const params = useParams();

  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <Typography>Detalhes do pacote {id}</Typography>
    </>
  );
}
