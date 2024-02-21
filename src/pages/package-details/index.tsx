import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import IconButton from 'src/components/icon-button';
import SectionWrapper from 'src/components/section-wrapper';

export default function PackageDetails() {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <SectionWrapper>
        <IconButton
          callback={() => console.log('voltar')}
          icon="gravity-ui:chevron-left"
          text="Voltar para home"
          direction="left"
        />
      </SectionWrapper>
    </>
  );
}
