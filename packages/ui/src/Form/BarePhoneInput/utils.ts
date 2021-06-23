import {
  rawCountries,
  DEFAULT_PROPS,
  MIN_PHONE_LENGHT,
  ICountryCode,
} from './constants';

export type ContryInfoType = {
  textСode: ICountryCode;
  numberCode: string;
  mask: string;
};

type CountriesObject = {
  numberCode: string;
  subCodes: Array<string>;
};

export function getCountryInfo(phone: string): ContryInfoType {
  if (phone?.length < 1) return DEFAULT_PROPS;
  const inputNumber = phone.replace(/\D/g, '');
  const result = rawCountries.filter(function ({
    numberCode,
    subCodes,
  }: CountriesObject) {
    const numberCodeLength = numberCode.length;
    const subCodesCount = subCodes.length;

    const codeMatchesArray = subCodesCount
      ? subCodes.filter(function (subCode: string) {
          return (
            `${numberCode}${subCode}`.indexOf(
              inputNumber.slice(0, subCode.length + 1),
            ) === 0
          );
        }).length > 0
      : numberCode.indexOf(inputNumber.slice(0, numberCodeLength)) === 0;
    return codeMatchesArray;
  });
  return result.length ? (result[0] as ContryInfoType) : DEFAULT_PROPS;
}

export function formatWithPattern(phone: string): string {
  if (phone.length < 1) return phone;
  const format = getCountryInfo(phone).mask;

  let hashCount = 0;
  const digits = phone.replace(/\D/g, '');
  const formattedNumberArray = format.split('');

  for (let i = 0, length: number = format.length; i < length; i++) {
    if (format[i] === '#') {
      formattedNumberArray[i] = digits[hashCount] || '#';
      hashCount++;
    }
  }
  const lastGridPosition = formattedNumberArray.indexOf('#');
  const lastPosition =
    lastGridPosition < 0 ? formattedNumberArray.length : lastGridPosition;

  return formattedNumberArray.join('').slice(0, lastPosition);
}

export function getCountryCode(
  value: string,
  countryCode: ICountryCode,
): ICountryCode {
  // начинаем смотреть что за код страны, после введения двух символов
  // из-за того, что у двух базовых стран одинаковый код 7 (kz и ru)
  if (value.length > 2) return getCountryInfo(value).textСode;
  return countryCode;
}

export function isPatternMatch(phone?: string): boolean {
  if (!phone) return false;
  // проверяем соответствует ли значение паттерну по определенной стране
  // если default – то проверяем то
  const inputNumber = phone.replace(/\D/g, '');
  const {mask, numberCode} = getCountryInfo(inputNumber);

  const inputNumberLength = inputNumber.length;
  const maskLength = mask.replace(/[\s-%]/g, '').length;

  // этот кейс для стран, в котором ожидаемое количество символов >= 11

  // если длина заявленного номера телефона >= MIN_PHONE_LENGHT
  // или если мы не распознали страну и идем по default кейсу
  // проверяем, что длина телефона больше или равна 11
  if (maskLength >= MIN_PHONE_LENGHT || !numberCode)
    return inputNumberLength >= MIN_PHONE_LENGHT;

  // этот кейс для номеров, где ожидаемое количество символов < 11
  // если ввели полную длину, то все ок
  return inputNumberLength === maskLength;

  // описаны два кейса валидации, т.к. основную часть телефонов нужно проверять
  // на адекватную длину => 11. Мы не можем проверять на точное соответствие маске
  // т.к. есть страны, у которых 11 или 12 возможных символов в номере телефона
  // и т.к. есть несколько стран с очень короткими номерами, подстраивать под
  // них основную проверку не хочется, их мы будем проверять на соответствие маске
}
