function toSnakeCase(camelCase: string): string {
  return camelCase.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export default function stringifyCssProps(style?: React.CSSProperties): string {
  if (!style) return '';
  return Object.entries(style ?? {})
    .map(([k, v]) => `${toSnakeCase(k)}:${v}`)
    .join(';');
}
