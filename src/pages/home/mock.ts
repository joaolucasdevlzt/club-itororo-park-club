import { HighlightPackagesProps } from 'src/types/external/api';

export const packaListMock: HighlightPackagesProps[] = [
  {
    image: '/assets/images/highlight-packages/rj.png',
    title: 'Rio de Janeiro',
    subtitle: 'Rio de Janeiro',
    content: [
      { icon: 'sun', text: '8 dias' },
      { icon: 'calendar', text: 'De 06/06/2024 à 15/06/2024' },
      { icon: 'coffee', text: 'Café da manhã incluso' },
    ],
    semiboldText: 'a partir de',
    boldBottomText: 359.59,
    bottomText: 'Parcela única',
  },
  {
    image: '/assets/images/highlight-packages/porto_galinhas.png',
    title: 'Porto de Galinhas',
    subtitle: 'Pernambuco',
    content: [
      { icon: 'sun', text: '8 dias' },
      { icon: 'calendar', text: 'De 06/06/24 à 15/06/24' },
      { icon: 'coffee', text: 'Café da manhã incluso' },
    ],
    semiboldText: '10x de',
    boldBottomText: 785.59,
    bottomText: 'Sem entrada',
  },
  {
    image: '/assets/images/highlight-packages/natal.png',
    title: 'Natal',
    subtitle: 'Rio Grande do Norte',
    content: [
      { icon: 'sun', text: '15 dias' },
      { icon: 'calendar', text: 'De 10/05/24 à 25/05/24' },
      { icon: 'all_inclusive', text: 'All inclusive' },
    ],
    semiboldText: '10x de',
    boldBottomText: 1359.59,
    bottomText: 'Sem entrada',
  },
  {
    image: '/assets/images/highlight-packages/fortaleza.png',
    title: 'Fortaleza',
    subtitle: 'Ceará',
    content: [
      { icon: 'sun', text: '5 dias' },
      { icon: 'calendar', text: 'De 18/09/24 à 23/09/24' },
      { icon: 'all_inclusive', text: 'All inclusive' },
    ],
    semiboldText: '10x de',
    boldBottomText: 559.59,
    bottomText: 'Sem entrada',
  },
];
