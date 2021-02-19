function toSnakeCase(camelCase) {
  return camelCase.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export default function stringifyCssProps(style) {
  if (!style) return '';
  return Object.entries(style !== null && style !== void 0 ? style : {}).map(([k, v]) => `${toSnakeCase(k)}:${v}`).join(';');
}