export type ICountryData = {
  placeholder: string;
  countryCode: ICountryCode;
  phoneCode: string;
  mask: string;
  subCodes: string[];
};
export type ICountryCode = 'ru' | 'kz' | 'by' | 'ua';

// страны присутствия
export const BASE_COUNTRIES: ICountryData[] = [
  {
    countryCode: 'ru',
    placeholder: '7 123 456 78-90',
    phoneCode: '7',
    mask: '9 999-999-99-99',
    subCodes: ['9'],
  },
  {
    countryCode: 'kz',
    placeholder: '7 123-456-78-90',
    phoneCode: '7',
    mask: '9 999-999-99-99',
    subCodes: [
      '7',
      '310',
      '311',
      '312',
      '313',
      '315',
      '318',
      '321',
      '324',
      '325',
      '326',
      '327',
      '336',
    ],
  },
  {
    countryCode: 'by',
    placeholder: '375 12 345-67-89',
    phoneCode: '375',
    mask: '999 99 999-99-99',
    subCodes: [],
  },
  {
    countryCode: 'ua',
    placeholder: '380 12 345-67-89',
    phoneCode: '380',
    mask: '999 99 999-99-99',
    subCodes: [],
  },
];
