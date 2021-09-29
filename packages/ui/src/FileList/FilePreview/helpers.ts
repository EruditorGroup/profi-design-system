const NAME_LENGTH = 30;
const COMMA_DELIMETR = '...';

export function makeFileName(fileName: string, nameLength?: number): string {
  if (!fileName) return '';

  const _nameLength = nameLength || NAME_LENGTH;

  if (fileName.length <= _nameLength) return fileName;

  const lastCommaIndex = fileName.lastIndexOf('.');
  const name = fileName.substring(0, lastCommaIndex);
  const extension = fileName.substring(lastCommaIndex);

  const subName = name.substring(
    0,
    _nameLength - COMMA_DELIMETR.length - extension.length,
  );

  return subName + COMMA_DELIMETR + extension.toLowerCase();
}
