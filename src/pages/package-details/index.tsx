// import { useParams } from 'react-router';
import { useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useState, Dispatch, useEffect, SetStateAction } from 'react';

import httpRequest from 'src/utils/httpRequest';

import SectionWrapper from 'src/components/section-wrapper';
import { LoadingScreen } from 'src/components/loading-screen';

import CompletePackageInfo from 'src/sections/complete-package-info';
import HighlightPackageSection from 'src/sections/highlight-package';

import { packageDescriptionMock } from './mock';
import { HighlightFormInitialValues, HighlightPackagesInterface } from './static';

const getHighlightPackage = async (
  id: string,
  setData: (info: HighlightPackagesInterface) => void,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const data = await httpRequest(`/lazertur/highlight-packages/${id}`, {}, 'get');
  setData(data);
  setLoading(false);
};
const getAllHighlightPackage = async (
  setData: (info: HighlightPackagesInterface[]) => void,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const data = await httpRequest(`/lazertur/highlight-packages`, {}, 'get');
  setData(data);
  setLoading(false);
};

export default function PackageDetails() {
  const navigate = useNavigate();
  const [data, setData] = useState<HighlightPackagesInterface | string>(HighlightFormInitialValues);
  const [allHighlightPackages, setAll] = useState<HighlightPackagesInterface[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  console.log('data', data);
  const params = useParams();
  useEffect(() => {
    getHighlightPackage('5a4f6fe3-b6f6-40e0-9256-03c17cb8ca5d', setData, setLoading);
    getAllHighlightPackage(setAll, setLoading);
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (data === 'Pacote não encontrado') {
    navigate('/404');
  }
  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}

        <title>Lazertur - Detalhes de pacotes</title>
      </Helmet>
      <SectionWrapper sx={{ paddingTop: 5 }}>
        {typeof data !== 'string' && <CompletePackageInfo data={data} />}
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
