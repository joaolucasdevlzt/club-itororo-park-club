import { Grid } from '@mui/material';

import StyledButton from 'src/components/button';
import CompanyRedirectCard from 'src/components/company-redirect-card';

export default function GroupCompanies() {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Grid item  xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="ferias_facil" url=""  />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="ffo" url="" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="experience" url="" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="corporate" url="" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_udi" url="" />
      </Grid>
      <Grid item xs={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_uberaba" url="" />
      </Grid>
      <Grid item xs={6} sm={6} md={2.7} display="flex" justifyContent="center">
        <CompanyRedirectCard company="azul_vl" url="" />
      </Grid>
      <Grid container item xs={12} display="flex" justifyContent="center" pt={5}>
        <Grid item xs={10} sm={5} md={3.3}>
          <StyledButton text="Saiba mais sobre o grupo LZT" callback={() => ''} />
        </Grid>
      </Grid>
    </Grid>
  );
}
