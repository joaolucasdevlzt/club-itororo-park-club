import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';

import StyledButton from 'src/components/button';
import CompanyRedirectCard from 'src/components/company-redirect-card';

export default function GroupCompanies() {
  const navigate = useNavigate()
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

      <Grid item  xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="ferias_facil" url="https://www.instagram.com/feriasfacil?igsh=MTcyYXplOXhjOWVtMg=="  />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="ffo" url="https://www.instagram.com/ffoperadora?igsh=aHZsaWs4b2NmMTlm" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="experience" url="https://www.instagram.com/lazerturexperience?igsh=MXFnMXAwNTQ2aGg0Ng==" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="corporate" url="" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_udi" url="https://www.instagram.com/azulviagensudi/" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_uberaba" url="https://www.instagram.com/azulviagensuberaba/" />
      </Grid>
      <Grid item xs={6} sm={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_vl" url="https://www.instagram.com/azulviagensvillalobos?igsh=MTBsYmh5cWo5Yzdwdw==" />
      </Grid>
      <Grid container item xs={12} display="flex" justifyContent="center" pt={5}>
        <Grid item xs={10} sm={5} md={3.3}>
          <StyledButton text="Saiba mais sobre o grupo LZT" callback={() => navigate('/sobre')} />
        </Grid>
      </Grid>
    </Grid>
  );
}
