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
export function correctPhone(value: string, phoneCode: string): string {
  const clearValue: string = value.replace(/[^\d]/g, '');
  if (clearValue.startsWith(phoneCode)) {
    return clearValue;
  } else if (clearValue.startsWith('8') && clearValue.length === 11) {
    // paste 89031111111 -> 79031111111
    return clearValue.replace('8', '7');
  } else if (clearValue.startsWith('9') && clearValue.length === 10) {
    // paste 9031111111 -> 79031111111
    return `${phoneCode}${clearValue}`;
  }
  return clearValue;
}
