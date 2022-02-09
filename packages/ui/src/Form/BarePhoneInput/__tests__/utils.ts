import {
  DEFAULT_COUNTRY,
  getCountryByCode,
  getCountryByPhone,
  correctPhone,
} from '../utils';

jest.unmock('../utils');
jest.unmock('../constants');

describe('getCountryByCode', () => {
  it('should return default country if code is not recognized', () => {
    expect(getCountryByCode('blablabla')).toBe(DEFAULT_COUNTRY);
  });

  it('should return valid country with mask if code is recognized', () => {
    const {countryCode, mask} = getCountryByCode('ua');
    expect(countryCode).toBe('ua');
    expect(mask).toBe('### ## ###-##-##');
  });
});

describe('getCountryByPhone', () => {
  it('should return default country if phone is not recognized', () => {
    expect(getCountryByPhone('0000000000')).toBe(DEFAULT_COUNTRY);
  });

  it('should return valid country with mask if phone is recognized', () => {
    const {countryCode} = getCountryByPhone('375 33 555-11-22');
    expect(countryCode).toBe('by');
  });
});

describe('correctPhone', () => {
  it('should add 7 in the start if it not preset', () => {
    expect(correctPhone('962 933-44-71', '7')).toBe('79629334471');
  });

  it('should replace 8 to 7 if number length is 11', () => {
    expect(correctPhone('8 (962) 933-44-71', '7')).toBe('79629334471');
  });

  // TODO:
  // it('should do nothing if number length is not 11', () => {
  //   expect(correctPhone('8 (962) 933-4', '7')).toBe('89629334');
  // });

  it('should do nothing number starts with phone code', () => {
    expect(correctPhone('375 33 555-11-22', '375')).toBe('375335551122');
  });
});
