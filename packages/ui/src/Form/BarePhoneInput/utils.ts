import {BASE_COUNTRIES, ICountryCode, ICountryData} from './constants';

export type ContryInfoType = {
  textСode: ICountryCode;
  numberCode: string;
  mask: string;
};

/** Returns [ICountryData] by provided country code. By default, returns [DEFAULT_COUNTRY] */
export const getCountryByCode = (code?: ICountryCode): ICountryData => {
  return (
    BASE_COUNTRIES.find(({countryCode}) => countryCode === code) ||
    DEFAULT_COUNTRY
  );
};

// если телефон не распознан – по дефолту ставим россию, и разрешаем
// вводить дофига символов
export const DEFAULT_COUNTRY: ICountryData = BASE_COUNTRIES[0];

/**
 * Returns [ICountryData] by provided phone number.
 * Number should have at least one char else you'll get default country
 */
export function getCountryByPhone(
  phone: string,
  defaultCountryCode?: ICountryCode,
): ICountryData {
  const inputNumber = phone.replace(/[^\d]/g, '');
  if (inputNumber?.length < 1) {
    return getCountryByCode(defaultCountryCode);
  }
  const result = BASE_COUNTRIES.find(({phoneCode, subCodes}) => {
    return (
      (!subCodes.length && inputNumber.startsWith(phoneCode)) ||
      subCodes.find((subCode) => {
        return inputNumber.startsWith(`${phoneCode}${subCode}`);
      })
    );
  });

  return result || getCountryByCode(defaultCountryCode);
}

/** Returns phone with code prefix if nesessary */
export function correctPhone(
  value: string,
  phoneCode: string,
  mask: string,
): string {
  if (value.startsWith('8') && value.length === 11) {
    // paste 89031111111 -> 79031111111
    return value.replace('8', '7');
  }

  if (value.startsWith('9') && value.length === 10) {
    // paste 9031111111 -> 79031111111
    return `${phoneCode}${value}`;
  }

  // События вставки и autocomplete
  const phoneLength = mask.replace(/ |-/g, '').length;
  const inputValuePhoneCode = value.slice(0, phoneCode.length);

  if (value.length > phoneLength && inputValuePhoneCode === phoneCode) {
    const doublePhoneCode = value.slice(
      phoneCode.length,
      phoneCode.length + phoneCode.length,
    );
    if (doublePhoneCode) return value.slice(phoneCode.length);
  }

  return value;
}
