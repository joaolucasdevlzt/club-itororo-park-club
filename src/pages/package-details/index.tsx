// import { useParams } from 'react-router';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import SectionWrapper from 'src/components/section-wrapper';

import CompletePackageInfo from 'src/sections/complete-package-info';
import HighlightPackageSection from 'src/sections/highlight-package';

import { packageDescriptionMock } from './mock';

export default function PackageDetails() {
  const params = useParams();
  const { id = 0 } = params;
  const packageId = Number(id);
  return (
    <>
      <Helmet>
        <title>Lazertur - Detalhes de pacotes</title>
      </Helmet>
      <SectionWrapper sx={{ paddingTop: 5 }}>
        <CompletePackageInfo id={packageId} />
      </SectionWrapper>
      <SectionWrapper>
        <HighlightPackageSection
          sectionTitle="Outros pacotes em destaque"
          packageList={packageDescriptionMock}
        />
      </SectionWrapper>
    </>
  );
}
