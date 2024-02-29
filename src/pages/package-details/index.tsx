// import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import SectionWrapper from 'src/components/section-wrapper';

import CompletePackageInfo from 'src/sections/complete-package-info';
import HighlightPackageSection from 'src/sections/highlight-package';

import { packaListMock } from '../home/mock';
import { packageDescriptionMock } from './mock';

export default function PackageDetails() {
  // const params = useParams();
  // // const { id } = params;
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>

      <SectionWrapper sx={{ paddingTop: 5 }}>
        <CompletePackageInfo />
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
