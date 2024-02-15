import { Grid } from '@mui/material';

import CompanyRedirectCard from 'src/components/company-redirect-card';

export default function GroupCompanies() {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="ferias_facil" url="" />
      </Grid>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="ffo" url="" />
      </Grid>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="experience" url="" />
      </Grid>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="corporate" url="" />
      </Grid>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="azul_udi" url="" />
      </Grid>
      <Grid item xs={12} md={3.7}>
        <CompanyRedirectCard company="azul_uberaba" url="" />
      </Grid>
      <Grid item container xs={12} md={12} display="flex" justifyContent="center">
        <Grid item container xs={12} md={3.7}>
          <CompanyRedirectCard company="azul_vl" url="" />
        </Grid>
      </Grid>
    </Grid>
  );
}
