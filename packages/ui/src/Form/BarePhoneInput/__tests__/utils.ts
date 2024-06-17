import {BASE_COUNTRIES} from '../constants';
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
    expect(correctPhone('9629334471', '7', BASE_COUNTRIES[0].mask)).toBe(
      '79629334471',
    );
  });

  it('should replace 8 to 7 if number length is 11', () => {
    expect(correctPhone('89629334471', '7', BASE_COUNTRIES[0].mask)).toBe(
      '79629334471',
    );
  });

  it('should do nothing number starts with phone code', () => {
    expect(correctPhone('375335551122', '375', BASE_COUNTRIES[2].mask)).toBe(
      '375335551122',
    );
  });

  describe('autocomplete with double phoneCode', () => {
    it('ru phone number', () => {
      expect(correctPhone('779169001122', '7', BASE_COUNTRIES[0].mask)).toBe(
        '79169001122',
      );
    });

    it('kz phone number', () => {
      expect(correctPhone('777085641122', '7', BASE_COUNTRIES[1].mask)).toBe(
        '77085641122',
      );
    });

    it('by phone number', () => {
      expect(
        correctPhone('375375335551122', '375', BASE_COUNTRIES[2].mask),
      ).toBe('375335551122');
    });
  });
});
