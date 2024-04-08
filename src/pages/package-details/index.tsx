// import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router';
import { useState, Dispatch, useEffect, SetStateAction } from 'react';

import httpRequest from 'src/utils/httpRequest';

import SectionWrapper from 'src/components/section-wrapper';
import { LoadingScreen } from 'src/components/loading-screen';

import CompletePackageInfo from 'src/sections/complete-package-info';
import HighlightPackageSection from 'src/sections/highlight-package';

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
  const params = useParams();
  const { id = '0' } = params;
  useEffect(() => {
    getHighlightPackage(id, setData, setLoading);
    getAllHighlightPackage(setAll, setLoading);
  }, [id]);
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
        {!!allHighlightPackages.length && (
          <HighlightPackageSection
            sectionTitle="Outros pacotes em destaque"
            packageList={allHighlightPackages}
          />
        )}
      </SectionWrapper>
    </>
  );
}
