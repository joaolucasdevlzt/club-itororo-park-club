export const HighlightFormInitialValues = {
  international: false,
  destination: '',
  location: '',
  accomodation: '',
  split: 'À vista',
  price: '',
  departure: '',
  returning: '',
  flight: '',
  meals: '',
  oldPrice: '',
  upfront: '',
  tags: [],
  folder: [],
};

export interface HighlightPackagesInterface {
  international: boolean;
  destination: string;
  location: string;
  accomodation: string;
  split: string;
  price: string;
  departure: string;
  returning: string;
  flight: string;
  meals: string;
  oldPrice: string;
  upfront: string;
  tags: string[];
  folder: { name: string; publicUrl: string }[];
}
